import styled from 'styled-components';

export const StyledLoader = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  bottom: 0;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100% !important;
  z-index: 999;

  .loader {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .loader:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${(props) => props.theme.colors.primaryButtonColor};
    border-color: ${(props) => props.theme.colors.primaryButtonColor}
      transparent ${(props) => props.theme.colors.primaryButtonColor}
      transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
