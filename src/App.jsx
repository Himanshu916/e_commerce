// import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import Login from "./pages/Login";
import GlobalStyles from "./styles/GlobalStyles";
import Product from "./pages/Product";
import ProtectedRoute from "./ui/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import DarkModeProvider from "./contexts/DarkModeContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
      <DarkModeProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:productId" element={<Product />} />
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />{" "}
                </ProtectedRoute>
              }
            >
              <Route path="cart" element={<Cart />} />
              <Route path="wishlist" element={<WishList />} />
              <Route path="account" element={<Account />} />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Signup />} />
            <Route path="*" element={<p>No page found</p>} />
          </Routes>
        </QueryClientProvider>
      </DarkModeProvider>
    </>
  );
}

export default App;
