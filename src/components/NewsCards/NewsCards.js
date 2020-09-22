import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, Grow, Typography } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import NewsCard from '../NewsCard/NewsCard';
import useStyles from './styles';

const infoCards = [
  { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
  {
    color: '#1565c0',
    title: 'News by Categories',
    info: 'Business, Entertainment, General, Health, Science, Sports, Technology',
    text: 'Give me the latest Technology news',
  },
  {
    color: '#4527a0',
    title: 'News by Terms',
    info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...',
    text: "What's up with Smartphones",
  },
  {
    color: '#283593',
    title: 'News by Sources',
    info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...',
    text: 'Give me the news from CNN',
  },
];

const scrollToRef = (ref) => window.scrollTo(0, ref.offsetTop - 50);

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();
  const cardRefs = useRef(Array(articles.length).fill(null));

  useEffect(() => {
    let curRef = cardRefs.current[activeArticle];
    if (curRef) {
      scrollToRef(curRef);
    }
  }, [activeArticle]);

  if (!articles.length) {
    return (
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
              key={uuidv4()}
            >
              <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                <Typography variant="h5" component="h5">
                  {infoCard.title}
                </Typography>
                {infoCard.info ? (
                  <Typography variant="body1">
                    <strong>{infoCard.title.split(' ')[2]}</strong>: <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant="subtitle1">
                  Try saying: <br /> <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{ display: 'flex' }}
            className={classes.newsCard}
            key={uuidv4()}
          >
            <NewsCard
              article={article}
              i={i}
              activeArticle={activeArticle}
              ref={(el) => (cardRefs.current[i] = el)}
            />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

NewsCards.propTypes = {
  articles: PropTypes.array.isRequired,
  activeArticle: PropTypes.number.isRequired,
};

export default NewsCards;
