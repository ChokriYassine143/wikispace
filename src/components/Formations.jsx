import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Formation.css';
import formation1 from './88.jpg';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const formations = [
    {
        id: 1,
        title: 'Formation 1',
        description: 'This is a short description for formation 1.',
        fullDescription: 'This is the full description for formation 1, providing detailed information about the content, schedule, and instructors.',
        image: formation1,
        hours: '40 hours',
        startDate: '01/07/2024',
        endDate: '01/08/2024'
    },
    {
        id: 2,
        title: 'Formation 2',
        description: 'This is a short description for formation 2.',
        fullDescription: 'This is the full description for formation 2, providing detailed information about the content, schedule, and instructors.',
        image: formation1,
        hours: '60 hours',
        startDate: '01/09/2024',
        endDate: '01/10/2024'
    },
    {
        id: 3,
        title: 'Formation 3',
        description: 'This is a short description for formation 3.',
        fullDescription: 'This is the full description for formation 3, providing detailed information about the content, schedule, and instructors.',
        image: formation1,
        hours: '50 hours',
        startDate: '01/11/2024',
        endDate: '01/12/2024'
    },
  
];

const Formations = () => {
    const Navigate =useNavigate();
    return (
        <div>
            <Header />
            <main className="formations-page">
                <section className="announcements">
                    <h2>Annonces et Promotions</h2>
                    <div className="announcement">
                        <p>Profitez de notre offre spéciale sur la formation XYZ jusqu'à la fin du mois !</p>
                    </div>
                </section>
                <section className="formations-list">
                    <h2>Nos Formations</h2>
                    <div className="cards-container">
                        {formations.map((formation) => (
                            <div className="card" key={formation.id}>
                                <div className="card-front">
                                    <img src={formation.image} alt={formation.title} className="card-image" />
                                    <div className="card-info">
                                        <h3>{formation.title}</h3>
                                        <p>{formation.description}</p>
                                        <Link to={`/formation/${formation.id}`} className="see-more">Voir plus</Link>
                                    </div>
                                </div>
                                <div className="card-back">
                                    <div onClick={ ()=>{
                                        Navigate("/formation/id");
                                    }} className="card-back-content">
                                        <h3>{formation.title}</h3>
                                        <p><strong>Hours:</strong> {formation.hours}</p>
                                        <p><strong>Start Date:</strong> {formation.startDate}</p>
                                        <p><strong>End Date:</strong> {formation.endDate}</p>
                                        
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="stats">
                    <h2>Statistiques</h2>
                    <div className="stats-container">
                        <div className="stat">
                            <h3>Formations</h3>
                            <p>15</p>
                        </div>
                        <div className="stat">
                            <h3>Participants</h3>
                            <p>200+</p>
                        </div>
                        <div className="stat">
                            <h3>Formateurs</h3>
                            <p>10</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Formations;
