import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

function Navbar() {
  const { data: session, loading } = useSession();
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1>
      <ul className={`main-nav`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboards">Dashboard</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>

        {!session && !loading && (
          <>
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault, signIn();
                }}
              >
                Sign In
              </button>
            </li>
          </>
        )}
        {session && (
          <>
            <li>
              <button onClick={() => signOut()}>Sign Out</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
