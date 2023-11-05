import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
app.use(express.json());
app.use(express.static(path.resolve('../client/build')))



app.get('/shopping', (req, res) => {
  res.sendFile(path.resolve('../client/build/index.html'))
})
app.get('/Weather', (req, res) => {
  res.sendFile(path.resolve('../client/build/index.html'))
});
app.get('/Timer', (req, res) => {
  res.sendFile(path.resolve('../client/build/index.html'))
});
app.get('/Calculation', (req, res) => {
  res.sendFile(path.resolve('../client/build/index.html'))
});
app.get('/Game1', (req, res) => { 
  res.sendFile(path.resolve('../client/build/index.html'))
})
app.get('/game2', (req, res) => {
  res.sendFile(path.resolve('../client/build/index.html'))
})
app.get('/game3', (req, res) => {
  res.sendFile(path.resolve('../client/build/index.html'))
})



app.get('/list', (req, res) => {
  fs.promises.readFile(path.resolve('data.json'), 'utf-8')
  .then(json =>{
    res.send(json);
  })
})
app.post('/list', (req, res) => {
  fs.promises
  .writeFile(path.resolve("data.json"),JSON.stringify(req.body,undefined,2))
  .then(json =>  console.log(todo))
  .catch(()=>{
    res.send('error');
  })
})
 

app.listen(process.env.PORT || 3002 )