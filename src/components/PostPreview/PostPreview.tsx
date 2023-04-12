'use client';

import { FC } from 'react';

import Image from 'next/image';
import {
  MdOutlineModeComment as CommentIcon,
  MdCached as RetweetIcon,
  MdFavoriteBorder as LikeIcon,
  MdBookmarkBorder as BookmarkIcon,
  MdOutlineImage as AttachmentIcon,
} from 'react-icons/md';

import { Avatar } from '@/components/Avatar';

import { PostAction } from './PostAction';

export interface PostPreviewProps {
  post: any;
}

export const PostPreview: FC<PostPreviewProps> = ({ post }) => {
  const onComment = () => {
    console.log('onComment');
  };
  const onRetweet = () => {
    console.log('onRetweet');
  };
  const onLike = () => {
    console.log('onLike');
  };
  const onBookmark = () => {
    console.log('onBookmark');
  };

  return (
    <div className="flex flex-col p-5 bg-white rounded-lg drop-shadow-card">
      <div className="flex space-x-4">
        <Avatar src="" />
        <div className="flex flex-col space-y-2">
          <span>Peyton Lyons</span>
          <span>24 August at 20:43 </span>
        </div>
      </div>
      <p>Traveling – it leaves you speechless, then turns you into a storyteller.</p>
      <Image
        className="w-full object-contain h-fit rounded-lg mb-2"
        src="https://picsum.photos/310/190"
        alt="Post attachment"
        width={310}
        height={190}
      />
      <div className="py-1.5 px-1 flex items-center justify-end space-x-4">
        <span className="text-xs">449 Comments</span>
        <span className="text-xs">59k Reviews</span>
        <span className="text-xs">234 Saved</span>
      </div>
      <hr className="text-gray-light" />
      <div className="flex items-center space-x-2.5">
        <PostAction onClick={onComment}>
          <CommentIcon />
        </PostAction>
        <PostAction onClick={onRetweet}>
          <RetweetIcon />
        </PostAction>
        <PostAction onClick={onLike}>
          <LikeIcon />
        </PostAction>
        <PostAction onClick={onBookmark}>
          <BookmarkIcon />
        </PostAction>
      </div>
      <hr className="text-gray-light" />
      <div>
        <Avatar src="" />
        <label>
          <textarea cols={30} rows={10}></textarea>
          <AttachmentIcon />
        </label>
      </div>
    </div>
  );
};
