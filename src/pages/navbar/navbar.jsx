import styles from './navbar.module.css';
import { useRef } from 'react';
// import { useNavigate } from 'react-router-dom';

function Co_navbar() {

    // const navigate = useNavigate();

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

    // const handle_navbar_fix = () => {
    //     navigate('/navbar_fix');
    // }


    // open/close menu_collapse
    const menu_collapseRef = useRef();
    const menu_collapse_open = () => {
        menu_collapseRef.current.classList.add(styles.menu_collapse_transition_open);
    };
    const menu_collapse_close = () => {
        menu_collapseRef.current.classList.remove(styles.menu_collapse_transition_open);
    };


    // open/close menu_more
    const menu_moreRef = useRef();
    const menu_more_open = () => {
        menu_moreRef.current.classList.add(styles.menu_collapse_transition_open);
    };
    const menu_more_close = () => {
        menu_moreRef.current.classList.remove(styles.menu_collapse_transition_open);
    };


    return (
        <div className={styles.main_navbar}>

            <div className={styles.normal}>
                <a href='#'>Home</a>
                <a href='#'>Band</a>
                <a href='#'>Tour</a>
                <a href='#'>Contact</a>
                <a href='#' 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                    // onClick={handle_navbar_fix}
                >More</a>

                <i className="fa fa-search"></i>

                <div className={styles.dropdown_more} 
                    ref={dropdownRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <a href="#">Merchandise</a>
                    <a href="#">Extras</a>
                    <a href="#">Media</a>
                </div>
            </div>

            <div className={styles.collapse}>
                <i className="fa fa-bars"
                    onClick={menu_collapse_open}
                ></i>
                    
                <i className="fa fa-search"></i>

                <div className={[styles.menu_collapse, styles.menu_collapse_transition].join(' ')} ref={menu_collapseRef}>
                    <i className="fa-solid fa-xmark"
                        onClick={menu_collapse_close}
                    ></i>

                    <a href='#'>Home</a>
                    <a href='#'>Band</a>
                    <a href='#'>Tour</a>
                    <a href='#'>Contact</a>
                    <a href='#' 
                        onClick={menu_more_open}
                    >More</a>
                </div>

                <div className={[styles.menu_more, styles.menu_collapse_transition].join(' ')} ref={menu_moreRef}>
                    <i className="fa-solid fa-arrow-left"
                        onClick={menu_more_close}
                    ></i>

                    <a href="#">Merchandise</a>
                    <a href="#">Extras</a>
                    <a href="#">Media</a>
                </div>
            </div>

        </div>
    );
}

export default Co_navbar;
