import { useEffect, useState } from "react";
import { loadUsers } from "../redux/actions/main";
import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "../redux/store";
import { END } from "redux-saga";

import Link from "next/link";

function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.main);

  // useEffect(() => {
  //   dispatch(loadUsers());
  // }, []);
  // console.log(data);

  return (
    <div className={styles.container}>
      <p> {data.users}</p>

      <div>
        <Link href="/home">
          <a>home</a>
        </Link>
      </div>
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
