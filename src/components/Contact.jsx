import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './ContactFormPage.css';

const ContactFormPage = () => {
    return (
        <div>
            <Header />
            <main className="contact-form-page">
                <section className="contact-form-section">
                    <h2>Contactez-Nous</h2>
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
                            Sujet:
                            <input type="text" name="subject" required />
                        </label>
                        <label>
                            Message:
                            <textarea name="message" required></textarea>
                        </label>
                        <button type="submit">Envoyer</button>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default ContactFormPage;
