import {About, Footer, Header, Skills, Testimonial, Work} from './container'
import Navbar from './components/Navbar';
import './App.scss';


function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <Footer/>
      {/* <About/> */}
      {/* <Work/> */}
      <Skills/>
      <Testimonial/>
    </div>
  );
}

export default App;
