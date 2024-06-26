import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Apropos.css';
import img3 from "./contact.png";
import AproposImage from './aprops.jpg';  // Add the appropriate image path
import img1 from './p2.jpg';
import img2 from './p1.png';
import images from './previousformations';  // Assuming this imports your images correctly

const Apropos = () => {
    return (
        <div>
            <Header />
            <main className="apropos-page">
                <section className="image-section">
                    <img src={AproposImage} alt="Wiki Space" className="apropos-image" />
                </section>
                <section className="slogans-section">
                    <div className="slogan-card">
                        <h3>Wiki Space coworking créé par les entrepreneurs pour les entrepreneurs</h3>
                        <span className="arrow">→</span>
                        <div className="slogan-description-card">
                            <p>Wiki Space provides an environment built by entrepreneurs, for entrepreneurs, ensuring all the necessary support for your business to thrive.</p>
                        </div>
                    </div>
                    <div className="slogan-card">
                        <h3>Les formations qui éveillent la conscience de vos compétences</h3>
                        <span className="arrow">→</span>
                        <div className="slogan-description-card">
                            <p>WST offre un environnement créé par des entrepreneurs, pour des entrepreneurs, assurant tout le soutien nécessaire pour que votre entreprise prospère.</p>
                        </div>
                    </div>
                    <div className="slogan-card">
                        <h3>Le cabinet WST né d'une véritable  passion pour accompagner la diversité de vos enjeux. </h3>
                        <span className="arrow">→</span>
                        <div className="slogan-description-card">
                            <p>Notre savoir-faire et nos compétences reposent sur les formations variées effectuées durant ces dernières années. Quel que soit votre projet, WST vous accompagne, identifie l'ensemble de vos besoins et vous propose un package répondant à votre attente.</p>
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
                    <div className="photo-grid">
                        {images.map((image, index) => (
                            <img src={image} alt={`Gallery ${index + 1}`} key={index} />
                        ))}
                    </div>
                </section>
                <div className="partners-section">
                    <h1>Nos Partenaires</h1>
                    <img src={img1} className='ss' width="150px" alt="Partner 1" />
                    <img src={img2} className="ss" width="150px" alt="Partner 2" />
                </div>
                <section className="partners-and-contact">
                    <div className="contact-form-section">
                        <h2>Contactez-Nous</h2>
                        <form>
                            <label>
                                Nom:
                                <input type="text" name="name" required />
                            </label>
                            <label>
                                Email:
                                <input type="email" name="email" required />
                            </label>
                            <label>
                                Sujet:
                                <input type="text" name="subject" required />
                            </label>
                            <label>
                                Message:
                                <textarea name="message" required></textarea>
                            </label>
                            <button type="submit">Envoyer</button>
                        </form>
                    </div>
                    <div className="partners-section">
                        <img src={img3} width="500px" alt="Contact" />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Apropos;
