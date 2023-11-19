import mongoose  from "mongoose";
import { DB_DATA } from "../static_datas/db_datas";

const LOCAL_DB_NAME = `mongoose://localhost:27017/${DB_DATA.DATABASE_NAME}`
const DATABASE_URL = process.