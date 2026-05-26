import { useState } from 'react';
import { differences } from '../../data';
import Button from '../Button/Button.jsx';

// export default function MainSection({ contentType, handleClick }) {
export default function MainSection() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    // console.log('Button clicked!!!', differences[type]);
    setContentType(type);
  }

  return (
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
  );
}
