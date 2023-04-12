import { FC } from 'react';

import cn from 'classnames';
import { MdHome, MdExplore, MdOutlineBookmark } from 'react-icons/md';

import { BottomNavigationLink } from './BottomNavigationLink';

export const BottomNavigation: FC = () => {
  return (
    <nav
      className={cn(
        'flex gap-2.5 justify-center items-center',
        'fixed left-0 bottom-0',
        'w-full py-3.5 px-1.5 bg-white',
      )}
    >
      <BottomNavigationLink href="/" icon={MdHome} />
      <BottomNavigationLink href="/explore" icon={MdExplore} />
      <BottomNavigationLink href="/bookmarks" icon={MdOutlineBookmark} />
    </nav>
  );
};
