import styled from 'styled-components';
import { BUTTON_SIZES } from '../../../../constants/elementsUI';

export type StyledButtonPropsType = {
  size: string;
};

export const handleButtonSize = (size: string): string => {
  switch (size) {
    case BUTTON_SIZES.xsmall:
      return 'fit-content';
    case BUTTON_SIZES.small:
      return '5.8125rem';
    case BUTTON_SIZES.medium:
      return '12.5rem';
    default:
      return 'fit-content';
  }
};

export const StyledButton = styled.button<StyledButtonPropsType>`
  appearance: none;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primaryButtonColor};
  border-radius: ${(props) => props.theme.secondary.borderRadiusBase};
  color: ${(props) => props.theme.colors.secondaryTextColor};
  cursor: pointer;
  display: inline-flex;
  font-family: ${(props) => props.theme.fonts.inter.style.fontFamily};
  font-size: 0.9375rem;
  font-weight: 500;
  justify-content: center;
  padding: ${(props) =>
    props.size === 'xsmall' ? '0.344rem 0.84rem' : '0.72rem 1rem'};
  text-decoration: none;
  width: ${({ size }) => handleButtonSize(size)};
  border: none;
  height: 31px;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryButtonColor};
    box-shadow: ${(props) => props.theme.secondary.boxShadowBase};
    text-decoration: none;
  }

  &:active {
    background-color: ${(props) => props.theme.colors.primaryButtonColor};
    outline: none;
  }

  .btn-text {
    padding: 0 0.6rem;
    font-size: 11px;
  }

  svg,
  g {
    fill: #fff;
  }
`;

export const StyledMessage = styled.p`
  font-size: 11px;
  color: ${(props) => props.theme.colors.primaryButtonColor};
  padding-top: 20px;
`;
