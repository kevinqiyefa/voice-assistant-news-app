import React, { forwardRef } from 'react';
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import cx from 'classnames';
import useStyles from './styles';

const placeholderImg =
  'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png';

const NewsCard = forwardRef(
  (
    {
      article: { description, publishedAt, source, title, url, urlToImage },
      i,
      activeArticle,
    },
    ref
  ) => {
    const classes = useStyles();

    const textTruncate = (str, length, ending = '...') => {
      if (str === null) return 'No description.';
      if (str.length > length) {
        return str.substring(0, length) + ending;
      } else {
        return str;
      }
    };

    return (
      <Card
        className={cx(classes.card, activeArticle === i ? classes.activeCard : null)}
        ref={ref}
      >
        <CardActionArea href={url} target="_blank">
          <CardMedia
            className={classes.media}
            image={urlToImage || placeholderImg}
            title={title}
          />
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="h2">
              {new Date(publishedAt).toDateString()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="h2">
              {source.name}
            </Typography>
          </div>
          <Typography className={classes.title} gutterBottom component="h2">
            {title}
          </Typography>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {textTruncate(description, 120)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" href={url}>
            Learn More
          </Button>
          <Typography variant="h5" color="textSecondary" component="h2">
            {i + 1}
          </Typography>
        </CardActions>
      </Card>
    );
  }
);

NewsCard.propTypes = {
  article: PropTypes.object.isRequired,
  activeArticle: PropTypes.number.isRequired,
};

export default NewsCard;
