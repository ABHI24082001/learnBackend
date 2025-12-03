const express = require('express');

const app = express();

app.get("/user" , (req , res) => {
    res.send({firstName : "Abhi" , lastName : "Kumar"}); 
});

app.post("/user" , (req , res) => {
    res.send("Post Request Called");
});

app.delete("/user" , (req , res) => {
    res.send("Delete Request Called");
});

app.put("/user" , (req , res) => {
    res.send("Put Request Called");
});

app.patch("/user" , (req , res) => {
    res.send("Patch Request Called");
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});