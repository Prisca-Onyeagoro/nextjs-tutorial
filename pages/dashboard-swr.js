import useSwr from 'swr';

const fetcher = async () => {
  const response = await fetch('http://localhost:4000/dashboard');
  const data = await response.json();
  return data;
};

const dashboardswr = () => {
  const { data, error } = useSwr('dashboard', fetcher);

  if (error) return 'Error fetching details, please check your data connection';
  if (!data)
    return 'The details you are tring to fecth are not available trt again later!!!';

  return (
    <>
      <div>
        <h1>User DashBoard</h1>
        {data.map((data) => {
          return (
            <>
              <div>
                <p>post - {data.posts}</p>
                <p>likes - {data.likes}</p>
                <p>followers - {data.followers}</p>
                <p>following - {data.following}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default dashboardswr;
