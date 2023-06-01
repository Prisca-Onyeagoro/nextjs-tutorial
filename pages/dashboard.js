import { useState, useEffect } from 'react';

const dashboard = () => {
  const [isLoading, setisLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function DashboardDataDet() {
      const response = await fetch('http://localhost:4000/dashboard');
      const data = await response.json();
      setDashboardData(data);
      setisLoading(false);
    }
    DashboardDataDet();
  }, []);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <>
      <div>
        <h1>User DashBoard</h1>
        {dashboardData.map((dash) => {
          return (
            <>
              <div>
                <p>post - {dash.posts}</p>
                <p>likes - {dash.likes}</p>
                <p>followers - {dash.followers}</p>
                <p>following - {dash.following}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default dashboard;
