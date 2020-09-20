import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

const NewsCard = ({ article }) => {
  const classes = useStyles();
  return <div>NewsCard</div>;
};

NewsCard.propTypes = {
  article: PropTypes.object.isRequired,
};

export default NewsCard;
