// import React from 'react';
import { ports } from '../../data.js';
import Learning from '../Learning.jsx';

// const e = React.createElement;

export default function IntroSection() {
  return (
    <>
      <h1>Hello react</h1>
      <section className="centered">
        <h3>Start list</h3>
        <ul>
          {ports.map((item) => (
            <Learning key={item.title} {...item} />
          ))}
        </ul>
        {/* </section> */}
        Intro Section
      </section>
      ;
    </>
  );
}
