import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/home/Home";
import TopBar from "./components/navbar/Topbar";
import Product from "./components/product/ProductView";
import NewListing from "./components/listing/NewListing";
import Footer from "./components/footer/Footer";
import Catalog from "./components/catalog/Catalog";
import Login from "./components/login/Login";
import Reviews from "./components/review/Reviews";
import NewReview from "./components/review/NewReview";
import Questions from "./components/question/Questions";
import ManageListing from "./components/listing/ManageListing";
import MagageAll from "./components/listing/ManageAll";
import Edit from "./components/listing/Edit";
import { Logout } from "./components/login/Logout";
import FooterProductPage from "./components/productNavigation/ProductFooter";

const useAuth = () => {
  const user = sessionStorage.getItem("user");
  return user ? true : false;
};

function PrivateRoute({ children }) {
  const auth = useAuth();
  return auth ? children : <Navigate to="/login" />;
}

const MainFont = styled.div`
  font-family: raleway, sans-serif;
`;

const App = () => {
  return (
    <MainFont>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="qa" element={<Questions />} />
        </Route>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/user/:listing" element={<ManageListing />} />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/edit/:id"
          element={
            <PrivateRoute>
              <Edit />
            </PrivateRoute>
          }
        />
        <Route
          path="/managelisting"
          element={
            <PrivateRoute>
              <MagageAll />
            </PrivateRoute>
          }
        />
        <Route
          path="/newListing"
          element={
            <PrivateRoute>
              <NewListing />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </MainFont>
  );
};

export default App;
