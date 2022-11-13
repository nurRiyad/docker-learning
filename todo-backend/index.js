import express from "express";


const app = express();


app.use(express.json());



app.get("/",(req,res)=>{
  
  const tasks = [
    {
      task: "Wake Up"
    },
    {
      task: "Morning breakfast"
    },
    {
      task: "Go to office"
    },
    {
      task: "Sleep before 10PM"
    },
    {
      "task": "Dream Big"
    }
  ]
  
  res.send(tasks);
})


app.listen(4000,()=>{
  console.log("listening at port 4000");
})