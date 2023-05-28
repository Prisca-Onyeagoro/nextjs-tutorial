import { useRouter } from 'next/router';

const Params = () => {
  const router = useRouter();
  const { paramsid = [] } = router.query;
  if (paramsid.length == 2) {
    return (
      <h1>
        This is the first {paramsid[0]} and this is the second {paramsid[1]}
      </h1>
    );
  } else if (paramsid.length == 1) {
    return <h1>This is {paramsid[0]}</h1>;
  }
  return <h1>This is the doc home </h1>;
};
export default Params;
