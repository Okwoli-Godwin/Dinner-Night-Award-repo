import React, { useEffect, useState } from "react";
import styles from "./countdown.module.css";

type CountdownProps = {
  targetDate: Date;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();
    const timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={styles.countdown}>
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className={styles.timeUnit}>
          <div className={styles.timeValue}>{value}</div>
          <div className={styles.timeLabel}>
            {unit.charAt(0).toUpperCase() + unit.slice(1)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
