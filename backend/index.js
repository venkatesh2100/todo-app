const express = require('express'); // Corrected import statement
const { createTodo, updateTodo } = require("./types");
const { todos } = require("./db");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello world"); // Changed app.send to res.send
});

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) { // Corrected typo: parsedPayload.sucess to parsedPayload.success
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
  const todo = await todos.find({});

  res.json({
    todo,
  });
});

app.put("/status", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "you entered wrong inputs please check and come back soon",
    });
    return;
  }
  await todos.update(
    {
      _id: req.body._id,
    },
    {
      status: true,
    }
  );
  res.json({
    msg: "Todo is completed",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
