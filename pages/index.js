import { useEffect, useState } from "react";
import { loadUsers } from "../redux/actions/main";
import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "../redux/store";
import { END } from "redux-saga";

function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.main);

  // useEffect(() => {
  //   dispatch(loadUsers());
  // }, []);
  // console.log(data);

  return (
    <div className={styles.container}>
      {/* <p> {data.users}</p> */}

      {console.log(data.main.users)}
    </div>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  // regular stuff
  store.dispatch(loadUsers());
  // end the saga
  store.dispatch(END);
  await store.sagaTask.toPromise();

  const state = store.getState();
  console.log("state", state.main.users);
});

export default Home;
