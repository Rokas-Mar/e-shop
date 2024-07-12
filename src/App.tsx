import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <MainPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Header />
              <Cart />
            </>
          }
        />
        <Route
          path="/products/:productId"
          element={
            <>
              <Header /> <ProductDetails />
            </>
          }
        />
        <Route
          path="/404-page-not-found"
          element={
            <>
              <Header />
              <div>
                <h1>Page not found</h1>
              </div>
            </>
          }
        />
        <Route
          path="/*"
          element={
            <>
              <Navigate to={"/404-page-not-found"} />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
