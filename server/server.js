const express = require('express')
const bodyParser = require("body-parser")
const server = express()



//используем парсер для json
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000

const fs = require('fs');
const { title } = require('process');


//прослушка порта 
server.listen(PORT, ()=>
{
  console.log('Start!!!')
})


//обработка GET запросов 
server.get('/', (req,res)=>
{
  fs.readFile('db.json', 'utf8', function (err, data) 
  {
    const obj = JSON.parse(data);

    const id = Math.trunc(Math.random()*(obj.count))

    const text = obj.text[id]

    res.send({"text": text, "id": id});

    //res.send(String(req.method))

  });
})


//обработка POST запросов
server.post('/', (req,res)=>
{

  fs.readFile('db.json', 'utf8', function (err, data) 
  {
    const obj = JSON.parse(data);


    
    if (String(req.body.answer) == obj.answer[Number(req.body.id)]) 
    {
      res.send("True" + req.body.answer + obj.answer[Number(req.body.id)])
    }
    else 
    {
      res.send("False --" + String(req.body.answer) + "--" +String(obj.answer[req.body.id]))
    }
    
  });
  
})
