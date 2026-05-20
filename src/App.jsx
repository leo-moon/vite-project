import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import { ports, differences } from './data';
import Learning from './components/Learning.jsx';
import Button from './components/Button/Button.jsx';

export default function App() {
  const [content, setContent] = useState('Нажми на кнопку');

  function handleClick(type) {
    // console.log('Button clicked!!!', differences[type]);
    setContent(type);
  }
  console.log('content', content);
  //   console.log('differences', differences[content]);
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
          <Button onClick={() => handleClick('way')}>Variant 1</Button>
          <Button onClick={() => handleClick('easy')}>Variant 2</Button>
          <Button onClick={() => handleClick('hard')}>Variant 3</Button>

          <p>{differences[content]}</p>
        </section>
      </main>
    </div>
  );
}
