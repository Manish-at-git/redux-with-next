import { useEffect, useState } from "react";
import { loadUsers } from "../redux/actions/main";
import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "../redux/store";

function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.main);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  // console.log(data);

  return (
    <div className={styles.container}>
      {/* <p> {data.users}</p> */}

      {console.log(data)}
    </div>
  );
}

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ req, res }) => {
      await store.dispatch(loadUsers());
    }
);

export default Home;
