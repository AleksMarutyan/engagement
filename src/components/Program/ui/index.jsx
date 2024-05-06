import classNames from "classnames"
import styles from "./styles.module.css"

export const Program = () => {

  return (
    <div className={styles.container}>
      <h1>Ծրագիր</h1>
      <div className={styles.programContainer}>
        <div>
          <div className={classNames(styles.image, styles.rignsImage)}/> 
          <p className={styles.programItemName}>
            Պսակադրություն
          </p>
          <p className={styles.programItemTime}>
            14:30
          </p>
          <p className={styles.programItemPlace}>
            Հաղարծնի վանք
          </p>
        </div> 
        <div>
          <div className={classNames(styles.image, styles.eventImage)}/>
          <p className={styles.programItemName}>
            Հարսանյաց հանդիսություն
          </p>
          <p className={styles.programItemTime}>
            17:00
          </p>
          <p className={styles.programItemPlace}>
            Գետափ Դիլիջան
          </p>
        </div>
        <div>
          <div className={classNames(styles.image, styles.endImage)}/>
          <p className={styles.programItemName}>
            Հանդիսություն ավարտ
          </p>
        </div>  
      </div>
    </div>
  )
}