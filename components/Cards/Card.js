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
import { useSelector } from "react-redux";

function Cards(props) {
  const signedIn = useSelector((state) => state.registeredUser);
  let localStorageList = JSON.parse(localStorage.getItem(signedIn)) || [];

  const navigate = useNavigate();

  const watchlist = (user) => {
    // console.log(signedIn);
    if (!(signedIn.toString().trim() === "")) {
      let duplicate = false;
      localStorageList.forEach((item) => {
        if (item.id === user.id) {
          duplicate = true;
          // console.log("dupliocate");
          // console.log(duplicate);
        }
      });

      if (duplicate === false) {
        localStorageList.push(user);
        localStorage.setItem(signedIn, JSON.stringify(localStorageList));
      }
    } else {
      navigate("/register");
    }
  };
  return (
    <div className="AppCard">
      <Card className="Cards">
        <Card.Img variant="top" src={props.item.image} className="card-img" />
        <span
          className="add-bookmark-span"
          onClick={() => watchlist(props.item)}
        >
          <FontAwesomeIcon icon={Plus} size="lg" className="add-bookmark" />
        </span>

        <Card.Body className="card-body">
          <Card.Text className="cardText rating">
            <span className="icons">
              <FontAwesomeIcon icon={solidStar} className="icons-rating" />
              7.2
            </span>
            <span className="icons thin">
              <FontAwesomeIcon icon={thinStar} className="icons-rating-thin" />
            </span>
          </Card.Text>
          <Card.Title className="cardText title">{props.item.title}</Card.Title>
          <Card.Text className="cardText watch-options">
            <FontAwesomeIcon
              icon={Plus}
              style={{ paddingRight: "8px", backgroundColor: "transparent" }}
            />
            Watchlist
          </Card.Text>
          <Card.Text className="cardText trailer">
            <span className="trailer-text">
              <FontAwesomeIcon icon={faPlay} className="trailer-text-icon" />{" "}
              Trailer
            </span>
            <span className="trailer-icon">
              <FontAwesomeIcon icon={faCircleInfo} />
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Cards;
