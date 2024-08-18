import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/cart" exact element={<Cart />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
