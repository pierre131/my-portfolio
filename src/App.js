import './App.css';
import Navbar from './components/Navbar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;