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
        </Routes>
      </BrowserRouter>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <img className="LeftKey" src={LeftKeyGreen} alt="Left Key" />
        <img className="LeftKey" src={LeftKeyBlue} alt="Left Key" />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="container py-4 px-3 mx-auto">
        <h1>Hello, Bootstrap and Vite!</h1>
        <button className="btn btn-primary">Primary button</button>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <Card />
      <Form /> */}
    </>
  );
}

export default App;
