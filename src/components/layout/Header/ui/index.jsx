import styles from "./styles.module.css";
import classNames from "classnames";
import image from "./mobile_1.png"

export const Header = () => {
  
  return (
    <header className={styles.header}> 
      <img src={image} alt="m_image" className={styles.image} />  
      <div className={styles.content}>
        <h1>
          ՀԱՐՍԱՆՅԱՑ ՀՐԱՎԻՐԱՏՈՄՍ
        </h1>
        <div className={styles.namesContainer}>
          <p className={classNames(styles.names,styles.firstName)}>
            Արամ
          </p>
          <p className={classNames(styles.names,styles.secondName)}>
            Սոնա
          </p>
        </div>
      </div>
      <div className={styles.headerFilter} />
    </header>
  ) 
}