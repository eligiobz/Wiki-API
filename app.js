/// Imports
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require("lodash");
const dotenv = require("dotenv");
// const { response } = require("express");

/// Load config
dotenv.config();

//Set Up
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

const articleSchema = {
  title: String,
  content: String,
};

/// Database
const user = process.env.MONGO_USR;
const passwd = process.env.MONGO_PWD;
const db = process.env.MONGO_DB;
mongoose.connect(
  "mongodb+srv://" +
    user +
    ":" +
    passwd +
    "@" +
    db +
    "?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const Article = mongoose.model("Article", articleSchema);

app.get("/", (req, res) => {
  res.send("<h1>Install gentoo</h1>");
});

app
  .route("/articles")
  .get((req, res) => {
    Article.find({}, (err, result) => {
      if (!err) {
        console.log(result);
        res.send(result);
      } else {
        console.log(err);
      }
    });
  })
  .post((req, res) => {
    const art = new Article({
      title: req.body.title,
      content: req.body.content,
    });
    art.save((err) => {
      if (!err) {
        res.send("{ 'response' : 'ok'}");
      }
    });
  })
  .delete((req, res) => {
    Article.deleteMany({}, (err) => {
      if (!err) res.send("{ 'response' : 'ok'}");
      else res.send("{ 'response' : 'the violence has escalated'}");
    });
  });

app
  .route("/articles/:articleTitle")
  .get((req, res) => {
    Article.findOne({ title: req.params.articleTitle }, (err, result) => {
      console.log(result);
      if (!err)
        if (result) res.send(result);
        else res.send("No such article");
      else res.send(err);
    });
  })
  .put((req, res) => {
    Article.updateOne(
      { title: req.params.articleTitle },
      { title: req.body.title, content: req.body.content },
      { overwrite: true },
      (err, result) => {
        if (!err)
          if (result) res.send(result);
          else res.send("No such article");
        else res.send(err);
      }
    );
  })
  .patch((req, res) => {
    Article.updateOne(
      { title: req.params.articleTitle },
      { $set: req.body },
      (err, result) => {
        if (!err)
          if (result) res.send(result);
          else res.send("No such article");
        else res.send(err);
      }
    );
  })
  .delete((req, res) => {
    Article.deleteOne({ title: req.params.articleTitle }, (err) => {
      if (!err) res.send("{'response':'ok'}");
      else res.send(err);
    });
  });

app.listen(3000, () => {
  console.log("server listening http://0.0.0.0:3000");
});
