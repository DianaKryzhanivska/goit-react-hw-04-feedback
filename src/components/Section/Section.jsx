import React from 'react';
import { StyledSection, Title } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <>
      <StyledSection>
        <Title>{title}</Title>
        {children}
      </StyledSection>
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};
