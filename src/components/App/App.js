import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import './App.css';

const ALAN_SDK_KEY = process.env.REACT_APP_ALAN_KEY;

function App() {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: ALAN_SDK_KEY,
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  console.log(newsArticles);

  return <div className="App">App</div>;
}

export default App;
