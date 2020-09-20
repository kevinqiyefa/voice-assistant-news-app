import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { InstructionModal } from './components';
import aiLogo from './assets/images/ai-logo.gif';
import useStyles from './styles';

const ALAN_SDK_KEY = process.env.REACT_APP_ALAN_KEY;

function App() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [showInstructions, setShowInstructions] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: ALAN_SDK_KEY,
      onCommand: ({ command, articles }) => {
        switch (command) {
          case 'newHeadlines':
            setNewsArticles(articles);
            break;
          case 'showInstructions':
            setShowInstructions(true);
            break;
          case 'hideInstructions':
            setShowInstructions(false);
            break;
          default:
        }
      },
    });
  }, []);

  console.log(newsArticles);

  return (
    <main className={classes.appContainer}>
      <div className={classes.logoContainer}>
        <img src={aiLogo} alt="AI Logo" className={classes.aiLogo} />
        <InstructionModal isOpen={showInstructions} setIsOpen={setShowInstructions} />
      </div>
    </main>
  );
}

export default App;
