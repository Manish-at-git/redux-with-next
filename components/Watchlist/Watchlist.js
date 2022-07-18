import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Watchlist.css";

import image from "../../assets/images/share.png";

import Categories from "../MovieList/Categories/Categories";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as thinStar } from "@fortawesome/free-regular-svg-icons";
import {
  faCheck,
  faStar as solidStar,
} from "@fortawesome/free-solid-svg-icons";

function Watchlist() {
  const signedIn = useSelector((state) => state.registeredUser);
  let localStorageList = JSON.parse(localStorage.getItem(signedIn)) || [];

  return (
    <div className="MovieList">
      <div className="container MovieList-container">
        <div className="MovieList-main">
          <div className="MovieList-page">
            <div className="MovieList-headerpage">
              <div className="MovieList-head">
                <h5>IMDb Charts</h5>
                <h3 className="MovieList-header">
                  {/* {signedIn.split("@")[0]}'s  */}Watchlist
                </h3>
                <small className="MovieList-byline">
                  IMDb Watchlist as rated by regular IMDb voters.
                </small>
              </div>
              <div className="image">
                <img src={image} />
              </div>
            </div>
            <hr />

            <div className="MovieList-list">
              <div>
                <table>
                  <tr style={{ border: "none" }}>
                    <th
                      style={{
                        width: "70%",
                        fontSize: "0.8rem",
                        paddingLeft: "60px",
                      }}
                    >
                      Rank & Title
                    </th>
                    <th
                      style={{
                        fontSize: "0.8rem",
                      }}
                    >
                      <span>
                        <span className="your-Rating">IMDb</span>
                        <span className="your-Rating">Rating</span>
                      </span>
                    </th>
                    <th
                      style={{
                        fontSize: "0.8rem",
                      }}
                    >
                      <span>
                        <span className="your-Rating">Your</span>
                        <span className="your-Rating">Rating</span>
                      </span>
                    </th>
                    <th></th>
                  </tr>
                  {signedIn ? (
                    localStorageList.map((user) => (
                      <tr>
                        <td>
                          <img
                            className="table-image"
                            src={user.image}
                            style={{ width: "50px" }}
                          />
                          <small className="table-row">
                            {user.rank ? user.rank : Math.ceil(user.imDbRating)}
                            .{" "}
                            <NavLink
                              to={`/title/${user.id}`}
                              state={user.id}
                              className="MovieList-NavLink"
                            >
                              <span className="blueName">{user.title}</span>
                            </NavLink>
                            <small
                              style={{ fontSize: "0.9em" }}
                            >{`(${user.year})`}</small>
                            {/* {console.log(user.id)} */}
                          </small>
                        </td>
                        <td
                          style={{
                            fontSize: "0.8rem",
                          }}
                        >
                          <FontAwesomeIcon
                            icon={solidStar}
                            style={{
                              color: "#f5c518",
                              padding: "0 5px",
                            }}
                            size="lg"
                          />
                          <b>{user.imDbRating}</b>
                        </td>
                        <td>
                          <FontAwesomeIcon
                            icon={thinStar}
                            style={{ color: "grey", opacity: "0.5" }}
                          />
                        </td>
                        <td>
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{ color: "green", cursor: "pointer" }}
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <div>Please Sign In</div>
                  )}
                </table>
              </div>
            </div>
          </div>
          <Categories />
        </div>
      </div>
    </div>
  );
}

export default Watchlist;
