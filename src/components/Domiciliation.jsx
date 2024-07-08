import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Domiciliation.css';
import image from './44.jpg';
import img3 from "./contact.png";
const Domiciliation = () => {
    return (
        <div>
            <Header />
            <main className="domiciliation-page">
             
                    <div className="image-container">
                        <img src={image} alt="Domiciliation" className="domiciliation-image" />
                        <div className="image-text">
                            <h2>Domiciliation d'entreprise à Sousse</h2>
                        </div>
                    </div>
                    <p>Wiki Space offre un service de domiciliation pour les entreprises à Tunis. Que vous soyez une start-up en plein essor ou une entreprise établie, nous fournissons une adresse commerciale prestigieuse pour établir le siège social de votre entreprise.</p>
                    <div className="atouts">
                        <h3>Nos Atouts pour la Domiciliation</h3>
                        <ul>
                            <li>Prix compétitif sur le marché</li>
                            <li>Emplacement stratégique au cœur de Tunis</li>
                            <li>Service personnalisé selon vos besoins</li>
                            <li>Rapidité dans le traitement de vos demandes</li>
                        </ul>
                    </div>
                  
                    <div className="contact-section">
                        <div className="contact-form-section">
                            <h2>Contactez-Nous</h2>
                            <form>
                                <input type="text" name="name" placeholder="Nom" required />
                                <input type="email" name="email" placeholder="Email" required />
                                <input type="text" name="subject" placeholder="Sujet" required />
                                <input type="text" name="numero" placeholder="Numéro" required />
                                <textarea name="message" placeholder="Message" required></textarea>
                                <button type="submit">Envoyer</button>
                            </form>
                        </div>
                        <div className="contact-image-section">
                            <img src={img3} alt="Contact" />
                        </div>
                    </div>
                                 
            </main>
            <Footer />
        </div>
    );
}

export default Domiciliation;
