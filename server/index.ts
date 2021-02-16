import * as express from "express";
import { Application, Request, Response, NextFunction } from 'express';
import * as path from 'path'; // NEW
import apiRoute from './routes/apiRoute';
import cors from 'cors';
//ADDED CORS BELOW
// const cors = require('cors');



const app = express.default();

//INVOKED CORS BELOW
app.use(cors());
// const port = process.env.PORT || 3000;
const port: number = 3000;
const DIST_DIR = path.resolve(__dirname, '../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW

app.use(express.static(DIST_DIR)); // NEW
