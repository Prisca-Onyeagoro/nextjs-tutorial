import { revalidatePath } from 'next/cache';
import { useRouter } from 'next/router';

function productDetails({ productDet }) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <>
        <h1>wait a few seconds...</h1>
      </>
    );
  }

  return (
    <>
      <div>
        <h1>
          {productDet.id}. {productDet.title}
        </h1>
        <p>{productDet.description}</p>
      </div>
    </>
  );
}

export default productDetails;

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/product/${params.productid}`
  );
  const data = await response.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      productDet: data,
    },
  };
  revalidate: 10;
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { productid: '1' },
      },
    ],
    fallback: true,
  };
}
