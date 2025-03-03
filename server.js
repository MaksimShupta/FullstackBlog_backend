import express from "express"; // import express

const app = express(); // create an express app
const PORT = process.env.PORT || 5000; // port setup

app.get("/", (req, res) => {
  res.send("hello world from nodejs!!!!!");
});  //msg from nodejs

app.listen(PORT, () =>
  console.log(`server running on port ${PORT} http://localhost:${PORT}/`)
); // server port 5000
