import { useEffect, useState } from 'react';
import { useSession, getSession, signIn } from 'next-auth/react';

const dashboards = () => {
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();

  useEffect(() => {
    const secure = async (req, res) => {
      const session = await getSession({ req });
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    secure();
  });

  if (loading) {
    return <h2>Loading....</h2>;
  }
  return (
    <>
      <h3>welcome {session.user.name}</h3>
    </>
  );
};

export default dashboards;
