;
import express from 'express'
import fs from 'fs'
import path from 'path'
import { json } from 'stream/consumers';

const app = express();
const port = 1234

app.use(express.json());

const noteFile = path.join('./notes.json');
const taskFile = path.join('./tasks.json');

function loadData(file)  {
    if(!fs.existsSync(file)){
        fs.writeFileSync(file, '[]');
    }
    const data = fs.readFileSync(file, 'utf-8');
    return JSON.parse(data);
}

function saveData(file , data) {
    fs.writeFileSync(file, JSON.stringify(data , null ,2));
}
 // notes api ///

app.get('/notes', (req,res) => {
    const notes = loadData(noteFile);
    res.json({notes});
})
app.post('/notes', (req,res) => {
    const {title, content} = req.body;
    if(!title || !content){
        return res.status(400).json({error: "title and content both required"});
    }
    const notes = loadData(noteFile);
    const newNotes = {
        id: notes.length + 1,
        title,
        content,
        CreatedAt : new Date().toISOString()
    }
    notes.push(newNotes);
    saveData(noteFile, notes);
    res.status(200).json({sucess : true , data : newNotes});
})

app.listen(port, () => console.log("the server is upp baby !!!"));