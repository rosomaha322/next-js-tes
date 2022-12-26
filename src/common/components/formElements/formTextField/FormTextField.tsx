import React, { useMemo } from 'react';
import Image from 'next/image';
import Check from '/public/assets/images/svg/Check.svg';
import Cross from '/public/assets/images/svg/Cross.svg';

// type
import { FormTextFieldPropsType } from './FormTextFieldTypes';
// styles
import { StyledInput, StyledFloatedLabel } from './formTextFieldStyles';

const FormTextField: React.FC<FormTextFieldPropsType> = ({
  type,
  field,
  error,
  disabled,
  placeholder,
  ...props
}) => {
  const { value } = field;

  const isActive = useMemo(() => !!value, [value]);

  const src = useMemo(() => {
    let src = null;
    if (error) {
      src = Cross;
    } else if (value) {
      src = Check;
    }
    return src;
  }, [error, value]);

  return (
    <StyledFloatedLabel>
      <StyledInput
        {...field}
        {...props}
        type={type}
        errorStyles={!!error}
        hasValue={!!src}
        disabled={!!disabled}
      />
      {placeholder && (
        <label className={isActive ? 'active' : ''} htmlFor="email">
          {src && (
            <Image
              alt="Mountains"
              src={src}
              quality={100}
              width={17}
              style={{
                maxWidth: '100%',
                height: 'auto',
                paddingRight: '5px',
              }}
            />
          )}

          {placeholder}
        </label>
      )}
    </StyledFloatedLabel>
  );
};
export default FormTextField;
