import React from 'react';

import { FormTitle } from '@/src/common/components';

//types
import { FormWrapperTypesPropsType } from './FormWrapperTypes';

// styles
import { StyledFormWrapper } from './formWrapperStyles';
const FormWrapper: React.FC<FormWrapperTypesPropsType> = ({
  children,
  title,
}) => (
  <>
    <StyledFormWrapper>
      {title && (
        <div className="title-wrapper">
          <FormTitle title={title} />
        </div>
      )}
      <div className="form-wrapper">{children}</div>
    </StyledFormWrapper>
  </>
);

export default FormWrapper;
