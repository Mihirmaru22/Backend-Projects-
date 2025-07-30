import express from 'express'
import quotesRoutes from './routes/quotesRoutes.js';

const app = express();
const port = 1000

// Middleware
app.use(express.json());

// Mount routes
app.use('/quotes', quotesRoutes);

app.get('/', (req,res) => {
    res.send("ello allah hu akabar boooom")
});


app.listen(port,() => {
    console.log("the server is lit up bitch !!")
})