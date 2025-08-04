import express from 'express'
import mongoose from 'mongoose';
import { Emp } from './models/data.js';

let connecty = await mongoose.connect("mongodb://localhost:27017/employ")

const app = express()
const port = 2090;
const name = ['harry', 'raj', 'kiran', 'roshni', 'kapil'];
const language = ['python', 'java', 'ruby', 'cpp', 'javaScript'];
const city = ['raipur', 'newYork', 'kaanpur', 'dholakpur', 'kota'];
const isManager = ['true', 'false'];

const salary = [2000000, 4000000, 5000000, 1000000, 3500000]


app.get('/', (req, res) => {
    for (let i = 0; i < 10; i++) {

        const randomName = name[Math.floor(Math.random() * name.length)];

        const randomLanguare = language[Math.floor(Math.random() * language.length)];

        const randomCity = city[Math.floor(Math.random() * city.length)];

        const randomSalary = salary[Math.floor(Math.random() * salary.length)];

        const randomIsManager = isManager[Math.floor(Math.random() * 2)];

        const emp = new Emp({ name: randomName, salary: randomSalary, language: randomLanguare, city: randomCity, isManager: randomIsManager })
        emp.save();

    }
});



app.listen(port, () => console.log("server is on"));