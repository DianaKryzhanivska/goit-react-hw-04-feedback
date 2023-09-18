import React from 'react';
import { Button, ButtonItem, ButtonList } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ButtonList>
        {options.map(option => (
          <ButtonItem key={option}>
            {' '}
            <Button type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </Button>
          </ButtonItem>
        ))}
      </ButtonList>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
