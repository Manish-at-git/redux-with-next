import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../components/Cards/Card";
// import Cards from "../Cards/Card";
// import WhatToWatch from "../WhatToWatch/WhatToWatch";
// import ErrorHandler from "../ErrorHander/ErrorHandler";

import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import styles from "../components/Grid/Grid.module.css";
import { useRouter } from "next/router";
// import { loadMovieList } from "../../redux/actions";

function Grid() {
  const dispatch = useDispatch();
  const router = useRouter();
  const Data = router.query.Container;
  // let data = JSON.parse(Data);
  // console.log(data);

  const datalistOne = useSelector((state) => state.main.moviePick);
  const datalistTwo = useSelector((state) => state.main.moviePickTwo);

  console.log(Data);
  let datalist;
  if (Data === "Two") {
    datalist = datalistTwo;
  } else {
    datalist = datalistOne;
  }

  console.log(datalist);
  //   let data;

  //   try {
  //     data = datalist[0].items;
  //   } catch (err) {
  //     console.log(err);
  //   }

  //   console.log(location.state);

  return (
    <div className={styles.GridMain}>
      <Container>
        <Row className={styles.GallaryContainer}>
          <h1 className={styles.GridHeading}>What to Watch</h1>
          {datalist &&
            datalist.map((item) => (
              <Col className={styles.GridCard}>
                <Link
                  href={{
                    pathname: `/title/${item.id}`,
                    query: { state: item.id },
                  }}
                  state={item.id}
                >
                  <a className={styles.NavLink}>
                    <Cards item={item} />
                  </a>
                </Link>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default Grid;
