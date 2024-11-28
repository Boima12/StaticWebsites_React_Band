import styles from './footer.module.css';


function Co_footer() {

    return(
        <div className={styles.main}>

            <div className={styles.icons}>
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-snapchat"></i></a>
                <a href="#"><i className="fa-brands fa-pinterest"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            </div>

            <p>Remade by Boima, original idea from W3Schools.</p>

        </div>
    );
}


export default Co_footer