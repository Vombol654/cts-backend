const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./Routes/index");
const port = 8085;
const hostname = "localhost";
const dburl = `mongodb+srv://Vombol654:Vombol_654@cluster0.gemvk.mongodb.net/Mentor?retryWrites=true&w=majority`;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(
  cookieSession({
    name: "session",
    keys: ["ananda"],
    maxAge: 24 * 60 * 60 * 100,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/", routes);

mongoose
  .connect(dburl)
  .then((res) => {
    app.listen(port, hostname, () => {
      console.log(`server is running on ${hostname}:${port}`);
    });
  })
  .catch((err) => console.log(err));
