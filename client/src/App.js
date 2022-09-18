import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/home/Home";
import TopBar from "./components/navbar/Topbar";
import Product from "./components/product/ProductView";
import NewListing from "./components/listing/NewListing";
//import MagageListing from "./components/listing/ManageListing";
import Footer from "./components/footer/Footer";
import Catalog from "./components/catalog/Catalog";
import Login from "./components/login/Login";
import Reviews from "./components/review/Reviews";
import Questions from "./components/question/Questions";
import FooterProductPage from "./components/productNavigation/ProductFooter";
//import FooterProductPage from "./components/productNavigation/FooterProductPage";

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
        <Route path="/product/:id" element={<Product />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/prodNav/:id" element={<FooterProductPage />} />
        <Route path="/reviews/:id" element={<Reviews />} />
        <Route path="/questions/:id" element={<Questions />} />
        <Route path="/newListing" element={<NewListing />} />
        <Route
          path="/private"
          element={
            <PrivateRoute>
              <Catalog />
            </PrivateRoute>
          }
        />
        {/*<PrivateRoute path="/product/:id/review" element={<Reviews />} />
        <PrivateRoute
          path="/product/:id/question/:id"
          element={<Questions />}
        />
        <PrivateRoute path="/newListing" element={<NewListing />} />*/}
      </Routes>
      <Footer />
    </MainFont>
  );
};

export default App;
