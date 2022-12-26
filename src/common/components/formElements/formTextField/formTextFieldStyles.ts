import styled, { css } from 'styled-components';

export type TextFieldPropsType = {
  errorStyles: boolean;
  hasValue: boolean;
};

const effectMix = css<TextFieldPropsType>`
  box-shadow: ${(props) =>
    props.errorStyles ? 'none' : `0 2px 21px 0 ${props.theme.colors.grey}`};
`;

const transformMix = css`
  transform: translate(10px, -4px) scale(0.65);
  padding: 0 0.3rem;
`;

export const StyledInput = styled.input<TextFieldPropsType>`
  outline: 0;
  border: 1px solid #ddd;
  appearance: none;
  background-color: ${(props) =>
    props.errorStyles || props.hasValue
      ? props.theme.colors.secondaryTextColor
      : props.theme.colors.grey};
  border: 1px solid
    ${(props) =>
      props.errorStyles ? props.theme.colors.error : props.theme.colors.grey};
  border-radius: ${(props) => props.theme.secondary.borderRadiusBase};
  color: ${(props) => props.theme.colors.primaryTextColor};
  font-size: 0.75rem;
  padding: 0.4065rem 1rem;
  line-height: 15px;
  font-weight: 400;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    border: 1px solid
      ${(props) =>
        props.errorStyles ? props.theme.colors.error : props.theme.colors.blue};
    -webkit-text-fill-color: ${(props) => props.theme.colors.baseFont};
    transition: background-color 5000s ease-in-out 0s;
  }

  ::placeholder {
    color: ${(props) => props.theme.inputPlaceholder};
    opacity: 1;
  }

  :hover {
    ${effectMix}
  }

  :focus {
    background-color: ${(props) => props.theme.colors.secondaryTextColor};
    border-color: ${(props) => props.theme.colors.blue};
    ${effectMix}
  }
`;

export const StyledFloatedLabel = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    color: ${(props) => props.theme.colors.primaryTextColor};
    font-size: 0.75rem;
    padding: 0 0.6rem;
    color: #999;
    pointer-events: none;
    position: absolute;
    transform: translate(0, 9px) scale(1);
    transform-origin: top left;
    transition: all 0.2s ease-out;
    display: flex;
    align-items: center;
    font-weight: 400;
  }

  :focus-within label {
    background-color: ${(props) => props.theme.colors.secondaryTextColor};
    ${transformMix}
  }

  .active {
    ${transformMix}
    background-color: ${(props) => props.theme.colors.secondaryTextColor};
  }
`;
