import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import BuyList from "./components/BuyList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list/:id" element={<BuyList />} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
