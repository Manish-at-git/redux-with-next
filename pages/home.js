import React from "react";
import { useEffect, useState } from "react";
import { loadUsers } from "../redux/actions/main";
import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "../redux/store";
import { END } from "redux-saga";
import { useRouter } from "next/router";

import Link from "next/link";

function Home() {
  const data = useSelector((state) => state.main.main.users);
  const router = useRouter();
  return (
    <div>
      {/* <p> {data}</p> */}
      {console.log(data)}
      <Link href="/">
        <a>index</a>
      </Link>
      {console.log(router)}
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
