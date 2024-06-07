import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Apropos.css';

const Apropos = () => {
    return (
        <div>
            <Header />
            <main className="apropos-page">
                <section className="apropos-section">
                    <h2>À propos de Wiki Space</h2>
                    <p>
                        Wiki Space est un espace de Coworking créé par des entrepreneurs pour des entrepreneurs. L'esprit de Wiki Space repose sur le vécu et la connaissance du terrain de ce qui est nécessaire pour créer une entreprise et la faire grandir.
                    </p>
                    <p>
                        Nos services comprennent :
                    </p>
                    <ul>
                        <li><strong>Coworking :</strong> Des espaces de travail partagés et privés adaptés à vos besoins, favorisant la collaboration et l'innovation.</li>
                        <li><strong>Événements :</strong> Organisation d'événements professionnels pour faciliter le réseautage et le développement des compétences.</li>
                        <li><strong>Formation :</strong> Des programmes de formation variés pour aider les entrepreneurs à acquérir de nouvelles compétences et à se perfectionner.</li>
                        <li><strong>Support aux startups :</strong> Assistance et mentorat pour les jeunes entreprises en phase de démarrage.</li>
                        <li><strong>Accès à des ressources :</strong> Mise à disposition d'outils et de ressources nécessaires pour la croissance de votre entreprise.</li>
                        <li><strong>Domiciliation :</strong> Service de domiciliation commerciale pour établir le siège social de votre entreprise.</li>
                    </ul>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Apropos;
