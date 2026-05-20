import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import { ports, differences } from './data';
import Learning from './components/Learning.jsx';
import Button from './components/Button/Button.jsx';

export default function App() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    // console.log('Button clicked!!!', differences[type]);
    setContentType(type);
  }

  //   let tabContent = null;
  //   if (contentType) {
  //     tabContent = <p>{differences[contentType]}</p>;
  //   } else {
  //     tabContent = <p>Click the button to see the differences</p>;
  //   }

  //   console.log('content', content);
  //   console.log('differences', differences[content]);
  return (
    <div>
      <Header />
      <main>
        <h1>Hello react</h1>
        <section>
          <h3>Start list</h3>
          <ul>
            {ports.map((item) => (
              <Learning key={item.title} {...item} />
            ))}
            {/* <Learning
              title={ports[0].title}
              description={ports[0].description}
            />
            <Learning {...ports[1]} />
            <Learning {...ports[2]} /> */}
          </ul>
        </section>
        <section>
          <h3>Заголовок 3</h3>
          <Button
            isActive={contentType === 'way'}
            onClick={() => handleClick('way')}
          >
            Variant 1
          </Button>
          <Button
            isActive={contentType === 'easy'}
            onClick={() => handleClick('easy')}
          >
            Variant 2
          </Button>
          <Button
            isActive={contentType === 'hard'}
            onClick={() => handleClick('hard')}
          >
            Variant 3
          </Button>

          {/* {contentType ? (
            <p>{differences[contentType]}</p>
          ) : (
            <p>Click the button to see the differences</p>
          )} */}

          {!contentType ? <p>Click the button to see the differences</p> : null}

          {/* {contentType ? <p>{differences[contentType]}</p> : null} */}

          {contentType && <h4>{differences[contentType]}</h4>}

          {/* <p>{differences[contentType]}</p> */}
          {/* {tabContent} */}
        </section>
      </main>
    </div>
  );
}
