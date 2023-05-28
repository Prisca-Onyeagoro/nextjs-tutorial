import { useRouter } from 'next/router';

const Review = () => {
  const router = useRouter();
  const { productid, reviewid } = router.query;

  return (
    <div>
      <h1>This is the product id {productid}</h1>
      <h3>This is the review id {reviewid}</h3>
    </div>
  );
};

export default Review;
