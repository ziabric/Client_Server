const express = require('express')
const bodyParser = require("body-parser")
const sqlite3 = require('sqlite3').verbose();
const server = express()

//открываем бд
const db = new sqlite3.Database('cs.sqlite3')



//используем парсер для json
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000

//прослушка порта 
server.listen(PORT, ()=>
{
  console.log('\n')
})




//обработка GET запросов 
server.get('/', (req,res)=>
{
  
})


//обработка POST запросов
server.post('/', (req,res)=>
{
  res.send("echo post")
})

//закрываем бд
db.close()