import { FC, PropsWithChildren } from 'react';

import './globals.css';

export const metadata = {
  title: 'Tweeter',
  description: 'Made for devchallenges.io by Mikhail Grechka',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
