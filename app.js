const express =require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const port = 3000



app.listen(port,()=>{
    console.log(`http://localhost:3000/`)
})
mongoose.connect("mongodb+srv://mahmoud:bqPQtQFbD3lw9efx@cluster0.evvlfpw.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    app.get('/',(req,res)=>{
    // res.send('HELLO WORLD!')
    res.sendFile("./views/home.html")
})
    
}).catch((error)=>{console.log(error)})
// 