import { Timer } from "../../../Timer/ui";
import styles from "./styles.module.css";
import { Program } from "../../../Program/ui";

export const Header = () => {
  
  return (
    <header className={styles.header}>   
      <div className={styles.content}>
        <h1>
          ՆՇԱՆԱԴՐՈՒԹՅԱՆ ՀՐԱՎԻՐԱՏՈՄՍ
        </h1>
        <p className={styles.names}>
          anunnner
        </p>
        <Timer/>
        <Program/>
      </div>
    </header>
  ) 
}