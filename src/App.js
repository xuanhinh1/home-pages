import About from "./pages/about";
import Gallery from "./pages/gallery";
import Home1 from "./pages/home1";
import Home2 from "./pages/home2";
import Service from "./pages/service";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="home2" element={<Home2 />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
