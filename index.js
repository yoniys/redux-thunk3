const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
const  fs = require('fs');




app.use( (req, res ,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(req.method === "OPTIONS"){
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

app.get('/', (req, res) => {

  const data=require('./data.json')
  console.log(data);
  res.send(data)
})

app.post('/addUser', (req, res) => {
  let num=0
  const data=require('./data.json')
  
     for(let i of data){
     
       
         if(i.name==req.body.name){
           console.log("falsefalsefalsefalsefalsefalsefalse");
           continue
     }
     num++
     if(num==data.length){data.push(req.body)}
    }
     console.log("num",num);
     console.log(data);
     fs.writeFileSync('./data.json', JSON.stringify(data, null, 4));
   res.send(data)
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})