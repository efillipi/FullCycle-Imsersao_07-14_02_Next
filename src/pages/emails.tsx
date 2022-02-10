/* eslint-disable array-callback-return */
// @flow
import { NextPage } from 'next';
import * as React from 'react';
import useSWR from 'swr';
import { TitleComponent } from 'components/TitleComponent';
import { ButtonComponent } from 'components/ButtonComponent';
import api from '../services/api';

const fetcher = (url: string) => api.get(url).then((res) => (res.data === '' ? [] : res.data.emails));

const EmailsPage: NextPage = () => {
  const { data } = useSWR('mail-list', fetcher, { fallbackData: [] });

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const emailsTextarea = document.getElementById('emails') as HTMLTextAreaElement;
    await api.post('mail-list', { emails: emailsTextarea.value.split('\n') });
  }

  return (
    <div>
      <TitleComponent>Emails</TitleComponent>
      <div className="border-b" />
      <form onSubmit={onSubmit}>
        <textarea
          className="border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow"
          id="emails"
          rows={10}
          defaultValue={data.join('\n')}
          placeholder="Digite os e-mail separados por linha"
        />
        <ButtonComponent>
          Salvar
        </ButtonComponent>
      </form>

    </div>
  );
};

export default EmailsPage;
