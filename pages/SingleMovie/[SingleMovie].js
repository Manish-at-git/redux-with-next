import React from "react";
import { Container, Row } from "react-bootstrap";
import styles from "../../components/SingleMovie/SingleMovie.module.css";
import { useRouter } from "next/router";

import { wrapper } from "../../redux/store";
import { END } from "redux-saga";
import { getSingleMovie } from "../../redux/actions/main";
import { useSelector } from "react-redux";

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
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Link from "next/link";

function SingleMovie() {
  const data = useSelector((state) => state.main.singleMovie);
  console.log(data);
  const router = useRouter();
  return (
    <>
      <Container fluid className={styles.SingleMovieMain1}>
        <Container className={styles.SingleMovie}>
          <div className={styles.SingleMovieHeading}>
            <div className={styles.SingleMovieHeadingTitle}>
              <h1>{data && data.data.title}</h1>
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
                      {data && data.data.imDbRating}
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
                  <span className={styles.Rating} style={{ color: "#5799ef" }}>
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
                    {data && data.data.imDbRating}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.SingleMovieCard}>
            <div className={(styles.CardElement, styles.SingleMoviePoster)}>
              <img src={data && data.data.image} />
            </div>
            <div className={(styles.CardElement, styles.SingleMovieTrailer)}>
              <div style={{ width: "100%", height: "100%" }}>
                <iframe
                  style={{ width: "100%", height: "100%" }}
                  src={data && data.trailer}
                ></iframe>
              </div>
            </div>
            <div className={styles.SingleMovieMedia}>
              <div className={styles.SingleMovieImages}>
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
          <div className={styles.Info}>
            <div className={styles.SingleMovieInfo} style={{ width: "60%" }}>
              <div className={styles.Categories}>
                {data &&
                  data.data.genreList.map((item) => (
                    <span className={styles.CategoriesAction}>
                      {item.value}
                    </span>
                  ))}
              </div>
              <div className={styles.Description}>{data && data.data.plot}</div>
              <hr className={styles.DescriptionLine} />
              <div className={styles.Director}>
                <span className={styles.DirectorBold}>Director</span>
                <span className={styles.DirectorBlue}>
                  {" "}
                  {data && data.data.directors}
                </span>
              </div>
              <hr className={styles.DescriptionLine} />
              <div className={styles.Director}>
                <span className={styles.DirectorBold}>Writer</span>
                <span className={styles.DirectorBlue}>
                  {" "}
                  {data && data.data.writers}{" "}
                </span>
              </div>
              <hr className={styles.DescriptionLine} />
              <div className={styles.Director}>
                <span className={styles.DirectorBold}>Stars</span>
                <span className={styles.DirectorBlue}>
                  {" "}
                  {data && data.data.stars}{" "}
                </span>
              </div>
            </div>
            <div
              // className="SingleMovie-info
              className={styles.WatchlistBookmark}
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
                    <span className={styles.BoldLarge}>320</span>
                  </b>
                  Critic reviews
                </span>
                <span>
                  <b>
                    <span
                      className={styles.BoldLarge}
                      style={{ backgroundColor: "green", color: "white" }}
                    >
                      {data && data.data.metacriticRating}
                    </span>
                  </b>
                  Metascore
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Container>
      <Container fluid style={{ background: "white" }}>
        <Container style={{ display: "flex", justifyContent: "space-between" }}>
          <Container className={styles.SingleMovieMain2}>
            <div>
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
                {data &&
                  data.images.slice(0, 10).map((item) => (
                    <SwiperSlide>
                      <div className={styles.SliderImage}>
                        <img src={item.image} />
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>

            <div>
              <div className={styles.GridCast}>
                {data &&
                  data.data.actorList.slice(0, 8).map((item) => (
                    <div
                      style={{
                        padding: "10px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div className={(styles.CastItem, styles.Inline)}>
                        <img
                          style={{
                            height: "100px",
                            width: "100px",
                            objectFit: "cover",
                            borderRadius: "50%",
                          }}
                          src={item.image}
                        />
                      </div>
                      <div
                        className={(styles.CastItem, styles.Inline)}
                        style={{ padding: "0 20px" }}
                      >
                        <div className={styles.CastName}>{item.name}</div>
                        <div className={styles.CastDesc}>
                          {item.asCharacter.slice(0, 40)}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <Container>
              <hr className={styles.DescriptionLine} />{" "}
              <div className={styles.Director}>
                <span className={styles.DirectorBold}>Director</span>
                <span className={styles.DirectorBlue}>
                  {" "}
                  {data && data.data.directors}
                </span>
              </div>
              <hr className={styles.DescriptionLine} />{" "}
              <div className={styles.Director}>
                <span className={styles.DirectorBold}>Writer</span>
                <span className={styles.DirectorBlue}>
                  {" "}
                  {data && data.data.writers}
                </span>
              </div>
              <hr className={styles.DescriptionLine} />{" "}
              <div className={styles.Director}>
                <span className={styles.DirectorBold}>Stars</span>
                <span className={styles.DirectorBlue}>
                  {" "}
                  {data && data.data.stars}
                </span>
              </div>
            </Container>
          </Container>
          <div className={styles.SingleSidebar}>
            {data &&
              data.data.similars.slice(0, 8).map((item) => (
                <Link
                  href={{
                    pathname: `/SingleMovie/${item.id}`,
                  }}
                >
                  <a className={styles.SearchLink}>
                    <div className={styles.SingleSidebarBox}>
                      <div className={styles.WatchedSeries}>
                        <small className={styles.WatchedSeriesSpan}>
                          {item.title}
                        </small>
                        <small className={styles.CreatedYearSpan}>
                          {item.imDbRating}
                        </small>
                      </div>
                      <img src={item.image} className={styles.CreatedYear} />
                    </div>
                  </a>
                </Link>
              ))}
          </div>
        </Container>
      </Container>
    </>
  );
}

export default SingleMovie;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    store.dispatch(getSingleMovie(context.query.SingleMovie));
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);
