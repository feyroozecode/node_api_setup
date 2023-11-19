import { connect } from "mongoose";
import { connectToDb } from "./src/db/db";
const express = require("express");

const PORT = 3031;

const app = express();

connectToDb();
app.use(express.json())
