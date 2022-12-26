import React from 'react';
import Image from 'next/image';
import Success from '/public/assets/images/svg/Success.svg';

// types
import { ButtonPrimaryPropsType } from './ButtonPrimaryTypes';
// styles
import { StyledButton, StyledMessage } from './buttonPrimaryStyles';

const ButtonPrimary: React.FC<ButtonPrimaryPropsType> = ({
  type = 'button',
  text,
  action,
  size,
  disabled,
  isSubmitted,
  successMessage,
}) => (
  <>
    <StyledButton type={type} disabled={disabled} onClick={action} size={size}>
      {isSubmitted ? (
        <Image
          alt="success"
          src={Success}
          quality={100}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      ) : (
        <span className="btn-text"> {text}</span>
      )}
    </StyledButton>
    {isSubmitted && successMessage && (
      <StyledMessage>{successMessage}</StyledMessage>
    )}
  </>
);

export default ButtonPrimary;
