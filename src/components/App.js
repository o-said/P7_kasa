import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import NotFound from '../pages/notFound/NotFound';
import AppartmentDetail from '../pages/appartmentDetail/AppartmentDetail';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/app.css';

function App() {
  return (
    <Router>
      <div className='main'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/appartmentDetail/:id" element={<AppartmentDetail />} />
          <Route path="*" element={<NotFound />} /> {/* La route NotFound générique */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
