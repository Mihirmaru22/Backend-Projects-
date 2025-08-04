import mongoose from "mongoose";
import express from 'express'
import { Todo } from "./models/Todo.js";

let connecty = await mongoose.connect("mongodb://localhost:27017/todo")

const app = express();
const port = 2222;

app.get('/', (req,res) => {
    const todo = new Todo({title : "clean", desc : "clean home", isDone : false})
    todo.save();
})

app.listen(port, () => console.log("server is working"))