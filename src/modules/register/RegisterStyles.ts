import styled from 'styled-components';
import { device } from '@/src/common/theme/mediaQueries';

export const StyledInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .row-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;

    .form-row {
      margin: 0 0.625rem 1.25rem 0.625rem;
      min-width: 200px;
    }
  }

  @media (${device.mobileL}) {
    .row-wrapper {
      flex-direction: column;
      .form-row {
        margin: 0 0 1.25rem 0;
        min-width: auto;
      }
    }
  }
`;
