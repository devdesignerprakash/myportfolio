import "./App.css";
import HomePage from "./pages/HomePage";
import Page from "./components/page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
