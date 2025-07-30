import express from 'express'

const app = express()
const port = 4000

app.use(express.json());

let bugs = []

app.get('/', (req,res) =>{
    res.send("hello welcome to bug finder");
});

app.get('/bugs', (req,res) =>{
    res.json({bugs})
});

app.post('/bugs', (req,res) =>{
    const {title, description} = req.body;

    if(!title || !description){
        res.status(400).json({error: "title and description are required"})
    }

    const newBugs = {
        id : bugs.length + 1,
        title,
        description,
        timeStamp: new Date().toISOString()
    }

    bugs.push(newBugs);
    res.status(201).json({Sucess :  true , data : newBugs});
});

app.listen(port, () => console.log("server is running baby !!"))