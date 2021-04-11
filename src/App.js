
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';
function App() {
  return (<>
  <Particles
  className="party"
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
   </>
  );
}

export default App;
