import React, { useEffect, useRef, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import ErrorHandler from "../ErrorHander/ErrorHandler";
import WhatToWatch from "../WhatToWatch/WhatToWatch";
import Card from "../Cards/Card";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { loadMovieList } from "../../redux/actions";
import { NavLink } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import { useSelector, useDispatch } from "react-redux";

import "./MoviePick.css";

function MoviePick(props) {
  const datalist = useSelector((state) => state.movielist);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);

  const dispatch = useDispatch();

  let data = Array.from(datalist);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  useEffect(() => {
    dispatch(loadMovieList(props.url));
    // console.log("api");
  }, []);

  var list;
  try {
    list = data[0].items.slice(0, 20).map((item) => (
      <SwiperSlide>
        <NavLink to={`/title/${item.id}`} state={item.id} className="NavLink">
          <Card item={item} />
        </NavLink>
      </SwiperSlide>
    ));
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="container-fluid" style={{ background: "black" }}>
      <div className="container MoviePick">
        <div className="MoviePick-Heading">
          <WhatToWatch
            heading={props.heading}
            recommend={props.recommend}
            title={props.title}
            text={props.text}
            url={props.url}
          />
          {error ? (
            <ErrorHandler />
          ) : (
            <div className="MoviePick-Cards">
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
                {isLoading ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <BeatLoader
                      color="#f5c518"
                      cssOverride={override}
                      size={20}
                    />
                  </div>
                ) : (
                  list
                )}
              </Swiper>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MoviePick;
