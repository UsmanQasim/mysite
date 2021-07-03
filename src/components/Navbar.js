import React, { useState, useEffect } from "react";
import { Button, Pane, ManualIcon, Avatar } from "evergreen-ui";
import { Link } from "react-router-dom";
import "./Styles/Navbar.scss";

const Navbar = () => {
  //Resize navbar
  const [width, setWidth] = useState(window.innerWidth);

  const resizeHandler = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  //Navbar Change Color

  const [navBar, setNavbar] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= window.innerHeight) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <Pane
        className={`navBar ${width > 600 ? "navbar_md" : "navbar_sm"} ${
          navBar ? "navBar2" : ""
        } `}
      >
        <Avatar name="Usman Qasim" size={40} />
        <Pane
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          width="30vw"
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button className="btn" size="large">
              Home
            </Button>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Button className="btn" iconBefore={ManualIcon} size="large">
              About
            </Button>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Button className="btn" size="large">
              Contacts
            </Button>
          </Link>
        </Pane>
      </Pane>
    </>
  );
};

export default Navbar;
