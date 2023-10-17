import { FC } from 'react';
import avatar from './assets/img.png';

export const Header: FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white my-4 px-4 mr-4 rounded-md p-2">
      <div className="w-full flex justify-end">
        <div className="flex items-center gap-2">
          <span className="text-sm font-light text-slate-500">
            Evgeny Afanasyev
          </span>
          <span>
            <img
              className="w-8 h-8 p-1 rounded-full "
              src={avatar}
              alt="Bordered avatar"
            />
          </span>
        </div>
      </div>
    </header>
  );
};
