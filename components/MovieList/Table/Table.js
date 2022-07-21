import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/MovieList.module.css";

import Row from "../Row/Row";

function Table({ CategorySort }) {
  return (
    <>
      {CategorySort &&
        CategorySort.map((user) => (
          <tr className={styles.tr} key={user.id}>
            <td style={{ display: "flex", alignItems: "center" }}>
              <Image src={user.image} alt="poster" width={50} height={70} />
              <small className={styles.TableRow}>
                {user.rank}.{" "}
                <Link
                  href={{
                    pathname: `/SingleMovie/${user.id}`,
                  }}
                >
                  <a className={styles.MovieListLink}>
                    <span className={styles.BlueName}>{user.title}</span>
                  </a>
                </Link>
                <small style={{ fontSize: "0.9em" }}>{`(${user.year})`}</small>
              </small>
            </td>
            <Row user={user} />
          </tr>
        ))}
    </>
  );
}

export default Table;
