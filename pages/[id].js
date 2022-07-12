export default function DynamicPage(props) {
  console.log(props);
  return (
    <div>
      The dynamic route is {props.posts.name}
      {/* <div>{props.posts.id}</div> */}
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const posts = await res.json();

  const paths = posts.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  console.log(context.params.id, "context");
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
