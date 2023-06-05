import { getSession } from 'next-auth/react';

const blog = ({ data }) => {
  return <div>blog- {data}</div>;
};

export default blog;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      data: session
        ? 'List of The most expensive books'
        : 'List of free E-books',
    },
  };
}
