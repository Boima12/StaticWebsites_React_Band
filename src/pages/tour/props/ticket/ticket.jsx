import PropTypes from 'prop-types';
import styles from './ticket.module.css';


function Co_ticket(props) {

    const imgstyle = {
        backgroundImage: `url(${props.img1})`
    }

    return(
        <div className={styles.main}>

            <div className={styles.ticket_image} style={imgstyle}></div>

            <div className={styles.ticket_box}>
                <p>{props.para1}</p>
                <p>{props.para2}</p>
                <p>{props.para3}</p>

                <button type="button">Buy Tickets</button>
            </div>

        </div>
    );
}


Co_ticket.propTypes = {
    img1: PropTypes.string,
    para1: PropTypes.string,
    para2: PropTypes.string,
    para3: PropTypes.string,
}


export default Co_ticket