import './app.scss'
import Hero from './Components/hero/Hero';
import Navbar from './Components/navbar/Navbar';
import Parallax from './Components/parallax/Parallax';
import Portfolio from './Components/portfolio/Portfolio';
import Services from './Components/services/Services';
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
      <section>
        <Services/>
      </section>
      <section id='Portfolio'>
        <Parallax type="portfolio" />
      </section>
      <Portfolio/>
      <section id='Contact'>Contact</section>
      {/* <Test/> */}
    </div>
  );
};

export default App;
