import React from 'react';
import { StyledFormTitle } from './formTitleStyles';

export type FormTitlePropsType = {
  title: string;
};

const FormTitle: React.FC<FormTitlePropsType> = ({ title }) => {
  return <StyledFormTitle>{title}</StyledFormTitle>;
};

export default FormTitle;
