const express = require("express");
const path = require("path");
const usersRouter = require("./routes/users.js");
const cardsRouter = require("./routes/cards.js");

const app = express();
const { PORT = 3000 } = process.env;

app.listen(PORT);
app.use(express.static(path.join(__dirname, "public")));
app.use("/cards", cardsRouter);
app.use("/users", usersRouter);

app.get("*", (req, res) => {
  res.status(404).send({ message: "Requested resource not found" });
});

