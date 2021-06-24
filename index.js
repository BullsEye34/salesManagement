const app = require('express')();

app.get("/",(req,res)=>{
    res.send("It works")
})

app.listen(3000, ()=>{
    console.log('Listening on http://127.0.0.1:3000');
})