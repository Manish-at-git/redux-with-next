import React from "react";
import { useEffect, useState } from "react";
import { loadUsers } from "../../redux/actions/main";
import styles from "../../styles/home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "../../redux/store";
import { END } from "redux-saga";

function contact() {
  const data = useSelector((state) => state.main);
  return (
    <div>
      <p> {data.users}</p>
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

export default contact;
