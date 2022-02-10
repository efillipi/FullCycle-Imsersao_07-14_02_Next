// @flow
import * as React from 'react';

type Props = {
  children?: React.ReactNode
};

export const TitleComponents: React.FunctionComponent<Props> = (props) => {
  return (
    <h1 className="text-gray-900 text-5xl leading-normal">{props.children}</h1>
  );
};
