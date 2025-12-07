const adminAuth = (req , res , next) => {
    console.log("Admin Middleware Executed");
    const token = req.headers.authorization || "xyz";
    const isAdmin = token === "xyz";
    if (!isAdmin) {
      return res.status(401).send("Not Authorized");
    } else {
      next();
    }
}

const userAuth = (req, res, next) => {
  console.log("Admin Middleware Executed");
  const token = req.headers.authorization || "xyz";
  const isAdmin = token === "xyz";
  if (!isAdmin) {
    return res.status(401).send("Not Authorized");
  } else {
    next();
  }
};




module.exports = {adminAuth, userAuth};