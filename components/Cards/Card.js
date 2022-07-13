import Card from "react-bootstrap/Card";
// import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as thinStar } from "@fortawesome/free-regular-svg-icons";

import {
  faCircleInfo,
  faPlay,
  faPlus as Plus,
  faStar as solidStar,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Card.module.css";
// import { useSelector } from "react-redux";

function Cards(props) {
  // const signedIn = useSelector((state) => state.registeredUser);
  // let localStorageList = JSON.parse(localStorage.getItem(signedIn)) || [];

  // const navigate = useNavigate();

  // const watchlist = (user) => {
  //   // console.log(signedIn);
  //   if (!(signedIn.toString().trim() === "")) {
  //     let duplicate = false;
  //     localStorageList.forEach((item) => {
  //       if (item.id === user.id) {
  //         duplicate = true;
  //         // console.log("dupliocate");
  //         // console.log(duplicate);
  //       }
  //     });

  //     if (duplicate === false) {
  //       localStorageList.push(user);
  //       localStorage.setItem(signedIn, JSON.stringify(localStorageList));
  //     }
  //   } else {
  //     navigate("/register");
  //   }
  // };
  return (
    <div className={styles.AppCard}>
      <Card className={styles.Cards}>
        <Card.Img
          variant="top"
          src={props.item.image}
          className={styles.CardImg}
        />
        <span
          className={styles.addBookmarkSpan}
          // onClick={() => watchlist(props.item)}
        >
          <FontAwesomeIcon
            icon={Plus}
            size="lg"
            className={styles.addBookmark}
          />
        </span>

        <Card.Body className={styles.CardBody}>
          <Card.Text className={styles.Rating}>
            <span className={styles.icons}>
              <FontAwesomeIcon
                icon={solidStar}
                className={styles.IconsRating}
              />
              7.2
            </span>
            <span className={styles.Thin}>
              <FontAwesomeIcon
                icon={thinStar}
                className={styles.iconsRatingThin}
              />
            </span>
          </Card.Text>
          <Card.Title className={styles.Title}>{props.item.title}</Card.Title>
          <Card.Text className={styles.WatchOptions}>
            <FontAwesomeIcon
              icon={Plus}
              style={{ paddingRight: "8px", backgroundColor: "transparent" }}
            />
            Watchlist
          </Card.Text>
          <Card.Text className={styles.Trailer}>
            <span className={styles.TrailerText}>
              <FontAwesomeIcon
                icon={faPlay}
                className={styles.TrailerTextIcon}
              />{" "}
              Trailer
            </span>
            <span className={styles.TrailerIcon}>
              <FontAwesomeIcon icon={faCircleInfo} />
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Cards;
