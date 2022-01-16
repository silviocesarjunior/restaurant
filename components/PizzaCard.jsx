import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/pizza.png" alt="" width="500" height="500"/>
            <h1 className={styles.title}>Calabreza</h1>
            <span className={styles.price}>$19,90</span>
            <p className={styles.desc}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, ea necessitatibus distinctio voluptatum veritatis totam! Soluta, laborum qui corrupti ipsum cumque quos minus quaerat libero magnam magni autem et ea!
            </p>

        </div>
    );
};

export default PizzaCard;
