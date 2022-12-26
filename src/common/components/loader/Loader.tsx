import React from 'react';
import { LoaderPropsType } from './LoaderTypes';
// styles
import { StyledLoader } from './loaderStyles';

const Loader: LoaderPropsType = (props) => {
  const { show = false } = props;
  return (
    <>
      {show ? (
        <StyledLoader data-testid="loader">
          <div className="loader"></div>
        </StyledLoader>
      ) : null}
    </>
  );
};

export default Loader;
