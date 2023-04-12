import { ElementType, FC } from 'react';

import cn from 'classnames';
import Link from 'next/link';

export interface BottomNavigationLinkProps {
  href: string;
  icon: ElementType;
}

export const BottomNavigationLink: FC<BottomNavigationLinkProps> = ({ href, icon: Icon }) => {
  return (
    <Link
      href={href}
      className={cn(
        'p-2.5 rounded-lg no-tap-highlight',
        'inline-flex items-center justify-center flex-1',
        'bg-transparent active:bg-gray-light',
        'transition-colors',
      )}
    >
      <Icon className="text-gray-dark h-5 w-5" />
    </Link>
  );
};
