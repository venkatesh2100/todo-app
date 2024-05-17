
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://thisisvenkyynm:6jYlxHafJkMghE16@cluster011.woob7zs.mongodb.net/")

const todoSchema=mongoose.Schema({
  title:String,
  description:String,
  status:Boolean
})

const todos=mongoose.model('todos',todoSchema);

module.exports={
  todos
}

