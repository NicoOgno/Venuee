import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './style.css';
import styles from './styles.module.css';

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div className={styles.calendarContainer}>
      <Calendar onChange={setDate} value={date} />
      <h1 className={styles.dateText}>SELECT THE DATE YOUR VENUE IS UNAVAILABLE</h1>
      <div>
        <button className={styles.dateButton}>SET DATE</button>
      </div>
    </div>
  );
}

export default App;
