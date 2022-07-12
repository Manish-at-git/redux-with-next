import { useRouter } from "next/router";

export default function DynamicPage() {
  const router = useRouter();
  // const {
  //   query: { id },
  // } = router;

  console.log(router.query);
  const { slug } = router.query;
  return <div>The dynamic route is {slug}</div>;
}