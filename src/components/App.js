import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';//importation des composants de react-router-dom pour la gestion des routes
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import NotFound from '../pages/notFound/NotFound';
import AppartmentDetail from '../pages/appartmentDetail/AppartmentDetail';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/app.css';

//retourne le composant App qui contient le composant Header et Footeret les routes de l'applicationqui sont Home, About, AppartmentDetail et NotFound contenant les composants correspondants à chaque route et les chemins de ces routes sont définis dans le composant Routes
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
