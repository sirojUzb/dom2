import Navbar from "./navbar";
import Services from "./pages/services";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import PhoneNumber from "./pages/contact/phone-number";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />}>
          <Route path="phone-number" element={<PhoneNumber />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
/*
-Set up
-Route splitting
-Active Route
-Nested Routes
-using Outlets
-Using Links and NavLinks
-Using useParams
 */
// watch 2nd video
// useParams
