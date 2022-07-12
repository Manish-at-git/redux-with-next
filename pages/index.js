import { useEffect, useState } from "react";
import { loadUsers } from "../redux/actions/main";
import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "../redux/store";
import { END } from "redux-saga";

import Link from "next/link";

// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  // useEffect(() => {
  //   dispatch(loadUsers());
  // }, []);
  console.log(data);

  return (
    <>
      <div className={styles.container}>
        {/* <p> {data.main.main.users}</p> */}
        {console.log(data, "hello")}
        {/* {data.map((item) => (
          <Link
            href={{
              pathname: `${item.id}`,
            }}
          >
            <a>
              <h1>{item.name}</h1>
            </a>
          </Link>
        ))} */}

        <div>
          <Link href="/Home">
            <a>home</a>
          </Link>
          <Link href="/[slug]">
            <a>home</a>
          </Link>
        </div>
      </div>
      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(loadUsers());
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Home;
