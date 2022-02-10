/* eslint-disable array-callback-return */
// @flow
import { NextPage } from 'next';
import * as React from 'react';
import useSWR from 'swr';
import { TitleComponents } from 'components/TitleComponents';
import Image from 'next/image';
import api from '../services/api';
import { ITweet } from '../interfaces/ITweet';

const fetcher = (url: string) => api.get(url).then((res) => res.data);

const TweetsPage: NextPage = () => {
  const { data: tweets } = useSWR<ITweet[]>('tweets', fetcher);

  console.log(tweets);

  return (
    <div>
      <TitleComponents>Tweets</TitleComponents>
      {
        tweets?.map((tweet: ITweet) => (
          <>
            <div className="border-b" />
            <div className="flex p-4 pb-0">
              <div key={tweet.CurrentUserRetweetId} className="flex items-center">
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
                      .
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
        ))
      }
    </div>
  );
};

export default TweetsPage;
