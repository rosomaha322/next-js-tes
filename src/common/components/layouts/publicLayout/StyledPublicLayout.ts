import styled from 'styled-components';

export const StyledLayout = styled.div`
  background-color: ${(props) => props.theme.colors.bgLight};
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .page-content {
    padding-top: 1.9rem;
  }
`;
