import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home, About, Projects, Contact } from "./views";

const App = () => {
  const location = useLocation();

  return (
    <div className="app">
      <NavBar />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default App;
