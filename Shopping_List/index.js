import express from 'express';
import fs from 'fs';
import path  from 'path';
const app = express();

//app.use((req, res, next) => next () );
app.use(express.static('public'));
app.use(express.json());

app.get('https://ghrafayel.github.io/Shopping_List/public/index.html', (req, res) => {
  req.redirect("../Shopping_List/public/index.html");
});

app.get('https://ghrafayel.github.io/Shopping_List/public/index.html', (req, res) => {
  fs.promises.readFile(path.resolve('data.json'), 'utf-8').then(json =>{
    res.send(json);
    console.log(json);
  })
})
app.post('https://ghrafayel.github.io/Shopping_List/public/index.html', (req, res) => {
  fs.promises
  .writeFile(path.resolve("data.json"),JSON.stringify(req.body,undefined,2))
  .then(json =>{
    console.log(todo);
  }).catch(()=>{
    res.send('error');
  })
})

app.listen(process.env.POST);
