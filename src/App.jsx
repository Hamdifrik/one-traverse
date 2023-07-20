import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  MISSION,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';
import TESTIMONIALS from './components/TESTIMONIALS';
import CAREERS from './components/CAREERS';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
          <Projects />
        </div>
        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <Contact />
        </div>

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
            <Experience />
          </div>
        </div>

         
        
        
        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <MISSION />
        </div>
       
       
        <div className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
        <TESTIMONIALS/>
        </div>
        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
        <CAREERS/>
        </div>
        
        
      </div>
    </BrowserRouter>
  );
};

export default App;
