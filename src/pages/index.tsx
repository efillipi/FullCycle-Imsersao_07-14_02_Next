// @flow
// fsc
import { TitleComponent } from 'components/TitleComponent';
import { GetServerSideProps, NextPage } from 'next';
import * as React from 'react';

type Props = {
  name: string
};

const PaginaPage: NextPage<Props> = (props) => {
  return (
    <TitleComponent>Edney Fillipi {props.name}</TitleComponent>
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
