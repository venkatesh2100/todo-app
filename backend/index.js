const express = require('express'); 
const { createTodo, updateTodo } = require("./types");
const { todos } = require("./db");
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world"); 
});

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) { 
    res.status(400).json({
      msg: "You entered wrong input. Please check back.",
      errors: parsedPayload.error,
    });
    return;
  }

  try {
    // Create new todo in MongoDB
    const newTodo = await todos.create({
      title: createPayload.title,
      description: createPayload.description,
      status: false,
    });

    res.status(201).json({
      msg: "Todo is created",
      todo: newTodo,
    });
  } catch (error) {
    console.error("Error creating todo:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
});

app.get("/todos", async (req, res) => {
  const todoList = await todos.find({}); 

  res.json({
    todos: todoList, 
  });
});
app.put("/status", async (req, res) => {
  const updatePayload = req.body;

  try {
    // Update the status of the todo in MongoDB
    const updatedTodo = await todos.findOneAndUpdate(
      { _id: updatePayload._id },
      { $set: { status: true } },
      { new: true } // Return the updated todo
    );
    
    if (!updatedTodo) {
      // If todo is not found, return a 404 error
      return res.status(404).json({ msg: "Todo not found" });
    }

    res.json({
      msg: "Todo is completed",
      todo: updatedTodo // Send back the updated todo
    });
  } catch (error) {
    console.error("Error updating todo status:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
});

app.delete("/todo/:id", async (req, res) => {
  const todoId = req.params.id;
  try {
    const deletedTodo = await todos.findByIdAndDelete(todoId);
    if (!deletedTodo) {
      return res.status(404).json({ msg: "Todo not found" });
    }
    res.json({ msg: "Todo deleted", deletedTodo });
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
