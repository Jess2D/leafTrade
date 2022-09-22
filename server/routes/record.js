const express = require("express");

// apiRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /product.
const apiRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the users.

apiRoutes.route("/user").get(function (req, res) {
  let db_connect = dbo.getDb("LeafTrade");
  db_connect
    .collection("users")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single user by id
apiRoutes.route("/user/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("users").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help you create a new user.
apiRoutes.route("/user/add").post(function (req, response) {
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
apiRoutes.route("/product").get(function (req, res) {
  let db_connect = dbo.getDb("LeafTrade");
  db_connect
    .collection("products")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single product by id
apiRoutes.route("/product/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("products").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help you create a new product.
apiRoutes.route("/product/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    userID: req.body.userID,
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
    category: req.body.category,
    img: req.body.img,
    price: req.body.price,
    questions: [
      {
        title: req.body.title,
        quserID: req.body.userID,
        answer: req.body.answer,
      },
    ],
    reviews: [
      {
        rate: req.body.rate,
        ruserID: req.body.userID,
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
apiRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      name: req.body.name,
      description: req.body.description,
      img: req.body.img,
      price: req.body.price,
      category: req.body.category,
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
apiRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("products").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("product deleted");
    response.json(obj);
  });
});

module.exports = apiRoutes;
