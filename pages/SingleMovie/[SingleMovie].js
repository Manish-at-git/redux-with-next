import React from "react";
import { useRouter } from "next/router";

import { wrapper } from "../../redux/store";
import { END } from "redux-saga";
import { getSingleMovie } from "../../redux/actions/main";
import { useSelector } from "react-redux";

function SingleMovie() {
  const data = useSelector((state) => state.main.singleMovie);
  const router = useRouter();
  return <div>{data.title}</div>;
}

export default SingleMovie;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    store.dispatch(getSingleMovie(context.query.SingleMovie));
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);
