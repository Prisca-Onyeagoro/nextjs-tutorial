import { useSession } from 'next-auth/react';
import React from 'react';

const index = () => {
  const { data: session } = useSession();
  return <>welcome, {session ? session.user.name : 'Login to continue'}</>;
};

export default index;

// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import Users from '../components/users';

// function Home({ user }) {
//   const router = useRouter();
//   const clickhandle = () => {
//     router.push('/product');
//   };
//   return (
//     <>
//       <h1>Home Page</h1>
//       <Link href="Blog">link to the blog page</Link>
//       <br />
//       <Link href="/product">link to the product page</Link>
//       <h1>
//         <button onClick={clickhandle}>Place Order</button>
//       </h1>
//       <h1>List of users</h1>
//       {user.map((user) => {
//         return (
//           <div key={user.id}>
//             <Users user={user} />
//           </div>
//         );
//       })}
//     </>
//   );
// }

// export default Home;

// export async function getStaticProps() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await response.json();
//   return {
//     props: {
//       user: data,
//     },
//   };
// }
