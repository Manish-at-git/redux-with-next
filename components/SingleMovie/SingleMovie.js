import React from "react";

import Container from "react-bootstrap/Container";
// import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
// import BeatLoader from "react-spinners/BeatLoader";
// import ErrorHandler from "../ErrorHander/ErrorHandler";

// import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as thinStar } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDown,
  faStar as solidStar,
} from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// Import Swiper React components
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// import { useDispatch, useSelector } from "react-redux";
// import { loadMovieList, loadSingleImages } from "../../redux/actions";
// import WhatToWatch from "../WhatToWatch/WhatToWatch";
// import Cast from "./Cast/Cast";

import styles from "./SingleMovie.module.css";

function SingleMovie() {
  // const location = useLocation();
  // const { id } = useParams();
  // const navigate = useNavigate();
  // const data = useSelector((state) => state.movielist);
  // const isLoading = useSelector((state) => state.isLoading);
  // const singleData = useSelector((state) => state.singleMovieData);
  // const signedIn = useSelector((state) => state.registeredUser);
  // const error = useSelector((state) => state.error);
  // const dispatch = useDispatch();
  // let localStorageList = JSON.parse(localStorage.getItem(signedIn)) || [];

  // console.log(singleImage);
  // console.log(location);
  // let bookmarked = [];
  // const override = {
  //   display: "block",
  //   margin: "0 auto",
  //   borderColor: "red",
  // };

  // useEffect(() => {
  //   dispatch(
  //     loadMovieList(
  //       `https://imdb-api.com/en/API/Title/${API_KEY}/${location.state}`
  //     )
  //   );
  // }, [id]);

  // useEffect(() => {
  //   dispatch(loadSingleImages(location.state));
  // }, [id]);

  // const watchlist = (user) => {
  //   // console.log(signedIn);
  //   if (!(signedIn.toString().trim() === "")) {
  //     let duplicate = false;
  //     localStorageList.forEach((item) => {
  //       // bookmarked.push(item.id);
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

  var genre;
  var cast;
  var similars;
  var images;
  var trailer;
  var title;
  var imDbRating;
  var image;
  var plot;
  var stars;
  var writers;
  var directors;
  var metacriticRating;

  try {
    // metacriticRating = data[0].metacriticRating;
    // stars = data[0].stars;
    // writers = data[0].writers;
    // directors = data[0].directors;
    // plot = data[0].plot;
    // image = data[0].image;
    // imDbRating = data[0].imDbRating;
    // title = data[0].title;
    // trailer = singleData[0].trailerdata.linkEmbed;
    // genre = data[0].genreList;
    // cast = data[0].actorList;
    // similars = data[0].similars;
    // images = singleData[0].imagesData.items;
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <>
        <Container fluid className={styles.SingleMovieMain1}>
          <Container className={styles.SingleMovie}>
            <div className={styles.SingleMovieHeading}>
              <div className={styles.SingleMovieHeadingTitle}>
                {/* <h1>{title ? title : console.log("no movie")}</h1> */}Title
              </div>
              <div className={styles.SingleMovieHeadingInfo}>
                <div className={styles.Heading}>
                  <span className={styles.Block}>IMDB RATING</span>
                  <span className={styles.Block}>
                    <FontAwesomeIcon
                      icon={solidStar}
                      size="lg"
                      style={{ color: "#f5c518" }}
                    />
                    <span className={styles.Rating}>
                      <span className={styles.BoldLarge}>
                        {/* {imDbRating ? imDbRating : console.log("errro")} */}
                        1.2
                      </span>
                      /10
                    </span>
                  </span>
                </div>
                <div className={styles.Heading}>
                  <span className={styles.Block}>YOUR RATING</span>
                  <span className={styles.Block}>
                    <FontAwesomeIcon
                      icon={thinStar}
                      size="lg"
                      style={{ color: "#5799ef" }}
                    />
                    <span
                      className={styles.Rating}
                      style={{ color: "#5799ef" }}
                    >
                      {" "}
                      Rate
                    </span>
                  </span>
                </div>
                <div className={styles.Heading}>
                  <span className={styles.Block}>POPULARITY</span>
                  <span className={styles.Block}>
                    <FontAwesomeIcon
                      icon={faChartLine}
                      size="lg"
                      style={{ color: "green" }}
                    />
                    <span className={styles.Rating}>
                      {" "}
                      {/* {imDbRating ? imDbRating : console.log("errro")} */}{" "}
                      2.2
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.SingleMovieCard}>
              <div className={(styles.CardElement, styles.SingleMoviePoster)}>
                {/* <img src={image ? image : console.log("error")} /> */}
              </div>
              <div className={(styles.CardElement, styles.SingleMovieTrailer)}>
                <div className="embed-responsive embed-responsive-4by3">
                  <iframe
                    className="embed-responsive-item"
                    // src={trailer}
                  ></iframe>
                </div>
              </div>
              <div className={(styles.SingleMovieMedia, styles.CardElement)}>
                <div className={(styles.SingleMovieImages, styles.CardElement)}>
                  <FontAwesomeIcon
                    className={styles.Icons}
                    icon={faImages}
                    size="lg"
                    style={{ color: "white" }}
                  />
                  <small>Images</small>
                </div>
                <div className={styles.SingleMovieImages}>
                  <FontAwesomeIcon
                    className={styles.Icons}
                    icon={faFilm}
                    size="lg"
                    style={{ color: "white" }}
                  />
                  <small>Videos</small>
                </div>
              </div>
            </div>
            <div className={styles.Icons}>
              <div className={styles.SingleMovieInfo} style={{ width: "60%" }}>
                <div className={styles.Categories}>
                  {genre &&
                    genre.map((item) => (
                      <span className={styles.CategoriesAction}>
                        {/* {item.value} */}
                      </span>
                    ))}
                </div>
                <div className={styles.Description}>
                  {/* {plot ? plot : console.log("error")} */} plot
                </div>
                <hr className={styles.DescriptionLine} />
                <div className={styles.Director}>
                  <span className={styles.DirectorBold}>Director</span>
                  <span className={styles.DirectorBlue}>
                    {" "}
                    {/* {directors ? directors : console.log("error")} */}{" "}
                    director
                  </span>
                </div>
                <hr className={styles.DescriptionLine} />
                <div className={styles.Director}>
                  <span className={styles.DirectorBold}>Writer</span>
                  <span className={styles.DirectorBlue}>
                    {" "}
                    {/* {writers ? writers : console.log("error")} */}writer
                  </span>
                </div>
                <hr className={styles.DescriptionLine} />
                <div className={styles.Director}>
                  <span className={styles.DirectorBold}>Stars</span>
                  <span className={styles.DirectorBlue}>
                    {" "}
                    {/* {stars ? stars : console.log("error")} */} stars
                  </span>
                </div>
              </div>
              <div
                // className="SingleMovie-info
                className={styles.WatchlistBookmark}
                style={{ width: "40%" }}
              >
                <div className={styles.SeeShowtime}>
                  <FontAwesomeIcon icon={faPlus} size="md" />
                  {"  "}
                  See Showtime
                </div>
                <div
                  className={styles.Watchlist}
                  // onClick={() => watchlist(...data)}
                >
                  <span>
                    <FontAwesomeIcon icon={faPlus} size="md" />
                    {"  "}
                    Add to Watchlist{" "}
                  </span>
                  <FontAwesomeIcon icon={faAngleDown} size="md" />
                </div>
                <div className={styles.BookmarkDown}>
                  <span>
                    <b>
                      <span className={styles.BoldLarge}>2.1K</span>
                    </b>
                    User reviews
                  </span>
                  <span>
                    <b>
                      <span className="boldLarge">320</span>
                    </b>
                    Critic reviews
                  </span>
                  <span>
                    <b>
                      <span
                        className="boldLarge"
                        style={{ backgroundColor: "green", color: "white" }}
                      >
                        {metacriticRating
                          ? metacriticRating
                          : console.log("error")}
                      </span>
                    </b>
                    Metascore
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </Container>
        <div className="container-fluid">
          <div
            className="container"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div
              className="SingleMovie-main2 container"
              style={{ width: "60%" }}
            >
              <div className="">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  slidesPerGroup={1}
                  // loop={true}
                  // loopFillGroupWithBlank={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  {images &&
                    images.slice(0, 10).map((item) => (
                      <SwiperSlide>
                        <div className="slider-image">
                          <img src={item.image} />
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>

              <div>
                <div className="gridCast">
                  {cast &&
                    cast.slice(0, 8).map((item) => (
                      <div style={{ padding: "10px" }}>
                        <div className="Cast-item inline">
                          <img
                            src={item.image}
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "cover",
                              borderRadius: "50%",
                              marginRight: "10px",
                            }}
                          />
                        </div>
                        <div className="cast-img inline">
                          <div className="Cast-Name">{item.name}</div>
                          <div className="Cast-desc">
                            {item.asCharacter.slice(0, 40)}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="container">
                <hr className="description-line" />
                <div className="director">
                  <span className="director-bold">Director</span>
                  <span className="director-blue">
                    {" "}
                    {directors ? directors : console.log("error")}
                  </span>
                </div>
                <hr className="description-line" />
                <div className="director">
                  <span className="director-bold">Writer</span>
                  <span className="director-blue">
                    {" "}
                    {writers ? writers : console.log("error")}
                  </span>
                </div>
                <hr className="description-line" />
                <div className="director">
                  <span className="director-bold">Stars</span>
                  <span className="director-blue">
                    {" "}
                    {stars ? stars : console.log("error")}
                  </span>
                </div>
              </div>
            </div>
            <div className="single-sidebar">
              {similars &&
                similars.slice(0, 8).map((item) => (
                  <NavLink
                    to={`/title/${item.id}`}
                    state={item.id}
                    className="search-NavLink"
                  >
                    <div className="single-sidebar-box">
                      <div className="watched-series">
                        <small className="watched-series-span">
                          {item.title}
                        </small>
                        <small className="created-year-span">
                          {item.imDbRating}
                        </small>
                      </div>
                      <img src={item.image} className="created-year" />
                    </div>
                  </NavLink>
                ))}
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default SingleMovie;
