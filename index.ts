import { connectToDb } from "./src/db/db";
import { API } from "./src/static_datas/api_routes";
const express = require("express");
const cors = require("cors");
const routes = require('./src/routes/index.router');

const PORT = 3031;
const app = express();

connectToDb();
app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: any) => {
    res.send(`Hi welcome, aHLAN wA sAHLAN`);
    console.log(`Hi welcome, aHLAN wA sAHLAN`);
    
})

app.use(`${API.API_V1_BASE_ROUTE}`, routes)

const server = app.listen(PORT, () => {
    console.log(`Server listen on localhost:${PORT}`);
    
})

process.on('uncaughtException', (err: any, origin: any) => {
   console.log(`Caught exception: ${err}\n` + `Exception origin: ${origin}` );
   server.close();
})