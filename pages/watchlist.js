import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/Watchlist.module.css";
import Table from "../components/MovieList/Table/Table";

import share from "../assests/images/share.png";

import Categories from "../components/MovieList/Categories/Categories";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as thinStar } from "@fortawesome/free-regular-svg-icons";
import {
  faCheck,
  faStar as solidStar,
} from "@fortawesome/free-solid-svg-icons";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase-config";

function Watchlist() {
  const signedIn = useSelector((state) => state.main.signIn);
  const [userLogged, setUserLogged] = useState({});
  // const [localStorageList, setLocalStorageList] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserLogged(user);
    });
  }, []);
  let localStorageList;
  if (typeof window !== "undefined") {
    localStorageList =
      JSON.parse(localStorage.getItem(userLogged?.email)) || [];
  }
  return (
    <div className={styles.MovieList}>
      <Container className={styles.MovieListContainer}>
        <div className={styles.MovieListMain}>
          <div className={styles.MovieListPage}>
            <div className={styles.MovieListHeaderpage}>
              <div className={styles.MovieListHead}>
                <h5>IMDb Charts</h5>
                <h3 className={styles.MovieListHeader}>IMDb Watchlist</h3>
                <small className={styles.MovieListByline}>
                  IMDb Watchlist as rated by regular IMDb voters.
                </small>
              </div>
              <div className={styles.Image}>
                <Image src={share} alt="share" />
              </div>
            </div>
            <hr />

            <div className={styles.MovieListList}>
              <div>
                <table className={styles.Table}>
                  <tr className={styles.tr} style={{ border: "none" }}>
                    <th
                      className={styles.th}
                      style={{
                        width: "70%",
                        fontSize: "0.8rem",
                        paddingLeft: "60px",
                      }}
                    >
                      Rank & Title
                    </th>
                    <th
                      className={styles.th}
                      style={{
                        fontSize: "0.8rem",
                      }}
                    >
                      <span>
                        <span className={styles.YourRating}>IMDb</span>
                        <span className={styles.YourRating}>Rating</span>
                      </span>
                    </th>
                    <th
                      className={styles.th}
                      style={{
                        fontSize: "0.8rem",
                      }}
                    >
                      <span>
                        <span className={styles.YourRating}>Your</span>
                        <span className={styles.YourRating}>Rating</span>
                      </span>
                    </th>
                    <th className={styles.th}></th>
                  </tr>

                  <Table CategorySort={localStorageList} />
                </table>
              </div>
            </div>
          </div>
          <Categories />
        </div>
      </Container>
    </div>
  );
}

export default Watchlist;
