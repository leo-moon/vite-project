import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import MainSection from './components/MainSection/MainSection.jsx';
import Learning from './components/Learning.jsx';
import Button from './components/Button/Button.jsx';
import IntroSection from './components/IntroSection/introSection.jsx';

export default function App() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    // console.log('Button clicked!!!', differences[type]);
    setContentType(type);
  }
  // test repo
  //   let tabContent = null;
  //   if (contentType) {
  //     tabContent = <p>{differences[contentType]}</p>;
  //   } else {
  //     tabContent = <p>Click the button to see the differences</p>;
  //   }

  //   console.log('content', content);

  //   console.log('differences', differences[content]);
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <MainSection contentType={contentType} handleClick={handleClick} />
      </main>
    </>
  );
}
