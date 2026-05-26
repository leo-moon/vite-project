import './App.css';
import Header from './components/Header/Header.jsx';
import MainSection from './components/MainSection/MainSection.jsx';
import IntroSection from './components/IntroSection/introSection.jsx';
import TabSection from './components/TabSection/TabSection.jsx';

export default function App() {
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
        <TabSection />
        <IntroSection />
        <MainSection />
      </main>
    </>
  );
}
