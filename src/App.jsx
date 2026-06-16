import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection.jsx';
import IntroSection from './components/IntroSection/introSection.jsx';
import TabSection from './components/TabSection/TabSection.jsx';
import FeedbackSection from './components/FeedbackSection/FeedbackSection.jsx';
import EffectSection from './components/EffectSection.jsx';
import Examination from './components/Examination.jsx';

export default function App() {
  const [tab, setTab] = useState('effect');
  //   const [page, setPage] = useState('home');
  //   let tabContent = null;
  //   if (contentType) {
  //     tabContent = <p>{differences[contentType]}</p>;
  //   } else {
  //     tabContent = <p>Click the button to see the differences</p>;
  //   }
  return (
    <>
      <Header />
      <main>
        {/* <Examination /> */}

        <TabSection
          activeTab={tab}
          onTabChange={(current) => setTab(current)}
        />
        {/* <TabSection activeTab={tab} onTabChange={setTab} /> */}
        {tab === 'main' && (
          <>
            <IntroSection />
            <MainSection />
          </>
        )}
        {tab === 'feedback' && <FeedbackSection />}
        {tab === 'effect' && <EffectSection />}
      </main>
    </>
  );
}
