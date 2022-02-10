/* eslint-disable array-callback-return */
// @flow
import { NextPage } from 'next';
import * as React from 'react';
import useSWR from 'swr';
import { TitleComponent } from 'components/TitleComponent';
import Image from 'next/image';
import { TweetComponent } from 'components/TweetComponent';
import api from '../services/api';
import { ITweet } from '../interfaces/ITweet';

const fetcher = (url: string) => api.get(url).then((res) => res.data);

const TweetsPage: NextPage = () => {
  const { data: tweets } = useSWR<ITweet[]>('tweets', fetcher);

  console.log(tweets);

  return (
    <div>
      <TitleComponent>Tweets</TitleComponent>
      {
        tweets?.map((tweet: ITweet) => (
          <TweetComponent key={tweet.CurrentUserRetweetId} tweet={tweet} />
        ))
      }
    </div>
  );
};

export default TweetsPage;
