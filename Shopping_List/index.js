import express from 'express';
import fs from 'fs';
import path  from 'path';
const app = express();

//app.use((req, res, next) => next () );
app.use(express.static('/Shopping_List/public'));
app.use(express.json());
app.get('/', (req, res) => {
  //req.redirect("public/index.html");
  req.redirect("/Shopping_List/public/index.html")
});

app.get('https://ghrafayel.github.io/Shopping_List/public/index.html', (req, res) => {
  fs.promises.readFile(path.resolve('/Shopping_List/data.json'), 'utf-8').then(json =>{
    res.send(json);
    
  })
})
app.post('https://ghrafayel.github.io/Shopping_List/public/index.html', (req, res) => {
  fs.promises
  .writeFile(path.resolve("/Shopping_List/data.json"),JSON.stringify(req.body,undefined,2))
  .then(json =>{
   
  }).catch(()=>{
    res.send('error');
  })
})

app.listen(process.env.POST);
