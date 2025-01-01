import styles from './contact.module.css';


function Co_contact() {

    return(
        <div className={styles.main_contact}>

            <h3>CONTACT</h3>
            <p className={styles.para1}>Fan? Drop a note!</p>

            <div className={styles.contact_box}>
                <div className={styles.paragraphs}>
                    <p><span className="fa fa-map-marker"></span>Chicago, US</p>
                    <p><span className="fa fa-phone"></span>Phone: +00 151515</p>
                    <p><span className="fa fa-envelope"></span>Email: mail@mail.com</p>
                </div>

                <div className={styles.inputs}>
                    <input type="text" placeholder='Name'></input>
                    <input type="text" placeholder='Email'></input>
                    <input type="text" placeholder='Message'></input>
                </div>
            </div>

            <button type="button">SEND</button>

        </div>
    );
}


export default Co_contact