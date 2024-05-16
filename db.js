import mongoose from 'mongoose';
import { boolean } from 'zod';

//mongodb+srv://thisisvenkyynm:VhrWSFGmaaHtFnMJ@cluster011.woob7zs.mongodb.net/

mongoose.connect("mongodb+srv://thisisvenkyynm:VhrWSFGmaaHtFnMJ@cluster011.woob7zs.mongodb.net/")

const todoSchema=mongoose.Schema({
  title:String,
  description:String,
  status:Boolean
})

const todos=mongoose.model('todos',todoSchema);

module.exports={
  todos
}