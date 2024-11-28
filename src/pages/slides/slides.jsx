import { useState, useEffect } from 'react';
import styles from './slides.module.css';

import img1 from '../../assets/images/ny.jpg';
import img2 from '../../assets/images/la.jpg';
import img3 from '../../assets/images/chicago.jpg';

function Co_slides() {
    // Define an array of slides with images, titles, and descriptions
    const slides = [
        {
            image: img1,
            title: "New York",
            description: "The atmosphere in New York is lorem ipsum."
        },
        {
            image: img2,
            title: "Los Angeles",
            description: "We had the best time playing at Venice Beach!"
        },
        {
            image: img3,
            title: "Chicago",
            description: "Thank you, Chicago - A night we won't forget."
        }
    ];

    // State to track the current slide index
    const [currentSlide, setCurrentSlide] = useState(0);

    // Automatically change the slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [slides.length]);

    // Get the current slide data
    const current = slides[currentSlide];

    // Inline style for background image
    const imgstyle = {
        backgroundImage: `url(${current.image})`
    };

    return (
        <div className={styles.main} style={imgstyle}>
            <div className={styles.box1}>
                <p>{current.title}</p>
                <p>{current.description}</p>
            </div>
        </div>
    );
}

export default Co_slides;
