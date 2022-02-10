// @flow
import { ITweet } from 'interfaces/ITweet';
import Image from 'next/image';
import * as React from 'react';

type Props = {
  tweet: ITweet
};

export const TweetComponent: React.FunctionComponent<Props> = (props) => {
  const { tweet } = props;
  return (
    <>
      <div className="border-b" />
      <div className="flex p-4 pb-0">
        <div className="flex items-center">
          <div className="h-10 w-10 relative">
            <Image
              className="rounded-full"
              src={tweet.User.BiggerProfileImageURL}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="ml-3">
            <p className="text-base leading-6 fon text-black">
              {tweet.User.Name}
              <span className="text-sm font-normal text-gray-600">
                @
                {tweet.User.ScreenName}
                {' '}
                .
                {' '}
                {tweet.CreatedAt}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="pl-16">
        <p className="text-black">{tweet.Text}</p>
      </div>
      <div className="mb-4" />
    </>
  );
};
