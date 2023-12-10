// import styled from "styled-components";
import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import Login from "./pages/Login";
import GlobalStyles from "./styles/GlobalStyles";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="app" />} />
          <Route path="app" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<WishList />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="*" element={<p>No page found</p>} />
      </Routes>
    </>
  );
}

export default App;
