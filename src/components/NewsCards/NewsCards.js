import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Grow, Typography } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import NewsCard from '../NewsCard/NewsCard';
import useStyles from './styles';

const NewsCards = ({ articles }) => {
  const classes = useStyles();

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
            key={uuidv4()}
          >
            <NewsCard article={article} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

NewsCards.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default NewsCards;
