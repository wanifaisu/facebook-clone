import React from 'react';
import Feed from '../Feed';
import Sidebar from '../Sidebar';
import Widgets from '../Widgets';
import Header from '../Header';
import './style.css';
export default function Home() {
  return (
    <div>
      <Header />
      <div className='app__body'>
        <div className='mobileView'>
          <Sidebar />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Feed />
        </div>
        <div className='mobileView'>
          <Widgets />
        </div>
      </div>
    </div>
  );
}
