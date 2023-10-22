import { FC, useContext } from 'react';
import avatar from './assets/img.png';
import { AuthContext } from '@modules/AuthProvider/AuthContext';

export const Header: FC = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <header className="sticky top-0 bg-white my-4 px-4 mr-4 rounded-md p-2">
      <div className="w-full flex justify-end">
        <div className="flex items-center gap-2">
          <span className="text-sm font-light text-slate-500">
            {user?.firstname} {user?.lastname}
          </span>
          <div className="popover cursor-pointer">
            <img
              tabIndex={0}
              className="w-8 h-8 p-1 rounded-full popover-trigger"
              src={avatar}
              alt="Bordered avatar"
            />
            <button
              tabIndex={0}
              onClick={logout}
              className="bg-white popover-content popover-bottom-left btn btn-outline-error btn-xs w-16 p-x-3 p-y-2"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
