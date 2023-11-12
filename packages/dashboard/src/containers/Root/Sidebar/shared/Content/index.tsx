import { BrandLogo } from './BrandLogo';
import { NavItem } from './NavItem';
import {
  PuzzlePieceIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  WrenchIcon,
} from '@heroicons/react/20/solid';
import { RootPagesPaths } from '@pages/constants';

export const SidebarContent = () => {
  return (
    <nav className="h-full flex flex-col bg-base-100 rounded-lg">
      <BrandLogo />
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
    </nav>
  );
};
