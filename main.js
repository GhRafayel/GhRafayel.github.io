import express from 'express';
import fs from 'fs';
import path  from 'path';
const app = express();

//app.use((req, res, next) => next () );
app.use(express.static('public'));
app.use(express.static('public/shoppingList'));
app.use(express.static('public/game_1'));
app.use(express.static('public/game_2'));
app.use(express.static('public/game_memory'));
app.use(express.static('public/weather_liver'));
app.use(express.static('public/stopWatch'));
app.use(express.static('public/weather'));
app.use(express.static('public/calculator'));



app.use(express.json());

app.get('/', (req, res) => {
  req.redirect("public/index.html");
});


app.get('/game_1', (req, res) => {
  fs.promises.readFile(path.resolve('public/game_1/game_1.html'), 'utf-8').then(html =>{
    res.send(html);
  });
});

app.get('/game_2', (req, res) => {
  fs.promises.readFile(path.resolve('public/game_2/game_2.html'), 'utf-8').then(html =>{
    res.send(html);
  })
});

app.get('/game-memory', (req, res) => {
  fs.promises.readFile(path.resolve('public/game_memory/game_memory.html'), 'utf-8').then(html =>{
    res.send(html);
  })
});

app.get('/weather_liver', (req, res) => {
  fs.promises.readFile(path.resolve('public/weather_liver/weather_liver.html'), 'utf-8').then(html =>{
    res.send(html);
  })
});

app.get('/stopWatch', (req,res) => {
  fs.promises.readFile(path.resolve('public/stopWatch/stopWatch.html'), "utf-8")
  .then(html => {
    res.send(html);
  });
  
});
app.get('/weather', (req, res) => {
  fs.promises.readFile(path.resolve('public/weather/weather.html'), 'utf-8')
  .then(html => res.send(html));
})

app.get('/calculator', (req, res) => {
    fs.promises.readFile(path.resolve('public/calculator/calculator.html'), 'utf-8')
    .then(html => res.send(html));
});
app.get('/shoppingList/', (req, res) => {
  fs.promises.readFile(path.resolve('public/shoppingList/shoppingList.html'), 'utf-8').then(html =>{
    res.send(html);
  })
});


app.get('/shoppingList/todo', (req, res) => {
  fs.promises.readFile(path.resolve('data.json')).then(json =>{
    res.send(json);
  });
});

app.post('/shoppingList/todo', (req, res) => {
  fs.promises
  .writeFile(path.resolve("data.json"),JSON.stringify(req.body,undefined,2))
  .then(json =>{
  }).catch(()=>{
    res.send('error');
  })
})

app.listen(process.env.POST);
