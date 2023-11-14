import React from 'react';

import Certification from '../component/landingpage/Certification';
import Newnavbar from '../component/landingpage/Newnavbar';
import Newhero from '../component/landingpage/Newhero';
import Newaboutme from '../component/landingpage/Newaboutme';
import Skills from '../component/landingpage/Skills';
import AcademicHistory from '../component/landingpage/AcademicHistory';
import Portfolio from '../component/landingpage/Portfolio';
import ContactMe from '../component/landingpage/ContactMe';
import Design from '../component/Design';



const Home = () => {
    return (
      <div>
        <Design />
            <div> 
              <Newnavbar />
              
              
              <Newhero />
              <Newaboutme />
              <Skills />
              <AcademicHistory />
              <Portfolio />
              <Certification />
              <ContactMe />
            </div>
      </div>
            
    );
  }
  
  export default Home;








  