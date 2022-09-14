import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// We use Route in order to define the different routes of our application
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { history } from "./_helpers/history";

// We import all the components we need in our app
import Home from "./components/home/Home";
import TopBar from "./components/navbar/Topbar";
import Product from "./components/product/ProductView";
//import NewListing from "./components/listing/NewListing";
//import MagageListing from "./components/listing/ManageListing";
import Footer from "./components/footer/Footer";
import Catalog from "./components/catalog/Catalog";
import Login from "./components/login/Login";

import Reviews from "./components/review/Reviews";
//import Questions from "./components/question/Question";

/*const PrivateRoute = ({ children, ...rest }) => {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={() => (auth ? children : <Redirect to="/login" />)}
    />
  );
};*/

import styled from "styled-components";
//import Reviews from "./components/review/Reviews";
//import Questions from "./components/question/Question";

const MainFont = styled.div`
  font-family: raleway, sans-serif;
`;

const App = () => {
  return (
    <MainFont>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/login" element={<Login />} />
        {/* <Route
          path="/product/:id/review"
          element={
            <PrivateRoute>
              <Reviews />
            </PrivateRoute>
          }
        />
        {/*<PrivateRoute path="/product/:id/review" element={<Reviews />} />
        <PrivateRoute
          path="/product/:id/question/:id"
          element={<Questions />}
        />
        <PrivateRoute path="/newListing" element={<NewListing />} />
        <PrivateRoute path="/manageListing" element={<MagageListing />} />*/}
      </Routes>
      <Footer />
    </MainFont>
  );
};

export default App;
