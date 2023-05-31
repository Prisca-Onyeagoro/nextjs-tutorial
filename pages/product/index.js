import Link from 'next/link';

function productlist({ products }) {
  return (
    <>
      <Link href="#">Lists of products</Link>
      <div>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <h3>
                {product.id}. {product.title} ${product.price}
              </h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:4000/product');
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
  revalidate: 10;
}

export default productlist;
