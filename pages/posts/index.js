import Link from 'next/link';

const postlist = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h1>
                {post.id}. {post.title}
              </h1>
              <hr />
            </Link>
          </div>
        );
      })}
    </>
  );
};
export default postlist;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}
