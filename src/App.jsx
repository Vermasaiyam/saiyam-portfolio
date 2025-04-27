import './app.scss'
import Contact from './Components/contact/Contact';
import Cursor from './Components/cursor/Cursor';
import Hero from './Components/hero/Hero';
import Navbar from './Components/navbar/Navbar';
import Parallax from './Components/parallax/Parallax';
import Portfolio from './Components/portfolio/Portfolio';
import AboutMe from './Components/aboutMe/AboutMe';

const App = () => {
  return (
    <div>
      <Cursor />
      <section id='Home'>
        <Navbar />
        <Hero />
      </section>

      <section id='About'>
        <Parallax type="about" />
      </section>
      <section>
        <AboutMe />
      </section>
      <section id='Projects'>
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id='Contact'>
        <Contact />
      </section>
    </div>
  );
};

export default App;
