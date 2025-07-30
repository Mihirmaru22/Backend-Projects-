import express from 'express'

const app = express();
const port = 2000;


app.get('/', (req,res) => {
    res.send('hello, vaultZero');
});

app.get('/status',(req,res) => {
    res.json({server : "running"});
})

app.listen(port,() => console.log("the server is up baby !!!"));