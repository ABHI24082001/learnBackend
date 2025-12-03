const express = require('express');

const app = express();


app.use("/test",(req , res) => {
    res.send('Hello from test route');
    
})

app.use( "/Abhi" , (req, res) => {
  res.send('Hello from Abhi route');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});