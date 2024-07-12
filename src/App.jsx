import './app.scss'
import Hero from './Components/hero/Hero';
import Navbar from './Components/navbar/Navbar';
import Parallax from './Components/parallax/Parallax';
import Test from './Test';

const App = () => {
  return (
    <div>
      <section id='Home'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'>
        <Parallax type="services"/>
      </section>
      <section>Services</section>
      <section id='Portfolio'>
        <Parallax type="portfolio" />
      </section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id='Contact'>Contact</section>
      {/* <Test/> */}
    </div>
  );
};

export default App;
