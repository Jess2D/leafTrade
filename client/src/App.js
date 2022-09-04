import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/product/ProductView";
import NewListing from "./components/listing/NewListing";
import MagageListing from "./components/listing/ManageListing";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/newListing" element={<NewListing />} />
        <Route path="/manageListing" element={<MagageListing />} />
      </Routes>
    </div>
  );
};

export default App;
