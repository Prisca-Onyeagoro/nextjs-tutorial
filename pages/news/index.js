const news = ({ news }) => {
  return (
    <>
      <h1>News Of The Day</h1>
      {news.map((news) => {
        return (
          <>
            <div key={news.id}>
              <h1>
                {news.id}. {news.category} | {news.year}
              </h1>
            </div>
          </>
        );
      })}
    </>
  );
};

export default news;

export async function getServerSideProps() {
  const response = await fetch('http://localhost:4000/news');
  const data = await response.json();

  return {
    props: {
      news: data,
    },
  };
}
