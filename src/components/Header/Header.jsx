import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const [mobile, setMobile] = useState(window.innerWidth <= 768);
  const [menuOpened, setmenuOpened] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="header" id="header">
      <img className="logo" src={Logo} alt="" />
      {menuOpened === false && mobile == true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setmenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <Link
            onClick={() => setmenuOpened(false)}
            activeClass="active"
            to="header"
            spy={true}
            smooth={true}
          >
Home </Link>
          <Link
            onClick={() => setmenuOpened(false)}
            to="programs"
            spy={true}
            smooth={true}
          >
            Programs
          </Link>
          <Link
           onClick={() => setmenuOpened(false)}
           to="reasons"
           spy={true}
           smooth={true}

           >{mobile} Why us</Link>
          <Link
            onClick={() => setmenuOpened(false)}
            to="plans"
            spy={true}
            smooth={true}
          >
            Plans
          </Link>
          <Link
            onClick={() => setmenuOpened(false)}
            to="testimonials"
            spy={true}
            smooth={true}
          >
            Testimonials
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Header;
