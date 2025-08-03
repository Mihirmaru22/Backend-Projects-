import express from 'express'
import notesRouter from './routes/notesRoutes.js';

const app = express();
const port = 9000;

app.use(express.json());
app.use('/notes',notesRouter);

app.get('/',(req,res) =>{
    res.send("hello world");
})

app.listen(port,() => console.log("hello server is on"));
