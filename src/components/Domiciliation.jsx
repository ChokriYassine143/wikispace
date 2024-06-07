import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Domiciliation.css';
import image from './44.jpg'
const Domiciliation = () => {
    return (
        <div>
            <Header />
            <main className="domiciliation-page">
                <section className="domiciliation-section">
                    <div className="image-container">
                        <img src={image} alt="Domiciliation" className="domiciliation-image" />
                        <div className="image-text">
                            <h2>Domiciliation d'entreprise à Tunis</h2>
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
                    <section className="contact-form-section">
                        <h3>Contactez-Nous pour la Domiciliation</h3>
                        <form className="contact-form">
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
                                Téléphone:
                                <input type="tel" name="phone" required />
                            </label>
                            <label>
                                Message:
                                <textarea name="message" required></textarea>
                            </label>
                            <button type="submit">Envoyer</button>
                        </form>
                    </section>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Domiciliation;
