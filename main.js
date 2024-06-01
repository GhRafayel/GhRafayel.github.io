import { createPool } from 'mysql2/promise';
import express from 'express';
import bcrypt from 'bcrypt';
import fs, { access } from 'fs';
import path  from 'path';

const app = express();

app.use(express.static(path.resolve('./')));

app.use(express.urlencoded( { extended: true } ) );

app.use(express.json());


const todoPool = createPool({
  host: process.env.db_host,
  user: process.env.db_user,
  password: process.env.db_pass,
  database: process.env.db_name
});

// let results;
// (async function(){
//   results =  await todoPool.query(`SHOW TABLES`);
//   console.log( Array.isArray(results[0])) ;
//   results[0].forEach(val => {
//     console.log(Array.isArray(val))
//      console.log(val)
//   });
//   return results;
// })();


app.get('/searchList/:id',async   (req, res) => {
  todoPool.query(`SELECT * FROM ${req.params.id}`)
  .then(resp => {
    res.send({a:resp,b:req.params.id});
  }).catch(err => res.send(err));
});
app.post('/createList',  (req, res) => {
  const { name, password} = req.body;
  todoPool.query(
    `  CREATE TABLE ${name+password} (
        id int auto_increment not null,
        text varchar (200) not null,
        bul varchar  (100) not null,
        PRIMARY KEY  (id)
    )`).then(resp => res.send('OK!'))
       .catch(status => res.send(status , 'not found'));
});
app.delete('/deleteList/:id', (req, res) => {
  todoPool.query(`DROP TABLE ${req.params.id}`)
  .then (status => res.send(status, body))
  .catch(err => res.send(err));
});

app.post('/createItem',(req, res) => {
  const {name, text} = req.body;
   todoPool.query(`
   INSERT INTO ${name} (text, bul) 
   VALUES (?, ?) `, [ text, false])
   .then(resp => res.send({resp}))
   
 });
app.post('/deleteItem', (req, res) => {
  const {name, id} = req.body;
   todoPool.query(`DELETE FROM ${name} WHERE id=?`,[id])
   .then(resp => res.send({resp}))
});

app.put('/updateItemChecked/:id', (req, res) => {
  const {name,bul} = req.body;
  todoPool.query(`
   UPDATE ${name}
   SET bul = ?
   where id= ?`,[!bul,req.params.id])
   .then(status => res.send(status, body))
    .catch(err => res.send(err));
 });
 app.put('/updateItemText/:id', (req, res) => {
   todoPool.query(`
   UPDATE ${req.params.id}
   SET text="${req.body.text}"
   where id= ${req.body.id};
  `).then(status => res.send(status, body))
   .catch(err => res.send(err));
 
 });


app.delete('/deleteCheckedItems/:id', (req, res) => {
  console.log(req.params.id)
  todoPool.query(` DELETE FROM ${req.params.id} Where bul = ?`,[1])
  .then ( resp => res.send ('ok'));
});


app.get('/', (req, res) => {
  res.sendFile(path.resolve("index.html"));
});



app.get('/Stop_Watch_Bill_total', (req, res) => {
  res.sendFile(path.resolve("Stop_Watch_Bill_total.html"));
});



app.get('/weather', (req, res) => {
  res.sendFile(path.resolve('weather.html'));
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
app.get('/game_3', (req, res) => {
  res.sendFile(path.resolve("game_3.html"));
});
app.get('/game_4', (req, res) => {
  res.sendFile(path.resolve("game_4.html"));
});



app.post('/send_state', (req, res) => {
  fs.promises
  .writeFile(path.resolve("weather.json"),JSON.stringify(req.body,undefined,2))
  .then((json) => res.send(json));
});
app.get('/get_state', (req, res) => {
  fs.promises.readFile(path.resolve('weather.json'), 'utf-8')
  .then(json => {
    res.send(json);
  });
});


//require dotenv/config 
// npm install dotenv --save-dev
//app.use((req, res, next) => next () );


// app.delete('/deleteList/:id', (req, res) => {
//   todoPool.query(` DROP TABLE ${req.params.id}`)
//   .then ( resp => res.send (
//                               {
//                                 resp,
//                                 ...req.params
//                               }
//                            )).catch(err => console.log(err));
  
// });


app.get('/todo', (req, res) => {
  fs.promises.readFile(path.resolve('todo.json'), 'utf-8')
  .then(json => {
    res.send(json);
  });
});
app.post('/todo', (req, res) => {
  fs.promises
  .writeFile(path.resolve("todo.json"),JSON.stringify(req.body,undefined,2))
  .then(json => {
    console.log(todo);
  })
  .catch(()=>{
    res.send('error');
  })
});

app.listen(process.env.PORT);