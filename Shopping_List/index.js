import express from 'express';
import fs from 'fs';
import path  from 'path';
const app = express();

//app.use((req, res, next) => next () );
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  //req.redirect("public/index.html");
  req.redirect("public/index.html");
});

//       https://ghrafayel.github.io/Shopping_List/public/index.html

app.get('/Shopping_List', (req, res) => {
  fs.promises.readFile(path.resolve('data.json'), 'utf-8').then(json =>{
    res.send(json);
  });
});
app.post('/Shopping_List', (req, res) => {
  fs.promises
  .writeFile(path.resolve("data.json"),JSON.stringify(req.body,undefined,2))
  .then(json =>{
   
  }).catch(()=>{
    res.send('error');
  });
});

app.listen(process.env.POST);
