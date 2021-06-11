import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import axios from 'axios';

const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());

const fortunes = fs
  .readFileSync(`${__dirname}/fortunes.txt`, 'utf-8')
  .split('\n');

const getFortune = () => {
  const rand = Math.round(Math.random() * fortunes.length - 1);
  return fortunes[rand];
};

app.post('/api/v1/fortune', (req, res) => {
  const payload = req.body;

  console.log(payload);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
