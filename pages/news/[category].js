const newscat = ({ articles, category }) => {
  return (
    <>
      <div>
        <h1>Showing Categories for {category}</h1>

        {articles.map((article) => {
          return (
            <div key={article.id}>
              <h2>
                {article.id}. {article.category}
              </h2>
              <p>{article.year}</p>
              <p>{article.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default newscat;

export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;

  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}
