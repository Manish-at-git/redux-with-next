import React from "react";
import { useEffect, useState } from "react";
import { loadUsers } from "../redux/actions/main";
import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "../redux/store";
import { END } from "redux-saga";

import Link from "next/link";

function Home() {
  const data = useSelector((state) => state.main);
  return (
    <div>
      <p> {data.users}</p>
      <Link href="/">
        <a>index</a>
      </Link>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(loadUsers());
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);

export default Home;
