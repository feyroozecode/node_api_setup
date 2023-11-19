const express = require("express");
import { connectToDb } from "./src/db/db";

const PORT = 3031;

const app = express();

connectToDb();
app.use(express.json())

