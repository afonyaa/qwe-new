import { FC } from 'react';
import { NavItemProps } from './interfaces';
import { NavLink } from 'react-router-dom';

export const NavItem: FC<NavItemProps> = ({ name, link, icon }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `${
          isActive
            ? 'text-base-100 bg-primary-focus opacity-70'
            : 'text-info-content'
        } flex items-center text-sm font-medium gap-x-2 rounded-md px-3 py-2`
      }
    >
      <span className="w-4">{icon}</span>
      <span>{name}</span>
    </NavLink>
  );
};
