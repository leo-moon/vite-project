import './TabSection.css';
import { useState } from 'react';

export default function TabSection() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div>
      <div className="tab-buttons">
        <button
          className={activeTab === 'tab1' ? 'active' : ''}
          onClick={() => setActiveTab('tab1')}
        >
          Tab 1
        </button>
        <button
          className={activeTab === 'tab2' ? 'active' : ''}
          onClick={() => setActiveTab('tab2')}
        >
          Tab 2
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'tab1' && <p>Content for Tab 1</p>}
        {activeTab === 'tab2' && <p>Content for Tab 2</p>}
      </div>
    </div>
  );
}
