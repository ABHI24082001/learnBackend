const mongoose = require('mongoose');


const connectDB =  async () => {
    await mongoose.connect(
      "mongodb+srv://sonukr45564556_db_user:CMHwrjDBWpf3JcNE@learndb.trdbwmf.mongodb.net/?retryWrites=true&w=majority&appName=LearnDB"
    );
}


connectDB()
      .then(() => {
        console.log("Database connected successfully");
      })
      .catch((err) => {
        console.error("Database connection error:", err);
      });
