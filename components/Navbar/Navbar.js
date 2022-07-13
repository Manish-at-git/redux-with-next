import React, { useCallback, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { navbarToggle } from "../../redux/actions/main";

import Link from "next/link";

import NavLinks from "./NavbarLink/NavLinks";

import Image from "next/image";
// import { debounce } from "lodash";

// import { NavLink } from "react-router-dom";
// import { auth } from "../../firebase/firebase-config";
// import { signOut } from "firebase/auth";

//ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBookmark,
  faCaretDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

//IMAGES
import logo from "../../assests/images/logo.png";
import NavbarLogo2 from "../../assests/images/NavbarLogo2.png";

// import NavLinks from "./NavbarLink/NavLinks";
// import Search from "../Search/Search";

// import { useSelector, useDispatch } from "react-redux";
// import { loadSearch, loadSignOut } from "../../redux/actions/index";
// import { navbarToggle } from "../../redux/actions";
// import { useNavigate } from "react-router-dom";

// CSS
import styles from "./Navbar.module.css";
import { Container } from "react-bootstrap";

function Navbar() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.main.users);
  const navbarData = useSelector((state) => state.main.navbarOpened);

  const changeState = () => {
    dispatch(navbarToggle());
  };

  //   const toggle = useSelector((state) => state.navbarToggle);
  //   const searchdata = useSelector((state) => state.search);
  //   const signinData = useSelector((state) => state.registeredUser);
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();

  //   let navbarNotToggled = true;
  //   // console.log(signinData);

  //   const changeState = () => {
  //     dispatch(navbarToggle(navbarNotToggled));
  //   };

  //   console.log(toggle);
  //   let slide = {};
  //   toggle ? (slide = { position: "absolute", top: "-100%" }) : (slide = null);

  //   const [search, setSearch] = useState("");

  //   const handleChange = debounce((event) => {
  //     setSearch(event.target.value);
  //     dispatch(loadSearch(event.target.value));
  //   }, 1000);

  //   const logout = async () => {
  //     await signOut(auth);
  //     navigate("/register");
  //     // console.log("logout");
  //   };

  return (
    <>
      <Container fluid className={styles.NavbarMain}>
        <Container className={styles.Navbar}>
          <Link href="/">
            <a className={styles.Logo}>
              <Image src={logo} alt="IMDb Logo" />
            </a>
          </Link>
          <span className={styles.Menu} onClick={changeState}>
            <FontAwesomeIcon icon={faBars} className={styles.NavIcons} />
            Menu
          </span>
          <span className={styles.Search}>
            <input
              className={styles.SearchInput}
              type="text"
              placeholder="Search IMDb"
              //   onChange={handleChange}
              // value={search}
            />
            {/* {search && (
              <FontAwesomeIcon
                icon={faXmark}
                className="iconss"
                style={{
                  color: "grey",
                  backgroundColor: "#fff",
                  padding: "9px 10px",
                  borderRadius: "3px",
                  marginLeft: "2px",
                }}
                onClick={() => {
                  setSearch("");
                  document.querySelector(".search-input").value = "";
                }}
              />
            )} */}
          </span>
          {/* <img className="logo logo2" src={NavbarLogo2} /> */}
          <span className={styles.Logo}>
            <Image src={NavbarLogo2} alt="IMDb Logo" />
          </span>
          <div className={styles.VerticleLine}></div>

          {/* {signinData == "" ? ( */}
          <Link href="/">
            <a className={styles.Watchlist}>
              <FontAwesomeIcon icon={faBookmark} className={styles.NavIcons} />
              Watchlist
            </a>
          </Link>
          {/* //   ) : (
        //     <NavLink to="/watchlist" className="watchlist">
        //       <FontAwesomeIcon icon={faBookmark} className="nav-icons" />
        //       Watchlist
        //     </NavLink>
        //   )} */}

          {/* {signinData == "" ? ( */}
          <Link href="/">
            <a className={styles.SignIn}> Sign In</a>
          </Link>
          {/* ) : (
            <button
              className="SignIn"
              onClick={() => {
                logout();
                dispatch(loadSignOut());
              }}
            > */}
          {/* {signinData} */}
          {/* Sign Out
            </button>
          )} */}

          <span className={styles.Lang}>
            EN
            <FontAwesomeIcon icon={faCaretDown} className={styles.NavIcons} />
          </span>
        </Container>
        {navbarData ? <NavLinks /> : null}
      </Container>
      {/* {search ? <Search props={searchdata} /> : null} */}
      {/* {console.log(search)} */}
      {/* <Search /> */}
    </>
  );
}

export default Navbar;
