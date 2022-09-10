import Menu from "./components/Menu";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import "./styles/app.css";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="appContainer">
      <Home />
      <About />
      <Projects />
      <Contact />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
