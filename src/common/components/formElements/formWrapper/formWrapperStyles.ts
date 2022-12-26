import styled from 'styled-components';
import { device } from '@/src/common/theme/mediaQueries';

export const StyledFormWrapper = styled.div`
  max-width: 500px;
  justify-content: center;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  .title-wrapper {
    margin: 130px 0 50px 0;
  }

  .form-wrapper {
    background-color: ${(props) => props.theme.colors.secondaryTextColor};
    padding: 35px 40px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
  }

  @media (${device.mobileL}) {
    .title-wrapper {
      margin: 80px 0 30px 0;
    }

    max-width: 280px;
  }
`;
