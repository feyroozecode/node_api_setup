import { connect } from "mongoose";
import connec
const express = require("express");

const PORT = 3031;

const app = express();

connectToDb();
app.use(express.json())
