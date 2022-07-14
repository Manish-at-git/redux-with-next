import React, { useEffect, useState } from "react";
// import BeatLoader from "react-spinners/BeatLoader";
// import ErrorHandler from "../ErrorHander/ErrorHandler";
import Categories from "./Categories/Categories";

// import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// import "./MovieList.css";
import Container from "react-bootstrap/Container";
import styles from "./MovieList.module.css";
// import image from "../../assets/images/share.png";

// import { loadMovieList } from "../../redux/actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as thinStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Alert } from "react-bootstrap";

function MovieList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMEssage] = useState(false);

  // const navigate = useNavigate();
  // const location = useLocation();
  const datalist = useSelector((state) => state.main.moviePick);
  // const signedIn = useSelector((state) => state.registeredUser);
  // const isLoading = useSelector((state) => state.isLoading);
  // const error = useSelector((state) => state.error);

  const dispatch = useDispatch();
  // let localStorageList = JSON.parse(localStorage.getItem(signedIn)) || [];

  // let data = Array.from(datalist);
  let items;

  // const [sortDirection, setsortDirection] = useState("Ranking");

  // useEffect(() => {
  //   dispatch(loadMovieList(location.state.url));
  // }, [location.state.url]);

  // const override = {
  //   display: "block",
  //   margin: "0 auto",
  //   borderColor: "red",
  // };

  // try {
  //   items = data[0].items;
  // } catch (err) {
  //   console.log(err);
  // }

  // const showError = (error) => {
  //   let authError = error.message;
  //   let errorSplit = authError.split("/");
  //   let errorSplitString = errorSplit[1].toString();
  //   let errorMessageList = errorSplitString.split(")");
  //   let errorMsg = errorMessageList[0].toString();
  //   setErrorMEssage(errorMsg);
  // };

  // let list;
  // let signInError;

  // const watchlist = (user) => {
  //   // console.log(signedIn);
  //   if (!(signedIn.toString().trim() === "")) {
  //     let duplicate = false;
  //     localStorageList.forEach((item) => {
  //       if (item.id === user.id) {
  //         duplicate = true;
  //         // console.log("dupliocate");
  //         // console.log(duplicate);
  //       }
  //     });

  //     if (duplicate === false) {
  //       localStorageList.push(user);
  //       localStorage.setItem(signedIn, JSON.stringify(localStorageList));
  //     }
  //   } else {
  //     navigate("/register");
  //   }
  // };

  // const sortByYear = (e) => {
  //   const sortDirection = e.target.value;

  //   setsortDirection(sortDirection);
  // };

  return (
    <div className={styles.MovieList}>
      {/* {console.log(datalist[0])} */}
      {/* {datalist.map((item) => (
        <p>{item.title}</p>
      ))} */}
      HI
      {/* <p>{datalist[0]}</p> */}
    </div>
  );
}

export default MovieList;
