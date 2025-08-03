import express from 'express'
import userRoutes from './routes/userRoutes.js'
import { logger } from './middleware/logger.js';

const app = express();
const port = 5454;

app.use(express.json());
app.use(logger)
app.use('/api', userRoutes)
app.get('/', (req,res) => {
    res.send("hello ji kya hal chal");
})


app.listen(port, () => console.log(`the server is running of ${port}`))