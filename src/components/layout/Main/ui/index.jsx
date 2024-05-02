import classNames from "classnames";
import { Map } from "../../../Map/ui";
import styles from "./styles.module.css";

export const Main = () => {
  const goToDirection = (direaction) => {
    let url = 'https://www.google.com/maps/dir/?api=1&destination=' + direaction + '&travelmode=driving';
    
    window.open(url, '_blank');
  }

  return (
    <main className={styles.main}>
      <div className={styles.places}>
        <div className={styles.flexContainer}>
          <div className={classNames(styles.church, styles.imageContainer)}>
            <div className={styles.textContainer}>
              <p className={styles.title}>
                Արարողություն 
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
          <Map 
            center={{
              lat: 40.80201505999294, 
              lng: 44.89094764008156,
            }}
          />          
        </div>
        <div className={styles.flexContainer}>
          <div className={classNames(styles.photosession, styles.imageContainer)}>
            <div className={styles.textContainer}>
              <p className={styles.title}>
                Ֆոտոսեսիա 
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
          <Map 
            center={{
              lat: 40.74022479694044, 
              lng: 44.870355404001955,
            }}
          />          
        </div>
        <div className={styles.flexContainer}>
          <div className={classNames(styles.hall, styles.imageContainer)}>
            <div className="">
              <p className={styles.title}>
                Հանդիսություն
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
          <Map
            center={{
              lat: 40.75949563888817, 
              lng: 44.906017240754316,
            }}
          />     
        </div>
      </div>
    </main>
  ) 
}