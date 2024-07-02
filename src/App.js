import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Acceuil from './components/Acceuil';
import ContactFormPage from './components/Contact';
import Apropos from './components/Apropos';
import Domiciliation from './components/Domiciliation';
import Coworking from './components/Coworking';
import Formation from './components/Formations';
import FormationDetails from './components/FormationDetails';
import EvenementGallery from './components/event';
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Acceuil />} />
                <Route path="https://wikispace.onrender.com/contact" element={<ContactFormPage />} />
                <Route path="https://wikispace.onrender.com/apropos" element={<Apropos />} />
                <Route path="https://wikispace.onrender.com/domiciliation" element={<Domiciliation />} />
                <Route path="https://wikispace.onrender.com/coworking" element={<Coworking />} />
                <Route path="https://wikispace.onrender.com/formations" element={<Formation />} />
                <Route path="https://wikispace.onrender.com/FormationDetails" element={<FormationDetails />} />
                <Route path="https://wikispace.onrender.com/evenements" element={<EvenementGallery />} />
            </Routes>
        </Router>
    );
}

export default App;
