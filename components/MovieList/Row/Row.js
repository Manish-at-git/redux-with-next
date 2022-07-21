import React, { useEffect, useState } from "react";
import styles from "../../../styles/MovieList.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as thinStar } from "@fortawesome/free-regular-svg-icons";
import {
  faCheck,
  faStar as solidStar,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase/firebase-config";

function Roq({ user }) {
  const [domLoaded, setDomLoaded] = useState(false);
  const [userLogged, setUserLogged] = useState({});
  const [icon, setIcon] = useState(false); ///////

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserLogged(user);
    });
  }, []);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  let localStorageList;

  if (typeof window !== "undefined") {
    localStorageList =
      JSON.parse(localStorage.getItem(userLogged?.email)) || [];
  }

  const [local, setLocal] = useState(localStorageList);
  let icons = false;

  if (userLogged != undefined) {
    if (typeof window !== "undefined") {
      localStorageList.forEach((item) => {
        if (item.id === user.id) {
          icons = true;
        }
      });
    } else {
      console.log("App running on server");
    }
  }

  const watchlist = (user, e) => {
    e.preventDefault();
    if (userLogged != undefined) {
      if (typeof window !== undefined) {
        let duplicate = false;
        let localStorageList =
          JSON.parse(localStorage.getItem(userLogged?.email)) || [];

        localStorageList.forEach((item) => {
          if (item.id === user.id) {
            duplicate = true;
          }
        });
        if (duplicate === false) {
          localStorageList.push(user);
          localStorage.setItem(
            userLogged?.email,
            JSON.stringify(localStorageList)
          );
          setLocal(localStorageList);
          setIcon(false);
        } else {
          setIcon(true);
        }
      } else {
        console.log("App running on server");
      }
    } else {
      router.push("/register");
    }
  };

  const removeWatchlist = (user, e) => {
    e.preventDefault();
    if (userLogged != undefined) {
      let localStorageList =
        JSON.parse(localStorage.getItem(userLogged?.email)) || [];
      const index = localStorageList.findIndex((curElem) => {
        return curElem.id === user.id;
      });
      if (index > 0) {
        localStorageList.splice(index, 1);
        localStorage.setItem(
          userLogged?.email,
          JSON.stringify(localStorageList)
        );
        setLocal(localStorageList);
      }
    } else {
      router.push("/register");
    }
  };
  return (
    <>
      <td
        className={styles.FontSize}
        style={{
          fontSize: "0.8rem",
        }}
      >
        <FontAwesomeIcon
          icon={solidStar}
          style={{
            color: "#f5c518",
            padding: "0 5px",
          }}
          size="lg"
        />
        <b>{user.imDbRating}</b>
      </td>
      <td>
        <FontAwesomeIcon
          icon={thinStar}
          style={{ color: "grey", opacity: "0.5" }}
        />
      </td>
      <td>
        {icon == true || icons == true ? (
          <FontAwesomeIcon
            onClick={(e) => removeWatchlist(user, e)}
            icon={faTrashCan}
            size="lg"
            className={styles.addBookmark}
            style={{ color: "grey", cursor: "pointer" }}
          />
        ) : (
          <FontAwesomeIcon
            onClick={(e) => watchlist(user, e)}
            icon={faPlus}
            size="lg"
            className={styles.addBookmark}
            style={{ color: "grey", cursor: "pointer" }}
          />
        )}
      </td>
    </>
  );
}

export default Roq;
