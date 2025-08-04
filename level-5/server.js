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

// 🔴 Custom error handler (must be AFTER all routes and middleware)
app.use((err, req, res, next) => {
    console.error("🔥 ERROR:", err.stack);
    res.status(500).json({ error: "Something went wrong on the server!" });
});

app.listen(port, () => console.log(`the server is running of ${port}`))