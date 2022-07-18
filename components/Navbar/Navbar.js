import React, { useCallback, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getSearchMovie, navbarToggle } from "../../redux/actions/main";

import Link from "next/link";

import NavLinks from "./NavbarLink/NavLinks";

import Image from "next/image";
import { debounce } from "lodash";

// import { auth } from "../../firebase/firebase-config";
// import { signOut } from "firebase/auth";

//ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBookmark,
  faCaretDown,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

//IMAGES
import Logo from "../../assests/images/logo.png";
import NavbarLogo2 from "../../assests/images/NavbarLogo2.png";

// import { loadSearch, loadSignOut } from "../../redux/actions/index";

// CSS
import styles from "./Navbar.module.css";
import { Container } from "react-bootstrap";
import Search from "../Search/Search";

function Navbar() {
  const dispatch = useDispatch();
  const navbarData = useSelector((state) => state.main.navbarOpened);
  const searchdata = useSelector((state) => state.main.search.searchResults);
  //   const signinData = useSelector((state) => state.registeredUser);

  const [search, setSearch] = useState("");

  const changeState = () => {
    dispatch(navbarToggle());
  };

  const handleChange = debounce((event) => {
    setSearch(event.target.value);
    dispatch(getSearchMovie(event.target.value));
    console.log(search);
  }, 1000);

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
              <Image src={Logo} alt="IMDb Logo" />
            </a>
          </Link>
          <span className={styles.Menu} onClick={changeState}>
            <FontAwesomeIcon icon={faBars} className={styles.NavIcons} />
            Menu
          </span>
          <span className={styles.Search}>
            <input
              id="search-input"
              className={styles.SearchInput}
              type="text"
              placeholder="Search IMDb"
              onChange={handleChange}
            />
            {search && (
              <FontAwesomeIcon
                icon={faXmark}
                className={styles.iconss}
                style={{
                  color: "grey",
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "3px",
                  marginLeft: "2px",
                }}
                onClick={() => {
                  setSearch("");
                  document.querySelector("#search-input").value = "";
                }}
              />
            )}
          </span>
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
        {navbarData && <NavLinks />}
      </Container>
      {search && <Search props={searchdata} />}
    </>
  );
}

export default Navbar;
