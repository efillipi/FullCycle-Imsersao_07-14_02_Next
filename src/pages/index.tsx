// @flow
// fsc
import { GetServerSideProps, NextPage } from 'next';
import * as React from 'react';

type Props = {
  name: string
};

const PaginaPage: NextPage<Props> = (props) => {
  return (
    <h1>
      Hello Edney

      {props.name}
    </h1>
  );
};

export const getServerSideProps: GetServerSideProps = async (conext) => {
  return {
    props: {
      name: 'Full Cycle',
    },
  };
};

export default PaginaPage;
