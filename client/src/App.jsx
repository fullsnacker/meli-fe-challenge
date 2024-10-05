import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import EmptySearchPage from "./components/EmptySearchPage/EmptySearchPage";
import QueryResList from "./components/QueryResList/QueryResList";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import "./App.scss";
import axios from "axios";

function App() {
  axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<EmptySearchPage />} />
          <Route path="/items" element={<QueryResList />} />
          <Route path="/items/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
