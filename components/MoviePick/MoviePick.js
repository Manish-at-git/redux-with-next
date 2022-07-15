import React, { useEffect, useRef, useState } from "react";
// import BeatLoader from "react-spinners/BeatLoader";
// import ErrorHandler from "../ErrorHander/ErrorHandler";
import WhatToWatch from "../WhatToWatch/WhatToWatch";
import Cards from "../Cards/Card";

import Container from "react-bootstrap/Container";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import { useSelector, useDispatch } from "react-redux";

import styles from "./MoviePick.module.css";
import Link from "next/link";

function MoviePick(props) {
  const MoviesListOne = useSelector((state) => state.main.moviePick);
  const MoviesListTwo = useSelector((state) => state.main.moviePickTwo);

  const { heading, recommend, title, text, data } = props;

  let MovieList;
  if (data === "Two") {
    MovieList = MoviesListTwo;
  } else {
    MovieList = MoviesListOne;
  }

  // let MovieList = "MovieList" + props.data;

  // console.log(typeof MovieList);

  // const isLoading = useSelector((state) => state.isLoading);
  // const error = useSelector((state) => state.error);
  // const override = {
  //   display: "block",
  //   margin: "0 auto",
  //   borderColor: "red",
  // };

  var list;
  try {
    list = MovieList.slice(0, 20).map((item) => (
      <SwiperSlide key={item.id}>
        {/* <NavLink to={`/title/${item.id}`} state={item.id} className="NavLink"> */}
        <Cards item={item} />
        {/* </NavLink> */}
        {/* {item.id} */}
      </SwiperSlide>
    ));
  } catch (error) {
    console.log(error);
  }
  console.log(props);
  return (
    <Container fluid style={{ background: "black" }}>
      <Container className={styles.MoviePick}>
        <div className={styles.MoviePickHeading}>
          <WhatToWatch
            heading={heading}
            recommend={recommend}
            title={title}
            text={text}
          />
          {/* <Link
            href={{
              pathname: "/Grid",
              query: {
                data: props.data,
              },
            }}
          >
            Hello
          </Link> */}

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
