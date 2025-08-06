import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import CocktailDetail from './components/CocktailDetail';

function App() {
  return (
   <Router>
   <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}/>
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<CocktailDetail />} />
      <Route path="/contact-us" element={<ContactUs />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
   </Router>
  );
}

export default App;
