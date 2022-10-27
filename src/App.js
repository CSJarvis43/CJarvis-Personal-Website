import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route 
          path="/"
          element={
            <Projects />
          }
        />
        <Route 
          path="/about"
          element={
            <About />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
