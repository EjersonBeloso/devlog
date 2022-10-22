const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");
const resetPasswordRoute = require("./routes/resetPassword");
const app = express();

require("dotenv").config();
app.use(express.json());
app.use(
  cookieSession({
    name: "session",
    keys: ["devlog"],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

//routes

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/blogs", blogRoute);
app.use("/api/reset-password", resetPasswordRoute);

app.listen("3001", () => {
  console.log("Server is running on port 3001 ;)");
});

const url =
  "mongodb+srv://beloso:00000@cluster0.balhhxn.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => {
    console.log("Database is connected =)");
  })
  .catch((error) => {
    console.log(error);
  });
