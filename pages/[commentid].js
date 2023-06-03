import React from 'react';
import { comments } from '../data/comments';

const commente = ({ data }) => {
  return <div>{data.text}</div>;
};

export default commente;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentid: '1' } },
      { params: { commentid: '2' } },
      { params: { commentid: '3' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { commentid } = params;
  const data = comments.find((comment) => comment.id === parseInt(commentid));

  return {
    props: {
      data,
    },
  };
}
