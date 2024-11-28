import styles from './tour.module.css';
import Co_ticket from './props/ticket/ticket';

import img1 from '../../assets/images/newyork.jpg';
import img2 from '../../assets/images/paris.jpg';
import img3 from '../../assets/images/sanfran.jpg';

function Co_tour() {

    return(
        <div className={styles.main}>

            <div className={styles.box1}>
                <h3>TOUR DATES</h3>
                <p>Remember to book your tickets!</p>
                <ul>
                    <li>September <span className={styles.soldout}>Sold out</span></li>
                    <li>October <span className={styles.soldout}>Sold out</span></li>
                    <li>November 
                        <span className={styles.ticket_left}>
                            <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="15" cy="15" r="15" fill="black"/>
                            </svg>
                            <p>3</p>
                        </span>
                    </li>
                </ul>
            </div>

            <div className={styles.tickets}>
                <Co_ticket img1={img1} 
                para1="New York" 
                para2="Fri 27 Nov 2016"
                para3="Praesent tincidunt sed tellus ut rutrum sed vitae justo."
                />

                <Co_ticket img1={img2} 
                para1="Paris" 
                para2="Sat 28 Nov 2016"
                para3="Praesent tincidunt sed tellus ut rutrum sed vitae justo."
                />

                <Co_ticket img1={img3} 
                para1="San Francisco" 
                para2="Sun 29 Nov 2016"
                para3="Praesent tincidunt sed tellus ut rutrum sed vitae justo."
                />
            </div>

        </div>
    );
}


export default Co_tour