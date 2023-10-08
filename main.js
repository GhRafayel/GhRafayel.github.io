import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
app.use(express.json());
//app.use(express.static(''))


app.get('/list', (req, res) => {
  fs.promises.readFile(path.resolve('data.json'), 'utf-8')
  .then(json =>{
    res.send(json);
  })
})
app.post('/list', (req, res) => {
  fs.promises
  .writeFile(path.resolve("data.json"),JSON.stringify(req.body,undefined,2))
  .then(json => {
    console.log(todo);
  })
  .catch(()=>{
    res.send('error');
  })
})
 

app.listen(process.env.PORT || 3002 )