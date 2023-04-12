import { FC } from 'react';

import { MdOutlineImage as AttachmentIcon, MdPublic as PublicIcon } from 'react-icons/md';

import { Avatar } from '../Avatar';

export const PostPrompt: FC = () => {
  return (
    <form className="bg-white rounded-xl pt-3 pb-3.5 px-4 drop-shadow-card">
      <label>
        <b className="font-semibold text-xs text-gray-label mb-2">Tweet something</b>
        <hr className="text-gray-light mb-2" />
        <div className="flex space-x-3 mb-6 w-full">
          <Avatar src="" />
          <textarea
            className="grow pt-2 resize-none outline-none"
            name=""
            id=""
            placeholder="What's happening?"
          />
        </div>
        <div className="flex text-primary space-x-3 items-center">
          <button>
            <AttachmentIcon className="w-5 h-5" />
          </button>
          <button className="text-xs font-medium inline-flex space-x-2 items-center">
            <PublicIcon className="w-5 h-5" />
            <span>Everyone can reply</span>
          </button>
          <div className="grow" />
          <button className="bg-primary text-white rounded py-2 px-6 text-center text-xs font-medium">
            Tweet
          </button>
        </div>
      </label>
    </form>
  );
};
