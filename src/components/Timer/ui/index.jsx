import styles from "./styles.module.css";
import { useState, useEffect } from "react";

function timeRemaining(endDate = new Date("2024-05-15")) {
  let current = new Date();
  let difference = endDate - current;

  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  return {
    days, 
    hours: hours.toString().padStart(2, "0"),
    minutes: minutes.toString().padStart(2, "0"),
    seconds: seconds.toString().padStart(2, "0"),
  };
}

export const Timer = () => {
  const [remainingTime, setRemainingTime] = useState(timeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(timeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); 

    return (
      <div className={styles.container}>
        <p className={styles.topText}>
          Արարողությունը մնացել է
        </p>
        <div className={styles.timer}>
          <p>
            {remainingTime.days}
            <span>Օր</span>
          </p>
          <p>
            {remainingTime.hours}
            <span>Ժամ</span>  
          </p> 
          <p>         
            {remainingTime.minutes} 
            <span>Րոպե</span>
          </p>
          <p>
            {remainingTime.seconds}
            <span>Վարկյան</span>
          </p>
        </div>
      </div>
    );
};