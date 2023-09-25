import React from 'react';

import Header from '~/components/Header';
import UserSearchResults from '~/components/UserSearchResults';
import useStore from '~/store/useStore';

export const Page: React.FC = () => {
  const { touched } = useStore();
  return (
    <article className="pb-4">
      <Header />
      {touched && (
        <>
          <hr className="w-full border-b-1" />
          <section className="max-w-md m-auto">
            <UserSearchResults />
          </section>
        </>
      )}
    </article>
  );
};

export default Page;
