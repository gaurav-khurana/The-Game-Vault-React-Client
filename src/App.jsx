import "./App.scss";
import "./styles/styles.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NavigationPage from "./pages/NavigationPage/NavigationPage";
import XboxProductPage from "./pages/XboxProductPage/XboxProductPage";
import PlaystationProductPage from "./pages/PlaystationProductPage/PlaystationProductPage";
import PlaystationProductDetailsPage from "./pages/PlaystationProductDetailsPage/PlaystationProductDetailsPage";
import XboxProductDetailsPage from "./pages/XboxProductDetailsPage/XboxProductDetailsPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import OrderConfirmedPage from "./pages/OrderConfirmedPage/OrderConfirmedPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<NavigationPage />} />
          <Route path="/games/xbox" element={<XboxProductPage />} />
          <Route path="/games/xbox/:id" element={<XboxProductDetailsPage />} />
          <Route path="/games/ps" element={<PlaystationProductPage />} />
          <Route
            path="/games/ps/:id"
            element={<PlaystationProductDetailsPage />}
          />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/orderconfirmation" element={<OrderConfirmedPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
