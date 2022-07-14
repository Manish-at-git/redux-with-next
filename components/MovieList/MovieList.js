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
      <Container className={styles.MovieListContainer}>
        <div className={styles.MovieListMain}>
          <div className={styles.MovieListPage}>
            <div className={styles.MovieListHeaderpage}>
              <div className={styles.MovieListHead}>
                <h5>IMDb Charts</h5>
                <h3 className={styles.MovieListHeader}>IMDb</h3>
                <small className={styles.MovieListByline}>
                  IMDb as rated by regular IMDb voters.
                </small>
              </div>
              <div className={styles.Image}></div>
            </div>
            <hr />
            <div className={styles.MovieListLowerHeader}>
              <div className={styles.MovieListTitle}>
                <small className={styles.Showing}>
                  {/* Showing {location.state.title} */}
                </small>
              </div>
              <div className={styles.MovieListSort}>
                <label for="sort">Sort by : </label>
                <select name="sort" id="sort" form="sortform">
                  <option value="Ranking">Ranking</option>
                  <option value="Release">Release</option>
                  <option value="Rating">Rating</option>
                </select>
                <input
                  type="text"
                  placeholder="Search Here"
                  id="search_input"
                  // onChange={(event) => setSearchTerm(event.target.value)}
                />
              </div>
            </div>
            <div className={styles.MovieListList}>
              <div>
                <table className={styles.Table}>
                  <tr style={{ border: "none" }}>
                    <th
                      style={{
                        width: "70%",
                        fontSize: "0.8rem",
                        paddingLeft: "60px",
                      }}
                    >
                      Rank & Title
                    </th>
                    <th
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
                      style={{
                        fontSize: "0.8rem",
                      }}
                    >
                      <span>
                        <span className={styles.YourRating}>Your</span>
                        <span className={styles.YourRating}>Rating</span>
                      </span>
                    </th>
                    <th></th>
                  </tr>
                  {/* {
                    // items &&
                    //   items
                    //     .sort((a, b) => {
                    //       if (sortDirection === "Ranking") {
                    //         return a.rank - b.rank;
                    //       } else if (sortDirection === "Rating") {
                    //         return b.imDbRating - a.imDbRating;
                    //       } else {
                    //         return a.year - b.year;
                    //       }
                    //     })
                    //     .filter((user) => {
                    //       if (searchTerm == "") {
                    //         return user;
                    //       } else if (
                    //         user.title
                    //           .trim()
                    //           .toLowerCase()
                    //           .includes(searchTerm.trim().toLowerCase())
                    //       ) {
                    //         return user;
                    //       }
                    //     })
                    items.map((user) => (
                      <tr>
                        <td>
                          <img
                            className={styles.TableImage}
                            src={user.image}
                            style={{ width: "50px" }}
                          />
                          <small className="table-row">
                            {user.rank}.{" "}
                            <NavLink
                              to={`/title/${user.id}`}
                              state={user.id}
                              className={styles.MovieListNavLink}
                            >
                              <span className={styles.BlueName}>
                                {user.title}
                              </span>
                            </NavLink>
                            <small
                              style={{ fontSize: "0.9em" }}
                            >{`(${user.year})`}</small>
                          </small>
                        </td>
                        <td
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
                          <FontAwesomeIcon
                            icon={faPlus}
                            style={{ color: "grey", cursor: "pointer" }}
                            onClick={() => watchlist(user)}
                          />
                        </td>
                      </tr>
                    ))
                  } */}
                </table>
              </div>
            </div>
          </div>
          <Categories />
        </div>
        {/* )} */}
      </Container>
      {/* )} */}
    </div>
  );
}

export default MovieList;
