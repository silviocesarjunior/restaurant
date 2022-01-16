import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        WELL BAKED SLICE OF PIZZA
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>Find our Restaurants</h1>
                    <p className={styles.text}>
                        860 Street The Pizza time
                        <br />Caçapava
                        <br /> (+55) 12-99250-9452
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>Working Hours</h1>
                    <p className={styles.text}>
                        Monday until friday
                        <br /> 18:00 - 24:00
                    </p>
                    <p className={styles.text}>
                        Saturday - Sunday
                        <br />12:00 - 24:00
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
