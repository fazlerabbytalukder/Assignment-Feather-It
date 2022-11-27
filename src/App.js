import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Workshop from "./pages/Workshop/Workshop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/workshop' element={<Workshop></Workshop>} />
        <Route path='/contact' element={<Contact></Contact>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
