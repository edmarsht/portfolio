import "./App.css";
import { Navbar } from "./components";
import {
  Hero,
  Credentials,
  Aboutme,
  Expertise,
  Experience,
  Ventures,
  Resume,
  Contact,
  Footer,
} from "./containers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Credentials />
      <Aboutme />
      <Expertise />
      <Experience />
      <Ventures />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
