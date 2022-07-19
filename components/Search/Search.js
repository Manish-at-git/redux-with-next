import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
// import ErrorHandler from "../ErrorHander/ErrorHandler";

import styles from "./Search.module.css";

import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

import Link from "next/link";

function Search(props) {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  const isLoading = useSelector((state) => state.main.search.loading);
  const searchdata = useSelector((state) => state.main.search.searchResults);
  // const error = useSelector((state) => state.error);
  let SeacrhData;
  // let errorData;
  // try {
  //   SeacrhData = props.props[0].results;
  // } catch (error) {
  console.log(isLoading);
  // }
  return (
    <Container className={styles.SearchPop}>
      {isLoading ? (
        <div
          style={{
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BeatLoader color="#f5c518" cssOverride={override} size={15} />
        </div>
      ) : searchdata.length ? (
        searchdata.map((item) => (
          <>
            <Row>
              <Col lg={1} className={styles.SearchFloatImage}>
                <div className={styles.WhiteName}>
                  <Image src={item.image} alt="poster" width={50} height={70} />
                </div>
              </Col>
              <Col lg={11} className={styles.SearchFloatContent}>
                <Link
                  href={{
                    pathname: `/SingleMovie/${item.id}`,
                  }}
                  key={item.id}
                >
                  <a className={styles.SearchLink}>{item.title}</a>
                </Link>
                <div>{item.description}</div>
              </Col>
            </Row>
            <hr className={styles.SearchHr} />
          </>
        ))
      ) : (
        console.log("error")
      )}
    </Container>
  );
}

export default Search;
