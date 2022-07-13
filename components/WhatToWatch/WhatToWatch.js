import React from "react";
import Link from "next/link";

import styles from "./WhatToWatch.module.css";
import Container from "react-bootstrap/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function WhatToWatch(props) {
  // let url = props.title.trim();

  return (
    <Container
      className={styles.MoviePickHeading}
      // style={props.style}
    >
      <div className={styles.WhatToWatch}>
        <h3 className={styles.Watch}>{props.heading}</h3>
        <span className={styles.Recommend}>
          <small>
            {props.recommend}
            <FontAwesomeIcon
              icon={faChevronRight}
              className={styles.faChevronRightRecommend}
            />
          </small>
        </span>
      </div>
      <h4 className={styles.MoviePickHeadingLarge}>
        <FontAwesomeIcon icon="fa-solid fa-pipe" />
        <Link
          href="/"
          // style={props.style}
          // state={{ url: `${props.url}` }}
        >
          <a className={styles.NavLink}>{props.title}</a>
        </Link>
        <FontAwesomeIcon
          icon={faChevronRight}
          className={styles.faChevronRight}
        />
      </h4>
      <p className={styles.MoviePickHeadingSmall}>{props.text}</p>
    </Container>
  );
}

export default WhatToWatch;
