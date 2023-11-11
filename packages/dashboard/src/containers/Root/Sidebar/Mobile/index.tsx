import { FC, useEffect, useState } from 'react';
import { SidebarContent } from '@containers/Root/Sidebar/shared/Content';
import { Bars4Icon } from '@heroicons/react/20/solid';
import { useLocation } from 'react-router-dom';
export const SidebarMobile: FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="block md:hidden fixed z-50 left-8 top-6"
        >
          <Bars4Icon height={30} className="text-base-content" />
        </button>
      )}
      <aside
        className={`block md:hidden w-56 fixed bg-white rounded-r-lg -mt-4 h-full z-20 shadow-lg transition-all ${
          isOpen ? 'left-0' : '-left-60'
        }`}
      >
        <SidebarContent />
      </aside>
      {isOpen && (
        <div
          className="block md:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};
