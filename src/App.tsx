import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AuthNavbar from "./components/AuthNavbar";
import ProductDetailPage from "./pages/ProductDetailPage";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route element={<AuthNavbar />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route path="/products/:productId" element={<ProductDetailPage />} />
    </Routes>
  );
};

export default App;
