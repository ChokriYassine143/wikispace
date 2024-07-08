import React from 'react';
import './EvenementGallery.css';

import img1 from './evenemetphotos/event1.jpeg';
import img2 from './evenemetphotos/event2.jpeg';
import img3 from './evenemetphotos/event3.jpeg';
import img4 from './evenemetphotos/event4.jpeg';
import img5 from './evenemetphotos/event5.jpeg';
import img6 from './evenemetphotos/event6.jpeg';
import img7 from './evenemetphotos/event7.jpeg';
import img8 from './evenemetphotos/event8.jpeg';
import img9 from './evenemetphotos/event9.jpeg';
import img10 from './evenemetphotos/event10.jpeg';
import img11 from './evenemetphotos/event11.jpeg';
import img12 from './evenemetphotos/event12.jpeg';
import img13 from './evenemetphotos/event13.jpeg';
import img14 from './evenemetphotos/event14.jpeg';
import img15 from './evenemetphotos/event15.jpeg';
import img16 from './evenemetphotos/event16.jpeg';
import Header from './Header';
import Footer from './Footer';

const EvenementGallery = () => {
    const images = [
        img1, img2, img3, img4, img5, img6, img7, img8,
        img9, img10, img11, img12, img13, img14, img15, img16
    ];

    return (
        <div>
            <Header />
            <div className="evenement-gallery">
                <h2>Galerie des Événements</h2>
                <div className="gallery-grid">
                    {images.map((image, index) => (
                        <div key={index} className="gallery-image-container">
                            <img
                                src={image}
                                alt={`Événement ${index + 1}`}
                                className="gallery-image"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default EvenementGallery;
