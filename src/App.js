import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { Typography } from '@material-ui/core';
import { InstructionModal, NewsCards } from './components';
import aiLogo from './assets/images/ai-logo.gif';
import useStyles from './styles';

const ALAN_SDK_KEY = process.env.REACT_APP_ALAN_KEY;

function App() {
  const [newsArticles, setNewsArticles] = useState([]);
  // const [newsArticles, setNewsArticles] = useState([
  //   {
  //     source: {
  //       id: 'cnn',
  //       name: 'CNN',
  //     },
  //     author: 'Brian Lowry, CNN',
  //     title:
  //       "Emmys 2020: Jimmy Kimmel hosts an audience-free awards, as 'Watchmen' and 'Schitt's Creek' rule - CNN",
  //     description:
  //       'The Emmy Awards went on Sunday, with Jimmy Kimmel noting at the outset that while an awards show might "seem frivolous and unnecessary" in the middle of a pandemic, "Right now, we need fun."',
  //     url: 'https://www.cnn.com/2020/09/20/entertainment/2020-emmy-highlights/index.html',
  //     urlToImage:
  //       'https://cdn.cnn.com/cnnnext/dam/assets/200920203011-04-emmys-2020-0920-super-tease.jpg',
  //     publishedAt: '2020-09-21T02:22:00Z',
  //     content:
  //       '(CNN)The Emmy Awards went on Sunday, with Jimmy Kimmel noting at the outset that while an awards show might "seem frivolous and unnecessary" in the middle of a pandemic, "Right now, we need fun."\r\nTh… [+3268 chars]',
  //   },
  //   {
  //     source: {
  //       id: 'google-news',
  //       name: 'Google News',
  //     },
  //     author: null,
  //     title:
  //       'WANDAVISION Trailer | NEW (2020) Disney+ Marvel Superhero Series - JoBlo Movie Trailers',
  //     description: null,
  //     url:
  //       'https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9VVM2M0pmTDF0SVHSAQA?oc=5',
  //     urlToImage: null,
  //     publishedAt: '2020-09-21T01:06:34Z',
  //     content: null,
  //   },
  //   {
  //     source: {
  //       id: 'politico',
  //       name: 'Politico',
  //     },
  //     author: 'Christopher Cadelago',
  //     title: 'Liberals want blood. Joe Biden is sticking with bipartisanship. - POLITICO',
  //     description:
  //       'The Democratic nominee shrugged off calls within his party to embrace the kind of pure power tactics Republicans are adopting.',
  //     url:
  //       'https://www.politico.com/news/2020/09/20/joe-biden-liberals-bipartisanship-419127',
  //     urlToImage:
  //       'https://static.politico.com/e4/7a/68382f034fe696a10e77f8bc4461/200920-biden-ap-773.jpg',
  //     publishedAt: '2020-09-21T00:57:00Z',
  //     content:
  //       'So its not surprising that Biden skipped over progressive wish list items like court packing, something he said more than a year ago would cause Democrats to rue that day. While some Democrats want h… [+5889 chars]',
  //   },
  // ]);
  const [showInstructions, setShowInstructions] = useState(false);
  const [activeArticle, setActiveArticle] = useState(-1);

  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: ALAN_SDK_KEY,
      onCommand: ({ command, articles }) => {
        switch (command) {
          case 'newHeadlines':
            setNewsArticles(articles);
            setActiveArticle(-1);
            break;
          case 'showInstructions':
            setShowInstructions(true);
            break;
          case 'hideInstructions':
            setShowInstructions(false);
            break;
          case 'highlight':
            setActiveArticle((prevA) => prevA + 1);
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
