'use client';

import { FC, ComponentProps } from 'react';

export interface PostActionProps extends ComponentProps<'button'> {}

export const PostAction: FC<PostActionProps> = ({ children, ...props }) => {
  return (
    <button {...props} className="inline-flex items-center justify-center">
      {children}
    </button>
  );
};
