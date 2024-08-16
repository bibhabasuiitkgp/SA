import React from 'react';
// import NavigationBar from './components/Navbar';
import Carousel from './components/Carousal';
import AboutSection from './components/About';
import FactSection from './components/Fact';
import ClientsSection from './components/Swipe';
import FormExample from './components/Form';

// import NavigationBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Carousel />
      <AboutSection />
      <FactSection />
      <ClientsSection />
      <FormExample />
    </div>
  );
}

export default App;
