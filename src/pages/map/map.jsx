import styles from './map.module.css';

import mapimg from '../../assets/images/map.jpg';

function Co_map() {

    const imgstyle = {
        backgroundImage: `url(${mapimg})`
    }

    return(
        <div className={styles.main} style={imgstyle}></div>
    );
}


export default Co_map