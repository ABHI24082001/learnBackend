const express = require('express');

const app = express();

const {adminAuth , userAuth} = require("./middleware/auth")

app.use("/admin", adminAuth);


app.get("/user", userAuth, (req , res) => {
  res.send("Welcome to the Home Page");
}); 

app.get("/admin/getAllData",(req , res) => {
  res.send("Admin Data Retrieved");
})


app.get("/admin/deleteData", (req , res) => {
  res.send("Admin Data Deleted");
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});