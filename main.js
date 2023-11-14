import express from 'express';
import fs from 'fs';
import path  from 'path';


const app = express();

//require dotenv/config 
// npm install dotenv --save-dev
//app.use((req, res, next) => next () );

app.use(express.static(path.resolve('./')));

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.resolve("index.html"));
});

app.get('/Bill_total', (req, res) => {
  res.sendFile(path.resolve("Bill_total.html"));
});

app.get('/Stop_Watch', (req, res) => {
  res.sendFile(path.resolve("Stop_Watch.html"));
});


app.get('/weather', (req, res) => {
  res.sendFile(path.resolve('weather.html'));
});

app.get('/weatherlive', (req, res) => {
  res.sendFile(path.resolve("weatherlive.html"));
});
app.get('/shopping', (req, res) => {
  res.sendFile(path.resolve('shopping.html'));
});

app.get('/game_1', (req, res) => {
  res.sendFile(path.resolve("game_1.html"));
});

app.get('/game_2', (req, res) => {
  res.sendFile(path.resolve("game_2.html"));
});
app.get('/memory-game', (req, res) => {
  res.sendFile(path.resolve("game_memory.html"));
});

app.get('/todo', (req, res) => {
  
fs.promises.readFile(path.resolve('data.json'), 'utf-8')
.then(json => {
  res.send(json);
});
})

app.post('/todo', (req, res) => {
  fs.promises
  .writeFile(path.resolve("data.json"),JSON.stringify(req.body,undefined,2))
  .then(json => {
    console.log(todo);
  })
  .catch(()=>{
    res.send('error');
  })
})


app.listen(process.env.PORT);
