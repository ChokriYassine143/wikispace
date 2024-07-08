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
    const images = [img1, img2, img3, img4, img5, img6, img7];
    const duplicatedImages = [...images, ...images]; // Duplicate the images array

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
                        <div className="photo-container">
                            {duplicatedImages.map((image, index) => (
                                <img key={index} src={image} alt={`Photo ${index + 1}`} />
                            ))}
                        </div>
                    </div>
                </section>
                <section className="contact-section">
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
                        <img src={contact} alt="Contact" className="contact-image" />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Acceuil;
