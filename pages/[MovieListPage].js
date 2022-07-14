import React from "react";
import MovieList from "../components/MovieList/MovieList";
import { NavRoutes } from "./NavbarRoutes";
import Categories from "../components/MovieList/Categories/Categories";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import styles from "../components/MovieList/MovieList.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as thinStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Alert } from "react-bootstrap";

function MovieListPage(props) {
  console.log(props);
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

export default MovieListPage;

export async function getStaticPaths() {
  const path = NavRoutes.map((post) => {
    return {
      params: { MovieListPage: post.url.toString() },
    };
  });

  return {
    paths: path,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const MovieListPage = context.params.MovieListPage;
  const res = await fetch(
    `https://imdb-api.com/en/API/${MovieListPage}/k_nrcppo4w`
  );
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
