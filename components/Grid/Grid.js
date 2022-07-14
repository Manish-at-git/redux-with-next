import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../Cards/Card";
import WhatToWatch from "../WhatToWatch/WhatToWatch";
import ErrorHandler from "../ErrorHander/ErrorHandler";

import { useSelector, useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

import "./Grid.css";
import { loadMovieList } from "../../redux/actions";

function Grid() {
  const location = useLocation();
  const datalist = useSelector((state) => state.movielist);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovieList(location.state));
  }, []);

  let data;

  try {
    data = datalist[0].items;
  } catch (err) {
    console.log(err);
  }

  console.log(location.state);

  return (
    <div className="grid-main">
      <Container>
        <Row className="Gallary_Container">
          <h1 className="grid-heading">What to Watch</h1>
          {data &&
            data.map((item) => (
              <Col className="Grid-Card">
                <NavLink
                  to={`/title/${item.id}`}
                  state={item.id}
                  className="NavLink"
                >
                  <Cards item={item} />
                </NavLink>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default Grid;
