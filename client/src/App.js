import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Home from "./components/home/Home";
import TopBar from "./components/navbar/Topbar";
import Product from "./components/product/ProductView";
import NewListing from "./components/listing/NewListing";
import MagageListing from "./components/listing/ManageListing";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/newListing" element={<NewListing />} />
        <Route path="/manageListing" element={<MagageListing />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
