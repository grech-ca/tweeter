import { FC } from 'react';

import Image from 'next/image';
import cn from 'classnames';

export type AvatarSize = 'sm' | 'md' | 'lg';

export interface AvatarProps {
  size?: AvatarSize;
  src: string;
}

const TEMP_AVATAR = 'https://avatars.githubusercontent.com/u/54347665?v=4';

const avatarSizes: Record<AvatarSize, string> = {
  lg: 'h-[116px] md:h-[152px]',
  md: 'h-10',
  sm: 'h-8',
};

export const Avatar: FC<AvatarProps> = ({ size = 'md', src }) => {
  return (
    <div
      className={cn(
        avatarSizes[size],
        'relative aspect-square rounded-lg bg-gray-300 overflow-hidden',
      )}
    >
      <Image fill className="object-cover" src={TEMP_AVATAR || src} alt="Avatar" />
    </div>
  );
};
