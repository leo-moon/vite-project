import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import { ports } from './data';

function Learning(props) {
  console.log(props);
  return (
    <li>
      <p>
        <strong>1 row</strong>1 row coment
      </p>
    </li>
  );
}

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <h1>Hello react</h1>
        <section>
          <h3>Start list</h3>
          <ul>
            <Learning title="11" deacription="22" />
            <Learning title="3311" deacription="4422" />
          </ul>
        </section>
      </main>
    </div>
  );
}
