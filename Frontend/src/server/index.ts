
import express from 'express';
import { api } from './api';

const app = express();

app.use(api);
app.get('/api/test', (req,res)=> res.send('this is a test api'));
app.listen(3002, () => console.log('Server Started !!'));