import styles from './member.module.css';
import PropTypes from 'prop-types';

function Co_member(props) {

    const imgstyle = {
        backgroundImage: `url(${props.img1})`
    }

    return(
        <div className={styles.main}>
            <h3>{props.title}</h3>
            <div className={styles.img1} style={imgstyle}></div>
        </div>
    );
}


Co_member.propTypes = {
    title: PropTypes.string,
    img1: PropTypes.string,
}


export default Co_member