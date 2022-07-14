import React from "react";
import MovieList from "../components/MovieList/MovieList";
import { NavRoutes } from "./NavbarRoutes";

function MovieListPage(props) {
  return (
    <div>
      {console.log(props)}
      <div>Hello</div>
      <MovieList />
    </div>
  );
}

export default MovieListPage;

export async function getStaticPaths() {
  const path = NavRoutes.map((post) => {
    return {
      params: { MovieListPage: post.url.toString() },
    };
  });

  return {
    paths: path,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const MovieListPage = context.params.MovieListPage;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
