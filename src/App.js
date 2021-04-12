
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact'; 
import Footer from './components/Footer';
function App() {
  return (<>
  <Particles
  className="particles-canvas"
    params={{
      polygon: {
          enable: true,
          number:{
            value:30,density:{
              enable:true,
              value:1500
            }
          }

      }}} />

   <Navbar/>
   <Header/>
   <About/>
   <Services/>
   <Contact/>
   <Footer/>
   </>
  );
}

export default App;
