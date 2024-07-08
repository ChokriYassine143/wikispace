import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './ContactFormPage.css';
import img3 from "./contact.png";
const ContactFormPage = () => {
    return (
        <div>
            <Header />
            <main className="contact-form-page">
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

export default ContactFormPage;
