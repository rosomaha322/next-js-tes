import React from 'react';
// types
import { PublicLayoutPropsType } from './PublicLayoutTypes';
// styles
import { StyledLayout } from './StyledPublicLayout';

const Layout: React.FC<PublicLayoutPropsType> = ({ children }) => (
  <StyledLayout>
    {/* TODO: ADD HEADER, FOOTER, NAV etc here */}
    <main className="page-content">{children}</main>
  </StyledLayout>
);

export default Layout;
