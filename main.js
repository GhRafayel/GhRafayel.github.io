import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.resolve("index.html"));
});

app.get("/calculator", (req, res) => {
  res.sendFile(path.resolve("calculator.html"));
});


app.get("/game_memory", (req, res) => {
  res.sendFile(path.resolve("game_memory.html"));
});

app.get("/game_2", (req, res) => {
  res.sendFile(path.resolve("game_2.html"));
});

app.get("/game_1", (req, res) => {
  res.sendFile(path.resolve("game_1.html"));
});

app.get("/stopWatch", (req, res) => {
  res.sendFile(path.resolve("stopWatch.html"));
});

app.get("/weather_liver", (req, res) => {
  res.sendFile(path.resolve("weather_liver.html"));
});

app.get("/weather", (req, res) => {
  res.sendFile(path.resolve("weather.html"));
});

app.get("/shoppingList", (req, res) => {
  res.sendFile(path.resolve("shoppingList.html"));
});

app.get('/todo', (req, res) => {
  res.sendFile(path.resolve("data.json"));
  // fs.promises.readFile(path.resolve('data.json'), 'utf-8').then(json =>{
  //   res.send(json);
  // })
})
// app.post('/todo', (req, res) => {
//   fs.promises
//   .writeFile(path.resolve("data.json"),JSON.stringify(req.body,undefined,2))
//   .catch(()=>{
//     res.send('error');
//   })
  
// })

app.listen(process.env.PORT);