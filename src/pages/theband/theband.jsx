import styles from './theband.module.css';
import Co_member from './props/member/member';

import img1 from '../../assets/images/Boima.jpg';

function Co_theband() {

    return(
        <div className={styles.main}>

            <div className={styles.box1}>
                <h3>THE BAND</h3>
                <p>We love music</p>
                <p>We have created a fictional band website. Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur  sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>


            <div className={styles.members}>
                <Co_member title="Boima" img1={img1} />
                <Co_member title="Boima" img1={img1} />
                <Co_member title="Boima" img1={img1} />
            </div>

        </div>
    );
}


export default Co_theband