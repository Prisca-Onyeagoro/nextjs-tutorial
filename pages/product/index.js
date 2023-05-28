import Link from 'next/link';

function productlist({ productid = 100 }) {
  return (
    <>
      <Link href="/">Home Page</Link>
      <h1>
        <Link href="/product/1">Product 1</Link>
      </h1>
      <h1>
        <Link href="/product/2" replace>
          Product 2
        </Link>
      </h1>
      <h1>
        <Link href={`/product/${productid}`}>Product 3</Link>
      </h1>
    </>
  );
}

export default productlist;
