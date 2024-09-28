const express = require("express")
const path = require("path")
const app = express()
const PORT = 8000


const Static = path.join(__dirname,"./")

app.use(express.static(Static))

// app.get("",(req,res)=>{
//     res.send(`Hello`)
// })

app.listen(PORT,()=> console.log("Server Started on " + PORT))