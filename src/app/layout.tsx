import { FC, PropsWithChildren } from 'react';

import { Poppins } from 'next/font/google';

import './globals.css';
import { AppHeader } from '@/components/AppHeader';
import { BottomNavigation } from '@/components/BottomNavigation';

export const metadata = {
  title: 'Tweeter',
  description: 'Made for devchallenges.io by Mikhail Grechka',
};

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-gray-light" style={poppins.style}>
        <AppHeader />
        <main>{children}</main>
        <BottomNavigation />
      </body>
    </html>
  );
};

export default RootLayout;
