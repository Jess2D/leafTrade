const express = require("express");

// productRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /product.
const productRoutes = express.Router();
const userRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the users.
userRoutes.route("/user").get(function (req, res) {
  let db_connect = dbo.getDb("leafTrade");
  db_connect
    .collection("users")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single user by id
productRoutes.route("/user/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("users").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help you create a new user.
productRoutes.route("/user/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.name,
    photo: req.body.img,
  };
  db_connect.collection("users").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you get a list of all the products.
productRoutes.route("/product").get(function (req, res) {
  let db_connect = dbo.getDb("leafTrade");
  db_connect
    .collection("products")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single product by id
productRoutes.route("/product/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("products").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help you create a new product.
productRoutes.route("/product/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    userID: { user_id: ObjectId(req.params.userID), ref: "user" },
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
    category: req.body.category,
    img: req.body.img,
    price: req.body.price,
    questions: [
      {
        title: req.body.title,
        quserID: { quser_id: ObjectId(req.params.quserID), ref: "user" },
        answers: [
          {
            answer: req.body.answer,
          },
        ],
      },
    ],
    reviews: [
      {
        rate: req.body.rate,
        ruserID: { ruser_id: ObjectId(req.params.ruserID), ref: "user" },
        review: req.body.review,
      },
    ],
  };
  db_connect.collection("products").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a product by id.
productRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      name: req.body.name,
      description: req.body.description,
      img: req.body.img,
      price: req.body.price,
    },
  };
  db_connect
    .collection("products")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("product updated");
      response.json(res);
    });
});

// This section will help you delete a product
productRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("products").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("product deleted");
    response.json(obj);
  });
});

module.exports = productRoutes;
