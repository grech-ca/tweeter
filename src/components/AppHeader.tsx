import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

// import logoDesktop from '@/assets/logo.svg?url';
import { Avatar } from '@/components/Avatar';

import logoMobile from '@/assets/logo-small.svg?url';

export const AppHeader: FC = () => {
  return (
    <header className="sticky inset-0 w-full py-5 px-4 h-fit drop-shadow-header bg-white">
      <nav className="flex justify-between items-center w-full h-fit">
        <Link href="/">
          <Image className="h-7" src={logoMobile} alt="Logo" />
        </Link>
        <Avatar size="sm" src="" />
      </nav>
    </header>
  );
};
