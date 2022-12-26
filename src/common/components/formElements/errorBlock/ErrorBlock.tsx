import React from 'react';
import { StyledError } from './errorBlockStyles';

const ErrorBlock: React.FC<{ error: string }> = ({ error }) => {
  return <StyledError>{error}</StyledError>;
};

export default ErrorBlock;
