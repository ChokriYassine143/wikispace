import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Acceuil from './components/Acceuil';
import ContactFormPage from './components/Contact';
import Apropos from './components/Apropos';
import Domiciliation from './components/Domiciliation'; // Import Domiciliation component
import Coworking from './components/Coworking';
import Formation from './components/Formations';
import FormationDetails from './components/FormationDetails';
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Acceuil />} />
                <Route path="/contact" element={<ContactFormPage />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route path="/domiciliation" element={<Domiciliation />} /> 
                <Route path="/coworking" element={<Coworking />} />
                <Route path="/formations" element={<Formation />} /> 
                <Route path="/FormationDetails" element={<FormationDetails />} /> 
                 {/* Add Route for Domiciliation component */}
            </Routes>
        </Router>
    );
}

export default App;
