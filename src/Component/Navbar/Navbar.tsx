import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import slackIcon from "../../assets/slack-icon.svg";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const userEmail = localStorage.getItem("userEmail");
  const userName = userEmail?.substring(0, userEmail.lastIndexOf("@"));
  if (userName) {
    localStorage.setItem("userName", userName);
  }

  return (
    <nav className="navbar">
      <div className="iconPage">
        <Link to="/" className="text-link">
          <div className="nameWithLogo">
            <img src={slackIcon} alt="logo" className="logoImg" />
            <h4>slack</h4>
          </div>
        </Link>

        <div className="nav_rightside">
          <Link to="/" className="nav_link">
            Product
          </Link>
          <Link to="/category-page" className="nav_link">
            Enterprise
          </Link>
          <Link to="/category-page" className="nav_link">
            Resources
          </Link>
          <Link to="/category-page" className="nav_link">
            Pricing
          </Link>
        </div>
      </div>
      <div className="searchViewmain">
        <IoIosSearch className="seachIcon" />
        <p className="signintxt">Sign in</p>
        <button className="btn secondaryBtn">TALK TO SALES</button>
        <a
          href="https://chromium.slack.com/signup#/domain-signup"
          target="_blank"
        >
          <button className="btn primaryBtn">TRY FOR FREE</button>
        </a>
      </div>


    </nav>
  );
};

export { Navbar };
