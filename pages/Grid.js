import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../components/Cards/Card";
// import ErrorHandler from "../ErrorHander/ErrorHandler";

import { useSelector } from "react-redux";
import Link from "next/link";
import styles from "../components/Grid/Grid.module.css";
import { useRouter } from "next/router";
// import { loadMovieList } from "../../redux/actions";

function Grid() {
  const router = useRouter();
  const Data = router.query.Container;
  // let data = JSON.parse(Data);
  // console.log(data);

  const datalistOne = useSelector((state) => state.main.moviePick);
  const datalistTwo = useSelector((state) => state.main.moviePickTwo);

  let datalist;
  if (Data === "Two") {
    datalist = datalistTwo;
  } else {
    datalist = datalistOne;
  }

  return (
    <div className={styles.GridMain}>
      <Container>
        <Row className={styles.GallaryContainer}>
          <h1 className={styles.GridHeading}>What to Watch</h1>
          {datalist &&
            datalist.map((item) => (
              <Col className={styles.GridCard} key={item.id}>
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
