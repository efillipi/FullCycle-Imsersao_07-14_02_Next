// @flow
import { NextPage } from 'next';
import * as React from 'react';
import useSWR from 'swr';
import api from '../services/api';
import { ITweet } from '../interfaces/ITweet';

const fetcher = (url: string) => api.get(url).then((res) => res.data);

const TweetsPage: NextPage = () => {
  const { data: tweets } = useSWR<ITweet[]>('tweets', fetcher);

  return (
    <div>
      <h1 className="text-yellow-500">Tweets</h1>

      <h4>Listagem Tweets</h4>
    </div>
  );
};

export default TweetsPage;
