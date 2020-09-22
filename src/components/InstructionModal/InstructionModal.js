import React from 'react';
import { Typography, Divider, Chip } from '@material-ui/core';
import SimpleModal from '@material-ui/core/Modal';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import useStyles from './styles';

const instructionData = {
  categories: [
    'Business',
    'Entertainment',
    'General',
    'Health',
    'Science',
    'Sports',
    'Technology',
  ],
  terms: ['Donald Trump', 'Bitcoin', 'Coronavirus', 'Smartphones'],
  sources: ['CNN', 'Wired', 'BBC News', 'Time', 'IGN', 'Buzzfeed', 'ABC News'],
};

const InstructionModal = ({ isOpen, setIsOpen }) => {
  const classes = useStyles();

  const { categories, terms, sources } = instructionData;

  return (
    <SimpleModal open={isOpen} onClose={() => setIsOpen(false)}>
      <div className={classes.paper}>
        <Typography variant="h4">Instructions</Typography>
        <Divider />
        <div className={classes.infoContainer}>
          <Typography variant="h5">News by Categories</Typography>
          <div className={classes.chipContainer}>
            {categories.map((category) => (
              <Chip
                label={category}
                color="primary"
                className={classes.chip}
                key={uuidv4()}
              />
            ))}
          </div>
        </div>
        <Typography variant="body1" className={classes.trySaying}>
          Try saying: &quot;Give me the latest{' '}
          <strong>
            <em>Business</em>
          </strong>{' '}
          news&quot;
        </Typography>
        <Divider />
        <div className={classes.infoContainer}>
          <Typography variant="h5">News by Terms</Typography>
          <div className={classes.chipContainer}>
            {terms.map((term) => (
              <Chip
                label={term}
                color="primary"
                className={classes.chip}
                key={uuidv4()}
              />
            ))}
            <Chip label="...and more" className={classes.chip} />
          </div>
        </div>
        <Typography variant="body1" className={classes.trySaying}>
          Try saying: &quot;What&apos;s up with{' '}
          <strong>
            <em>Smartphones</em>
          </strong>
          &quot;
        </Typography>
        <Divider />
        <div className={classes.infoContainer}>
          <Typography variant="h5">News by Sources</Typography>
          <div className={classes.chipContainer}>
            {sources.map((source) => (
              <Chip
                label={source}
                color="primary"
                className={classes.chip}
                key={uuidv4()}
              />
            ))}
            <Chip label="...and more" className={classes.chip} />
          </div>
        </div>
        <Typography variant="body1" className={classes.trySaying}>
          Try saying: &quot;Give me the news from{' '}
          <strong>
            <em>CNN</em>
          </strong>
          &quot;
        </Typography>
      </div>
    </SimpleModal>
  );
};

InstructionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default InstructionModal;
