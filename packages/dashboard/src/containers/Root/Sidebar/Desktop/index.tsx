import { FC } from 'react';
import { SidebarContent } from '@containers/Root/Sidebar/shared/Content';

export const SidebarDesktop: FC = () => {
  return (
    <aside className="hidden md:block w-56 ml-4">
      <SidebarContent />
    </aside>
  );
};
