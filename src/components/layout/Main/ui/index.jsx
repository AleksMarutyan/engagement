import classNames from "classnames";
import styles from "./styles.module.css";
import { Timer } from "../../../Timer/ui";
import { Program } from "../../../Program/ui";

export const Main = () => {
  const goToDirection = (direaction) => {
    let url = 'https://www.google.com/maps/dir/?api=1&destination=' + direaction + '&travelmode=driving';
    
    window.open(url, '_blank');
  }

  return (
    <main className={styles.main}>
      <Timer/>
      <Program/>
      <div className={styles.places}>
        <div className={styles.flexContainer}>
          <div className={classNames(styles.church, styles.imageContainer)}>
            <div className={styles.textContainer}>
              <p className={styles.title}>
                Արարողություն 
              </p>
              <p className={styles.time}>
                14:30 
              </p>
              <button 
                className={styles.mapButton} 
                onClick={(event)=>{
                  goToDirection("40.80201505999294 , 44.89094764008156")
                  event.currentTarget.blur();
                }}
              >
                Ինչպես հասնել
              </button>
            </div>
          </div>
        </div>
        <div className={styles.flexContainer}>
          <div className={classNames(styles.photosession, styles.imageContainer)}>
            <div className={styles.textContainer}>
              <p className={styles.title}>
                Ֆոտոսեսիա 
              </p>
              <p className={styles.time}>
                15:30 
              </p>
              <button 
                className={styles.mapButton} 
                onClick={(event)=>{
                  goToDirection("40.74022479694044, 44.870355404001955")
                  event.currentTarget.blur();
                }}
              >
                Ինչպես հասնել
              </button>
            </div>
          </div>
        </div>
        <div className={styles.flexContainer}>
          <div className={classNames(styles.hall, styles.imageContainer)}>
            <div className="">
              <p className={styles.title}>
                Հանդիսություն
              </p>
              <p className={styles.time}>
                17:00
              </p>
              <button 
                className={styles.mapButton} 
                onClick={(event)=>{
                  goToDirection("40.75949563888817, 44.906017240754316")
                  event.currentTarget.blur();
                }}
              >
                Ինչպես հասնել
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  ) 
}