import express from 'express';
import appRoutes from './src/routes/homepage.js'

const app = express()
const PORT = 8000;

app.use(express.json())
app.use('/', appRoutes);
app.listen(PORT, () => console.log(`App is listening to ${PORT}`));