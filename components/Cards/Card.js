import { useEffect, useState } from "react";
import { useRouter } from "next/router";

//CSS
import Card from "react-bootstrap/Card";
import styles from "./Card.module.css";

///ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as thinStar } from "@fortawesome/free-regular-svg-icons";
import {
  faCircleInfo,
  faCheck,
  faPlay,
  faPlus as Plus,
  faStar as solidStar,
} from "@fortawesome/free-solid-svg-icons";

///FIREBASE
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";

function Cards(props) {
  const router = useRouter();
  const [userLogged, setUserLogged] = useState({});
  const [icon, setIcon] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserLogged(user);
    });
  }, []);

  let localStorageList;

  if (typeof window !== "undefined") {
    localStorageList =
      JSON.parse(localStorage.getItem(userLogged?.email)) || [];
  }

  const [local, setLocal] = useState(localStorageList);
  let icons = false;

  if (userLogged != undefined) {
    if (typeof window !== "undefined") {
      localStorageList.forEach((item) => {
        if (item.id === props.item.id) {
          icons = true;
        }
      });
    } else {
      console.log("App running on server");
    }
  }

  const watchlist = (user, e) => {
    e.preventDefault();
    if (userLogged != undefined) {
      if (typeof window !== undefined) {
        let duplicate = false;
        let localStorageList =
          JSON.parse(localStorage.getItem(userLogged?.email)) || [];

        localStorageList.forEach((item) => {
          if (item.id === user.id) {
            duplicate = true;
          }
        });
        if (duplicate === false) {
          localStorageList.push(user);
          localStorage.setItem(
            userLogged?.email,
            JSON.stringify(localStorageList)
          );
          setLocal(localStorageList);
          setIcon(false);
        } else {
          setIcon(true);
        }
      } else {
        console.log("App running on server");
      }
    } else {
      router.push("/register");
    }
  };

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
          onClick={(e) => watchlist(props.item, e)}
        >
          {icon == true || icons == true ? (
            <FontAwesomeIcon
              icon={faCheck}
              size="lg"
              className={styles.addBookmark}
            />
          ) : (
            <FontAwesomeIcon
              icon={Plus}
              size="lg"
              className={styles.addBookmark}
            />
          )}
        </span>

        <Card.Body className={styles.CardBody}>
          <Card.Text className={styles.Rating}>
            <span className={styles.icons}>
              <FontAwesomeIcon
                icon={solidStar}
                className={styles.IconsRating}
              />
              {props.item.imDbRating}
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
