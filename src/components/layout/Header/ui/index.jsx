import { Timer } from "../../../Timer/ui";
import styles from "./styles.module.css";
import { Program } from "../../../Program/ui";
import classNames from "classnames";

export const Header = () => {
  
  return (
    <header className={styles.header}>   
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
        <Timer/>
        <Program/>
      </div>
      <div className={styles.headerFilter} />
    </header>
  ) 
}