import { FC } from 'react';

import { NextPage } from 'next';

import { Feed } from '@/components/Feed';

const HomePage: FC<NextPage> = () => {
  return (
    <div>
      <Feed />
    </div>
  );
};

export default HomePage;
