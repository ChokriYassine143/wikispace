import React, { useState } from 'react';
import Calendar from 'react-calendar'; // Ensure you have installed this package
import 'react-calendar/dist/Calendar.css';
import './Coworking.css'; // Import the external CSS file
import Header from './Header';
import Footer from './Footer';
import contactFormImage1 from './22.jpg'; // Replace with your image paths
import contactFormImage2 from './33.jpg';
import contactFormImage3 from './88.jpg';
import img3 from "./contact.png";
const Coworking = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [availability, setAvailability] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        // Simulate checking availability for the selected date
        setAvailability({
            desks: 30,
            meetingRooms: 4,
        });
    };

    return (
        <div>
            <Header />
            <main className="coworking-page">
                <div className="first-div">
                    <div className="text">
                        <h2>Espace coworking confortable</h2>
                    </div>
                    <div className="calendar">
                        <Calendar onChange={handleDateChange} value={selectedDate} />
                    </div>
                    <div className="availability">
                        {availability ? (
                            <div>
                                <p>30 bureaux</p>
                                <p>4 salles de réunion</p>
                            </div>
                        ) : (
                            <p>Sélectionnez une date pour voir la disponibilité</p>
                        )}
                    </div>
                </div>
                <div className="second-div">
                    <div className="image-container">
                        <img src={contactFormImage1} alt="Coworking Space" />
                        <div className="image-tooltip">
                            <p>Open Space pour 44-50 personnes</p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={contactFormImage2} alt="Meeting Room"  />
                        <div className="image-tooltip">
                            <p>Salle de réunion pour 10 personnes</p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={contactFormImage3} alt="Event Space"/>
                        <div className="image-tooltip">
                            <p>Salle de réunion pour 22 personnes</p>
                        </div>
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
            </main>
            <Footer />
        </div>
    );
};

export default Coworking;
