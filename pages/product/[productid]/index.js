import { useRouter } from 'next/router';

function product() {
  const router = useRouter();
  const id = router.query.productid;
  return <h1>Details About Products {id}</h1>;
}
export default product;
