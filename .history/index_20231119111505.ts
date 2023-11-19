const express = require("express");
import { connectToDb } from "./src/db/db";

const PORT = 3031;

const app = express();

connectToDb();
app.use(express.json())

app.get('/', (req: Request, res: any) => {

    res.send('');

    console.log(`Hi welcome`);
    
})

const server = app.listen(PORT, () => {
    console.log(`Server listen on localhost`);
    
})