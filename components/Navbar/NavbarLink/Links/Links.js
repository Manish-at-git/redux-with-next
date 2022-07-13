import React from "react";

import Container from "react-bootstrap/Container";
import styles from "./Links.module.css";

import Link from "next/link";

function Links(props) {
  const { title, List } = props;

  return (
    <Container className={styles.Link}>
      <h4 className={styles.Heading}>{title}</h4>

      {List.map((item, id) => (
        <Link
          href="/"
          // state={{
          //   title: `${item.category}`,
          //   url: `https://imdb-api.com/en/API/${item.url}/${API_KEY}`,
          // }}
          // key={id}
        >
          <a className={styles.Links}>{item.category}</a>
        </Link>
      ))}
    </Container>
  );
}

export default Links;
