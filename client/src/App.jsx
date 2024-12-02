import "./App.css";
import HomePage from "./pages/HomePage";
import Page from "./components/page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
    <section>Navbar</section>
    <section>Home</section>
    <section>Skills</section>
    <section>Projects</section>
    <section>Contacts</section>
    </div>
      // <BrowserRouter>
      //   <Routes>
      //     <Route path="/" element={<Page />} />
      //     <Route path="/home" element={<HomePage />} />
      //   </Routes>
      // </BrowserRouter>
  );
}

export default App;
