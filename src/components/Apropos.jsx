import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import './Apropos.css';
import img3 from "./contact.png";
import AproposImage from './previousformations/4.jpeg';  // Add the appropriate image path
import img1 from './p2.jpg';
import img2 from './p1.png';
import images from "./previousformations";

const Apropos = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextImage();
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Header />
            <main className="apropos-page">
                <section className="image-section">
                    <img src={AproposImage} alt="Wiki Space" className="apropos-image" />
                </section>
                <section className="slogans-section">
                    <div className="slogan-card" style={{ '--stair-index': 0 }}>
                        <div className="slogan-content">
                            <h3>Wiki Space coworking créé par les entrepreneurs pour les entrepreneurs</h3>
                            <div className="slogan-description">
                                <p>Wiki Space fournit un environnement créé par des entrepreneurs, pour des entrepreneurs, assurant tout le soutien nécessaire pour que votre entreprise prospère.</p>
                            </div>
                        </div>
                    </div>
                    <div className="slogan-card" style={{ '--stair-index': 1 }}>
                        <div className="slogan-content">
                            <h3>Les formations qui éveillent la conscience de vos compétences</h3>
                            <div className="slogan-description">
                                <p>WST offre un environnement créé par des entrepreneurs, pour des entrepreneurs, assurant tout le soutien nécessaire pour que votre entreprise prospère.</p>
                            </div>
                        </div>
                    </div>
                    <div className="slogan-card" style={{ '--stair-index': 2 }}>
                        <div className="slogan-content">
                            <h3>Le cabinet WST né d'une véritable passion pour accompagner la diversité de vos enjeux.</h3>
                            <div className="slogan-description">
                                <p>Notre savoir-faire et nos compétences reposent sur les formations variées effectuées durant ces dernières années. Quel que soit votre projet, WST vous accompagne, identifie l'ensemble de vos besoins et vous propose un package répondant à votre attente.</p>
                            </div>
                        </div>
                    </div>
                </section>




                <section className="apropos-section">
                    <h2>À propos de Wiki Space</h2>
                    <p>
                        Wiki Space est un espace de Coworking créé par des entrepreneurs pour des entrepreneurs. L'esprit de Wiki Space repose sur le vécu et la connaissance du terrain de ce qui est nécessaire pour créer une entreprise et la faire grandir.
                    </p>
                    <p>
                        Nos services comprennent :
                    </p>
                    <ul>
                        <li><strong>Formation :</strong> Des programmes de formation variés pour aider les entrepreneurs à acquérir de nouvelles compétences et à se perfectionner.</li>
                        <li><strong>Coworking :</strong> Des espaces de travail partagés et privés adaptés à vos besoins, favorisant la collaboration et l'innovation.</li>
                        <li><strong>Événements :</strong> Organisation d'événements professionnels pour faciliter le réseautage et le développement des compétences.</li>
                        <li><strong>Support aux startups :</strong> Assistance et mentorat pour les jeunes entreprises en phase de démarrage.</li>
                        <li><strong>Accès à des ressources :</strong> Mise à disposition d'outils et de ressources nécessaires pour la croissance de votre entreprise.</li>
                        <li><strong>Domiciliation :</strong> Service de domiciliation commerciale pour établir le siège social de votre entreprise.</li>
                    </ul>
                </section>
                <section className="gallery-section">
                    <h2>Galerie des Formations Inspirantes</h2>
                    <div className="photo-gallery">
                        <button className="gallery-arrow left-arrow" onClick={handlePrevImage}>←</button>
                        <img src={images[currentImageIndex]} alt={`Gallery ${currentImageIndex + 1}`} className="gallery-image" />
                        <button className="gallery-arrow right-arrow" onClick={handleNextImage}>→</button>
                    </div>
                </section>
                <section className="partners-and-contact">
                    <div className="partners-section">
                        <h2>Nos Partenaires</h2>
                        <div className="partners-logos">
                            <img src={img1} alt="Partner 1" />
                            <img src={img2} alt="Partner 2" />
                        </div>
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
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Apropos;
