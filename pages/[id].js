import { useRouter } from "next/router";

export default function DynamicPage(props) {
  const router = useRouter();
  // const {
  //   query: { id },
  // } = router;

  console.log(router, "asdfghjkl ");
  const { id } = router.query;
  console.log(props);
  return (
    <div>
      The dynamic route is {id}
      <div>{props.posts.name}</div>
    </div>
  );
}

export async function getServerSideProps(context) {
  //   const pid = context.params.pid
  //   const router = useRouter();
  //   const { data, id } = router.query;
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  console.log(context.query.id, "cvcvcvc");
  const id = context.query.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
