import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import { ports } from './data';
import Learning from './components/Learning.jsx';
import Button from './components/Button/Button.jsx';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <h1>Hello react</h1>
        <section>
          <h3>Start list</h3>
          <ul>
            <Learning
              title={ports[0].title}
              description={ports[0].description}
            />
            <Learning {...ports[1]} />
            <Learning {...ports[2]} />
          </ul>
        </section>
        <section>
          <h3>Заголовок 3</h3>
          <Button></Button>
        </section>
      </main>
    </div>
  );
}
