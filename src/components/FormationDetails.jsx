import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './FormationDetails.css';

const FormationDetails = ({  }) => {
    const formation = {
        image: 'https://via.placeholder.com/150',
        title: 'Full Stack Web Development',
        instructor: 'John Doe',
        participants: 120,
        description: 'This course will cover full-stack web development with hands-on projects.',
        duration: '12 weeks',
        startDate: '2024-07-01',
        endDate: '2024-09-24',
    };
    return (
        <div>
            <Header />
            <main className="formation-details">
                <div className="formation-header">
                    <img src={formation.image} alt={formation.title} className="formation-image" />
                    <div className="formation-header-content">
                        <h1 className="formation-title">{formation.title}</h1>
                        <p className="formation-instructor">Instructed by: {formation.instructor}</p>
                        <div className="formation-stats">
                            <p>Participants: {formation.participants}</p>
                        </div>
                    </div>
                </div>
                <div className="formation-content">
                    <section className="formation-description">
                        <h2>Description</h2>
                        <p>{formation.description}</p>
                    </section>
                    <section className="formation-stats-details">
                        <h2>Course Stats</h2>
                        <div className="stats-card">
                            <p><strong>Duration:</strong> {formation.duration}</p>
                            <p><strong>Start Date:</strong> {formation.startDate}</p>
                            <p><strong>End Date:</strong> {formation.endDate}</p>
                        </div>
                    </section>
                    <section className="signup-section">
                        <h2>Signup for this Course</h2>
                        <button className="signup-button">Sign Up</button>
                        <div className="payment-options">
                            <button className="online">Pay Online</button>
                            <button className="in-person">Pay In-Person</button>
                        </div>
                    </section>
                    <section className="contact-section">
                        <h2>Contact Us</h2>
                        <form className="contact-form">
                            <label>
                                Name:
                                <input type="text" name="name" required />
                            </label>
                            <label>
                                Email:
                                <input type="email" name="email" required />
                            </label>
                            <label>
                                Numero:
                                <input type="email" name="email" required />
                            </label>
                            <label>
                                Subject:
                                <input type="text" name="subject" required />
                            </label>
                            <label>
                                Message:
                                <textarea name="message" required></textarea>
                            </label>
                            <button type="submit">Send</button>
                        </form>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default FormationDetails;
