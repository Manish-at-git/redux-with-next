import React from "react";
import Container from "react-bootstrap/Container";
import styles from "./NavLink.module.css";

import { Movies, TV, Awards } from "../../../pages/NavbarRoutes";

import { navbarToggle } from "../../../redux/actions/main";

import Logo from "../../../assests/images/logo-NavbarLink.png";
import CloseButton from "../../../assests/images/close-Button-Navlink.png";

import Links from "./Links/Links";
import Image from "next/image";

import { useDispatch } from "react-redux";

function NavLinks() {
  const dispatch = useDispatch();

  const CloseNavbar = () => {
    dispatch(navbarToggle());
  };

  return (
    <Container className={styles.NavLinks}>
      <div className={styles.NavLinkLogo}>
        <Image src={Logo} />
        <span className={styles.CloseButton}>
          <Image src={CloseButton} onClick={CloseNavbar} />
        </span>
      </div>
      <div className={styles.LinkCards}>
        <Links title="Movies" List={Movies} />
        <Links title="TV Shows" List={TV} />
        <Links title="Awards" List={Awards} />
      </div>
    </Container>
  );
}

export default NavLinks;
