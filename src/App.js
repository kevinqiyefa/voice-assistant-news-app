import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { Typography } from '@material-ui/core';
import wordsToNumbers from 'words-to-numbers';
import { InstructionModal, NewsCards } from './components';
import aiLogo from './assets/images/ai-logo.gif';
import useStyles from './styles';

const ALAN_SDK_KEY = process.env.REACT_APP_ALAN_KEY;

function App() {
  const [newsArticles, setNewsArticles] = useState([]);
  
  const [showInstructions, setShowInstructions] = useState(false);
  const [activeArticle, setActiveArticle] = useState(-1);

  const classes = useStyles();

  const parsedNumber = (number) => {
    if (number.length > 2) {
      //wordsToNumbers fuzzy search cannot convert these words to number
      if (number === 'free') {
        return 3;
      } else if (number === 'fi') {
        return 5;
      }
      return wordsToNumbers(number, { fuzzy: true });
    } else {
      return +number;
    }
  };

  useEffect(() => {
    alanBtn({
      key: ALAN_SDK_KEY,
      onCommand: ({ command, articles, number }) => {
        switch (command) {
          case 'newHeadlines':
            setNewsArticles(articles);
            setActiveArticle(-1);
            break;
          case 'showInstructions':
            alanBtn().playText('Here are the instructions.');
            setShowInstructions(true);
            break;
          case 'hideInstructions':
            alanBtn().playText('Sure, hiding the instructions.');
            setShowInstructions(false);
            break;
          case 'highlight':
            setActiveArticle((prevA) => prevA + 1);
            break;
          case 'openArticle':
            const n = parsedNumber(number);

            const article = articles[n - 1];

            if (n <= articles.length && article) {
              window.open(article.url, '_blank');
              alanBtn().playText('Opening...');
            } else {
              if (articles.length < 1) {
                alanBtn().playText('Please search the news articles first...');
              } else {
                alanBtn().playText('Please try that again...');
              }
            }

            break;
          default:
        }
      },
    });
  }, []);

  return (
    <main className={classes.appContainer}>
      <div className={classes.logoContainer}>
        {newsArticles.length > 0 && (
          <div className={classes.infoContainer}>
            <div className={classes.card}>
              <Typography variant="h6">
                Try saying: <br />
                <br />
                Open article number [2]
              </Typography>
            </div>
            <div className={classes.card}>
              <Typography variant="h6">
                Try saying: <br />
                <br />
                Go back
              </Typography>
            </div>
          </div>
        )}
        <img src={aiLogo} alt="AI Logo" className={classes.aiLogo} />
      </div>

      <InstructionModal isOpen={showInstructions} setIsOpen={setShowInstructions} />

      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </main>
  );
}

export default App;
