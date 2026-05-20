import { useState } from 'react';
import './header.css';
import dayjs from 'dayjs';
import logo from '/vite.svg';

export default function Header() {
  const [now, setNow] = useState(dayjs());
  setInterval(() => {
    setNow(dayjs());
  }, 1000);
  return (
    // <header>
    <header>
      <div className="headerblock">
        <img src={logo} alt="" />
        <h3>Header</h3>

        <span>Time: {now.format('HH:mm:ss')}</span>
      </div>
    </header>
  );
}
