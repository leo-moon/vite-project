import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection.jsx';
import IntroSection from './components/IntroSection/introSection.jsx';
import TabSection from './components/TabSection/TabSection.jsx';
import FeedbackSection from './components/FeedbackSection/FeedbackSection.jsx';

export default function App() {
  const [tab, setTab] = useState('main');
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
      </main>
    </>
  );
}
