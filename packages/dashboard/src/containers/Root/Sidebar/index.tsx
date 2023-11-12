import { FC } from 'react';

import { SidebarMobile } from './Mobile';
import { SidebarDesktop } from './Desktop';

export const Sidebar: FC = () => {
  return (
    <>
      <SidebarMobile />
      <SidebarDesktop />
    </>
  );
};
