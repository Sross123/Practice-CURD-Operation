const express = require("express");
require("./db/conn")

const app = express();
const port = process.env.PORT || 3000

app.get("/", async(req, res)=>{
    res.send("Hello from the Ross");
})

app.listen(port, ()=>{
    console.info("Connection is live at port no. ", port)
})