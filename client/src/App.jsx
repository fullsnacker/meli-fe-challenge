import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { Layout } from "./components/Layout/Layout";
import { EmptySearchPage } from "./components/EmptySearchPage/EmptySearchPage";
import { QueryResList } from "./components/QueryResList/QueryResList";
import { ProductDetail } from "./components/ProductDetail/ProductDetail";
import "./App.scss";

function App() {
  axios.defaults.baseURL =
    import.meta.env.VITE_BASE_URL || "http://localhost:3000";
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
