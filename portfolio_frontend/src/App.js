import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { About, Footer, Header, Skills, Testimonials, Work } from './containers';

const App = () => {
    return (
      <div className="app">
        <Header />
        <About />
        <Work />
        <Skills/>
        <Testimonials />
        <Footer />
        <Navbar />
      </div>
    );
}

export default App;