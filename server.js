// const fs = require("fs");
// const path = require("path");
// const http = require("http");

// let dt = fs.readFile('./data.json',"utf-8")

// ================= Read Directory ==================
// fs.readdir("./", (err, res) => {
//   if (!err) {
//     console.log(res);
//   } else {
//     console.log(err);
//   }
// });
// ================= Read File ==================
// fs.readFile("./abc.txt", "utf8", (err, res) => {
//   if (!err) {
//     console.log(res);
//   } else {
//     console.log(err);
//   }
// });

// ================= Write File ==================
// fs.writeFile("./abc.txt", "XYZ", (err, res) => {
//   if (!err) {
//     console.log(res);
//   } else {
//     console.log(err);
//   }
// });

// ================= Append File ==================
// fs.appendFile("./abc.txt", "XYZ", (err, res) => {
//   if (!err) {
//     console.log(res);
//   } else {
//     console.log(err);
//   }
// });

// console.log(__filename);
// console.log(__dirname);
// console.log(path.parse(__filename));

// var server = http.createServer((req, res) => {
//   if (req.url == "/users") {
//     res.write("Users Path");
//     res.end();
//   }
// });
// server.listen(3000);

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute.js");
const cors = require("cors");

mongoose.connect(
  "mongodb+srv://HafizHuzaifa:4892432Huzu@cluster0.zz6yexr.mongodb.net/?retryWrites=true&w=majority",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Mongo DB Connected Successfully");
    }
  }
);

app.use(express.json());
app.use(cors());

app.use("/users", userRoute);

// app.get("/users", (req, res) => {
//   res.send(users).status(200);
// });

// app.get("/users/:id", (req, res) => {
//   let obj = users.find((x) => x.id == req.params.id);
//   if (!obj) {
//     res.send("No Data Found").status(404);
//   } else {
//     res.send(obj).status(200);
//   }
// });

// app.post("/users", (req, res) => {
//   let { name, email } = req.body;

//   if (!name) {
//     res.send("Required: Name").status(400);
//     return;
//   }

//   if (!email) {
//     res.send("Required: Email").status(400);
//     return;
//   }

//   let obj = {
//     name,
//     email,
//     dateTime: new Date(),
//     id: users.length + 1,
//   };
//   users.push(obj);
//   res.send(obj).status(200);
// });

// app.put("/users/:id", (req, res) => {
//   let obj = users.find((x) => x.id == req.params.id);
//   if (!obj) {
//     res.send("Data Not Found").status(400);
//     return;
//   }
//   if (obj) {
//     let i = users.findIndex((x) => x.id == req.params.id);
//     users[i] = { ...users[i], ...req.body };
//     res.send(users[i]).status(200);
//     return;
//   }
// });

// app.delete("/users/:id", (req, res) => {
//   let i = users.findIndex((x) => x.id == req.params.id);
//   if (i != -1) {
//     users.splice(i, 1);
//     res.send("successfully Deleted").status(200);
//   }
// });

app.listen(5000);
