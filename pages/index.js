import { useEffect, useState } from "react";
import { getMoviePickTwo } from "../redux/actions/main";
import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "../redux/store";
import { END } from "redux-saga";

import Link from "next/link";

import Container from "react-bootstrap/Container";

import MoviePick from "../components/MoviePick/MoviePick";

import { getMoviePick } from "../redux/actions/main";
import Categories from "../components/MovieList/Categories/Categories";

function Home() {
  // const data = useSelector((state) => state.main.users);
  // const navbarData = useSelector((state) => state.main.navbarOpened);

  return (
    <>
      {/* <MovieList /> */}
      <div>
        {/* <MoviePick
          heading="What To Watch"
          recommend="Get More Recommendations"
          title="TV Shows"
          text="TV Shows and Movies just for you"
          data="Two"
        /> */}
        <MoviePick
          heading="What To Watch"
          recommend=""
          title="Movies"
          text="TV Shows and Movies just for you"
          data=""
          color="black"
        />
      </div>
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(getMoviePick());
  store.dispatch(getMoviePickTwo());
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Home;
