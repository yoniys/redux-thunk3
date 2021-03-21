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
app.post('/', (req, res) => {
  console.log(  req);
  console.log("yyy");
   const data=require('./data.json')
     for(let i of data){
         if(i.name==req.name){res.send(false)}
     }
     // data.push({name:"aaa"})
     console.log(data);
     fs.writeFileSync('./data.json', JSON.stringify(data, null, 4));
   res.send(data)
 })
app.get('/', (req, res) => {

  const data=require('./data.json')
  console.log(data);
  res.send(data)
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})




