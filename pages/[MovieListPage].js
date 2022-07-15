import React, { useState } from "react";
import { NavRoutes } from "../NavbarRoutes";
import Categories from "../components/MovieList/Categories/Categories";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import styles from "../components/MovieList/MovieList.module.css";
import share from "../assests/images/share.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as thinStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Alert } from "react-bootstrap";

import { useRouter } from "next/router";

import { wrapper } from "../redux/store";
import { END } from "redux-saga";
import { getMovieList } from "../redux/actions/main";
import Image from "next/image";
import Link from "next/link";

function MovieListPage(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortDirection, setsortDirection] = useState("Ranking");

  const List = useSelector((state) => state.main.movieList);
  const router = useRouter();
  const title = router.query.title;
  console.log(router);

  const sortByYear = (e) => {
    const sortDirection = e.target.value;

    setsortDirection(sortDirection);
  };
  console.log(searchTerm);
  console.log(sortDirection);

  return (
    <div className={styles.MovieList}>
      <Container className={styles.MovieListContainer}>
        <div className={styles.MovieListMain}>
          <div className={styles.MovieListPage}>
            <div className={styles.MovieListHeaderpage}>
              <div className={styles.MovieListHead}>
                <h5>IMDb Charts </h5>
                <h3 className={styles.MovieListHeader}>IMDb {title}</h3>
                <small className={styles.MovieListByline}>
                  IMDb {title} as rated by regular IMDb voters.
                </small>
              </div>
              <div className={styles.Image}>
                <Image src={share} alt="share" />
              </div>
            </div>
            <hr className={styles.Hr} />
            <div className={styles.MovieListLowerHeader}>
              <div className={styles.MovieListTitle}>
                <small className={styles.Showing}>Showing {title}</small>
              </div>
              <div className={styles.MovieListSort}>
                <label htmlFor={"sort"}>Sort by : </label>
                <select
                  name="sort"
                  id="sort"
                  form="sortform"
                  onChange={sortByYear}
                >
                  <option value="Ranking">Ranking</option>
                  <option value="Release">Release</option>
                  <option value="Rating">Rating</option>
                </select>
                <input
                  type="text"
                  placeholder="Search Here"
                  id="search_input"
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
              </div>
            </div>
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
                  {List &&
                    List.sort((a, b) => {
                      if (sortDirection === "Ranking") {
                        return a.rank - b.rank;
                      } else if (sortDirection === "Rating") {
                        return b.imDbRating - a.imDbRating;
                      } else {
                        return a.year - b.year;
                      }
                    })
                      .filter((user) => {
                        if (searchTerm == "") {
                          return user;
                        } else if (
                          user.title
                            .trim()
                            .toLowerCase()
                            .includes(searchTerm.trim().toLowerCase())
                        ) {
                          return user;
                        }
                      })
                      .map((user) => (
                        <tr className={styles.tr} key={user.id}>
                          <td>
                            <image
                              // src={user.image}
                              src={user.image}
                              alt="poster"
                              className={styles.TableImage}
                            />
                            <small className="table-row">
                              {user.rank}.{" "}
                              <Link
                                href={{
                                  pathname: `/title/${user.id}`,
                                  query: user.id,
                                }}
                              >
                                <a className={styles.MovieListLink}>
                                  <span className={styles.BlueName}>
                                    {user.title}
                                  </span>
                                </a>
                              </Link>
                              <small
                                style={{ fontSize: "0.9em" }}
                              >{`(${user.year})`}</small>
                            </small>
                          </td>
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
                            <FontAwesomeIcon
                              icon={faPlus}
                              style={{ color: "grey", cursor: "pointer" }}
                              // onClick={() => watchlist(user)}
                            />
                          </td>
                        </tr>
                      ))}
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

// export async function getStaticProps(context) {
//   const MovieListPage = context.params.MovieListPage;
//   const res = await fetch(
//     `https://imdb-api.com/en/API/${MovieListPage}/k_nrcppo4w`
//   );
//   const posts = await res.json();
//   return {
//     props: {
//       posts,
//     },
//   };
// }

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    const MovieListPage = context.params.MovieListPage;
    store.dispatch(getMovieList(MovieListPage));
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);
