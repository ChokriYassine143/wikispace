import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Acceuil.css';
import Accceuilimg from './1 (2).jpg';
import img1 from './22.jpg';
import img2 from './33.jpg';
import img3 from './44.jpg';
import img4 from './55.jpg';
import img5 from './66.jpg';
import img6 from './77.jpg';
import img7 from './88.jpg';
import contact from "./contact.png";

const Acceuil = () => {
    return (
        <div>
            <Header />
            <main>
                <section className="welcome-section">
                    <img src={Accceuilimg} alt="Welcome" className="welcome-image" />
                    <h1 className="welcome-text">Bienvenue à Wiki Space</h1>
                </section>
                <section className="ce-qui-nous-faisons">
                    <h2>Ce Qui Nous Faisons Secteur</h2>
                    <div className="content">
                        <p>Nous sommes un centre dédié à offrir des solutions de coworking et organiser des événements pour promouvoir la collaboration et l'innovation.</p>
                        <p>Notre mission est de fournir un espace inspirant pour les professionnels de divers secteurs afin qu'ils puissent travailler ensemble, échanger des idées et créer des opportunités.</p>
                        <p>Nous offrons des infrastructures modernes et un environnement stimulant qui favorise la productivité et la créativité.</p>
                    </div>
                </section>
                <section className="gallery">
                    <h2>Galerie des Photos</h2>
                    <div className="photo-grid">
                        <img src={img1} alt="Photo 1" />
                        <img src={img2} alt="Photo 2" />
                        <img src={img3} alt="Photo 3" />
                        <img src={img4} alt="Photo 4" />
                        <img src={img5} alt="Photo 5" />
                        <img src={img6} alt="Photo 6" />
                        <img src={img7} alt="Photo 7" />
                    </div>
                </section>
                <section className="contact-form">
                    <h2>Contactez-Nous</h2>
                    <div className="contact-content">
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
                                Numéro:
                                <input type="text" name="Numero" required />
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
                        <img src={contact} width="500px" alt="Contact" className="contact-image" />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Acceuil;
