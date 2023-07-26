const express = require("express")
const bodyParser = require("body-parser")
const app = express() // app is an instance of express
// get is a method of express(accessed via app)
app.get('/ababa',(req,res)=>{
    res.send('Something else')
}
)
app.get('/JRVP',(req,res)=>{
    res.send('Vishnu')
}
)
// comment
app.listen(3000,()=>{
    console.log("Server started again")
})