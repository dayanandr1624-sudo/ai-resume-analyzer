const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/analyze", (req,res)=>{

 const {jobDescription} = req.body;

 const words = jobDescription.split(" ");

 const score = Math.floor(Math.random()*100);

 res.json({
   atsScore: score,
   suggestion: "Improve skills like React, Node, MongoDB"
 });
 

});

app.listen(5000,()=>{
 console.log("Server running on port 5000");
});