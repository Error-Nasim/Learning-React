import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './Components/Header';
import Introduction from './Components/Introduction';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <Skills />
      <Projects />
      <Footer />
      
    </>
  );
}

export default App;
