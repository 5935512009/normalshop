const express = require("express");
const app = express();

app.get('/test', async(req,res)=>{
    res.json("hello world");
})

const PORT = 4001;
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});