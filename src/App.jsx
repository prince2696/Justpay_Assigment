import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoverPage from "./pages/CoverPage";
import HomePage from "./pages/HomePage";
import OrderList from "./pages/OrderList";
import Dashboard from "./components/Dashboard";
import EcommercePage from "./pages/EcommercePage";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* First screen → Cover Page, no sidebar/navbar */}
        <Route path="/" element={<CoverPage />} />

        {/* Main app routes wrapped in Layout */}
        <Route element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ecommerce" element={<EcommercePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
