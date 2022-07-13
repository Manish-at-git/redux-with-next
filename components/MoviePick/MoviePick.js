import React, { useEffect, useRef, useState } from "react";
// import BeatLoader from "react-spinners/BeatLoader";
// import ErrorHandler from "../ErrorHander/ErrorHandler";
// import WhatToWatch from "../WhatToWatch/WhatToWatch";
import WhatToWatch from "../WhatToWatch/WhatToWatch";
import Cards from "../Cards/Card";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { loadMovieList } from "../../redux/actions";
// import { NavLink } from "react-router-dom";

import { wrapper } from "../../redux/store";
import { END } from "redux-saga";

import Container from "react-bootstrap/Container";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import { useSelector, useDispatch } from "react-redux";

import styles from "./MoviePick.module.css";
import { getMoviePick, getMoviePickTwo } from "../../redux/actions/main";

function MoviePick(props) {
  let Tvs;
  let Movies;
  if (props.data === "Two") {
    Movies = useSelector((state) => state.main.moviePickTwo);
  } else {
    Movies = useSelector((state) => state.main.moviePick);
  }

  // const isLoading = useSelector((state) => state.isLoading);
  // const error = useSelector((state) => state.error);

  const dispatch = useDispatch();
  // console.log(Movies);

  // let data = Array.from(datalist);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  if (props.data === "Two") {
    useEffect(() => {
      dispatch(getMoviePickTwo());
      console.log("useEffect");
      // fetch("https://imdb-api.com/en/API/Top250Movies/k_ms6ozdd4")
      //   .then((response) => response.json())
      //   .then((data) => setImage(data));
    }, []);
  } else {
    useEffect(() => {
      dispatch(getMoviePick());
      // fetch("https://imdb-api.com/en/API/Top250Movies/k_ms6ozdd4")
      //   .then((response) => response.json())
      //   .then((data) => setImage(data));
    }, []);
  }

  var list;
  try {
    list = Movies.slice(0, 20).map((item) => (
      <SwiperSlide>
        {/* <NavLink to={`/title/${item.id}`} state={item.id} className="NavLink"> */}
        <Cards item={item} />
        {/* </NavLink> */}
        {/* {item.id} */}
      </SwiperSlide>
    ));
  } catch (error) {
    console.log(error);
  }

  return (
    <Container fluid style={{ background: "black" }}>
      <Container className={styles.MoviePick}>
        {/* {console.log(Image.items)} */}
        <div className={styles.MoviePickHeading}>
          <WhatToWatch
            props={props}
            // url="https://imdb-api.com/en/API/BoxOffice/k_67o8cg68"
          />

          <div className={styles.MoviePickCards}>
            <Swiper
              slidesPerView={5}
              spaceBetween={0}
              slidesPerGroup={2}
              loop={false}
              loopFillGroupWithBlank={false}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {list}
            </Swiper>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default MoviePick;
