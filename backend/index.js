import express from 'express'
const {createTodo} =require("./types")
const app=express()

app.get('/',(req,res)=>{
  app.send("hello world")
})

app.post('/todo',(req,res)=>{
  const createPayload=req.body;
  const parsedPayload=createTodo.safeParse(createPayload);
  if(!parsedPayload.sucess){
    res.status(411).json({
      msg:"you entered wrong input please check back ";
    })
    return;
  }
})

app.get('/todos',(req,res)=>{

})

app.put('/status',(req,res)=>{
const updatePayload=req.body;
const parsedPayload=updateTodo.safeParse(updatePayload);
if(!parsedPayload.sucess){
  res.status(411).json({
    msg:"you entered wrong inputs please check and come back soon"
  })
  return;
}
})