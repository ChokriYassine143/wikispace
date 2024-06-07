import React, { useState } from 'react';
import Calendar from 'react-calendar'; // You need to install this package
import 'react-calendar/dist/Calendar.css';
import './Coworking.css';
import Header from './Header';
import Footer from './Footer';
import contactFormImage1 from './22.jpg'; // Replace with your image paths
import contactFormImage2 from './33.jpg';
import contactFormImage3 from './88.jpg';

const Coworking = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [availability, setAvailability] = useState(null);

    const handleDateChange = date => {
        setSelectedDate(date);
        // Simulate checking availability for the selected date
        setAvailability({
            desks: 30,
            meetingRooms: 4
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
                    <img src={contactFormImage1} alt="Coworking Space" />
                    <img src={contactFormImage2} alt="Meeting Room" />
                    <img src={contactFormImage3} alt="Event Space" />
                </div>
                <div className="third-div">
                    <h3>Contactez-nous</h3>
                    <form className="contact-form">
                        <label>
                            Nom:
                            <input type="text" name="name" />
                        </label>
                        <label>
                            Email:
                            <input type="email" name="email" />
                        </label>
                        <label>
                            Numéro:
                            <input type="text" name="Numero" required />
                        </label>
                        <label>
                            Message:
                            <textarea name="message"></textarea>
                        </label>
                        <button type="submit">Envoyer</button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Coworking;
