import React, { useState } from 'react';
import { Header, Body } from './components';
import './App.css';

function App() {
  const [keyword, setKeyword] = useState('');
  const [videos, setVideos] = useState([]);

  return (
    <div className="App">
      <Header setVideos={setVideos} setKeyword={setKeyword} />
      <Body videos={videos} keyword={keyword} />
    </div>
  );
}

export default App;