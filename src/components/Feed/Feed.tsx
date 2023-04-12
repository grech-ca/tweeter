import { FC } from 'react';

import { MdCached as RefreshIcon } from 'react-icons/md';

import { PostPrompt } from '@/components/PostPrompt';
import { PostPreview } from '@/components/PostPreview';

export const Feed: FC = () => {
  return (
    <div className="pt-3.5 px-4 pb-6">
      <PostPrompt />
      <div className="pt-7">
        <button className="flex space-x-2 items-center text-gray-dark text-sm mb-3">
          <RefreshIcon className="h-4 w-4" />
          <span>Daniel Jenson Retweeted</span>
        </button>
        <div>
          <PostPreview post={null} />
        </div>
      </div>
    </div>
  );
};
