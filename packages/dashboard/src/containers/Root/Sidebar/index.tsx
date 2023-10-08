import { FC } from 'react';
import { Brand } from '@containers/Root/Sidebar/Brand';
import { Copyright } from '@containers/Root/Sidebar/Copyright';
import { NavItem } from '@containers/Root/Sidebar/NavItem';
import {
  PuzzlePieceIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  WrenchIcon,
} from '@heroicons/react/20/solid';
import { RootPagesPaths } from '@/pages/constants';

export const Sidebar: FC = () => {
  return (
    <aside className="w-56 bg-white m-4 rounded-lg shadow-sm">
      <nav className="h-full flex flex-col">
        <Brand />
        {/* Элементы навигации */}
        <ul className="flex-1 flex flex-col gap-1 mt-2 px-5">
          <NavItem
            name={'Dashboard'}
            icon={<RocketLaunchIcon />}
            link={RootPagesPaths.dashboard}
          />
          <NavItem
            name={'My quizzes'}
            icon={<PuzzlePieceIcon />}
            link={RootPagesPaths.quizzes}
          />
          <NavItem
            name={'My classes'}
            icon={<UserGroupIcon />}
            link={RootPagesPaths.classes}
          />
          <hr className="my-3" />
          <NavItem
            name={'Profile Settings'}
            icon={<WrenchIcon />}
            link={RootPagesPaths.profileSettings}
          />
        </ul>
        <footer className="p-3 flex flex-col items-center justify-center text-[8px] text-slate-500">
          <Copyright />
        </footer>
      </nav>
    </aside>
  );
};
