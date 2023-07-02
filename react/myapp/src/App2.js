import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/products";

const App = function () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Product/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;