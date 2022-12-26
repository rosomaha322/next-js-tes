import styled from 'styled-components';
import { device } from '@/src/common/theme/mediaQueries';

export const StyledFormTitle = styled.h1`
  color: ${(props) => props.theme.colors.secondaryTextColor};

  @media (${device.mobileL}) {
    font-size: 36px;
  }
`;
