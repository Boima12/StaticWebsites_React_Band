import styles from './navbar.module.css';
import { useRef } from 'react';

function Co_navbar() {
    const dropdownRef = useRef(null);

    const handleMouseEnter = () => {
        if (dropdownRef.current) {
            dropdownRef.current.style.visibility = 'visible';
            dropdownRef.current.style.opacity = '1';
        }
    };

    const handleMouseLeave = () => {
        if (dropdownRef.current) {
            dropdownRef.current.style.visibility = 'hidden';
            dropdownRef.current.style.opacity = '0';
        }
    };

    return (
        <div className={styles.main}>

            <a href='#'>Home</a>
            <a href='#'>Band</a>
            <a href='#'>Tour</a>
            <a href='#'>Contact</a>
            <a href='#' 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
            >
                More
            </a>

            <i className="fa fa-search"></i>

            <div className={styles.dropdown} 
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <a href="#">Merchandise</a>
                <a href="#">Extras</a>
                <a href="#">Media</a>
            </div>

        </div>
    );
}

export default Co_navbar;
