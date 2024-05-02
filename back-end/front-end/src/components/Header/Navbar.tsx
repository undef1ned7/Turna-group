import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import arrow from "../../assets/Header/arrow.svg";
import logo from "../../assets/Header/logo.svg";

interface Props {
  status: string;
  setBurger: React.Dispatch<React.SetStateAction<boolean>>;
  burger: boolean;
}
const Navbar: React.FC<Props> = ({ status, setBurger, burger }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenS, setIsOpenS] = useState(false);
  return (
    <div className={burger ? "header__nav active" : "header__nav"}>
      <div className="header__nav-head">
        <NavLink to={"/"}>
          <img src={logo} alt="" />
        </NavLink>
        <div className="header__burger" onClick={() => setBurger(!burger)}>
          <span></span>
        </div>
      </div>
      <div className="header__bottom-menu">
        <p
          className={`header__bottom-menu-text ${
            status === "/hotels" ? "active" : ""
          }`}
          onClick={() => setBurger(!burger)}
        >
          <Link to="/all-hotels">Отели</Link>
        </p>
        <img src={arrow} alt="" />
      </div>

      {/* <div className="header__bottom-menu">
        <p
          className={`header__bottom-menu-text ${
            status === "/countries" ? "active" : ""
          }`}
          onClick={() => setBurger(!burger)}
        >
          <Link to="/countries">Страны</Link>
        </p>
        <img src={arrow} alt="" />
      </div> */}

      <div className="header__bottom-menu">
        <p
          className={`header__bottom-menu-text ${
            status === "/tours" ? "active" : ""
          }`}
          onClick={() => setBurger(!burger)}
        >
          <Link to="/all-tour">Каталог туров</Link>
        </p>
        <img src={arrow} alt="" />
      </div>

      <div className="header__bottom-menu">
        <p
          className={`header__bottom-menu-text ${
            status === "/about" ? "active" : ""
          }`}
        >
          <Link to="/about">О нас</Link>
        </p>
        <img src={arrow} alt="" />
      </div>

      <div className="header__bottom-menu">
        <p
          className={`header__bottom-menu-text ${
            status === "/blog" ? "active" : ""
          }`}
          onClick={() => setBurger(!burger)}
        >
          <Link to="/all-blog">Блог</Link>
        </p>
        <img src={arrow} alt="" />
      </div>

      <div className="header__bottom-menu">
        <p
          className={`header__bottom-menu-text ${
            status === "/FAQ" ? "active" : ""
          }`}
          onClick={() => setBurger(!burger)}
        >
          <Link to="/FAQ">FAQ</Link>
        </p>
      </div>

      <div className="header__bottom-menu">
        <p
          className={`header__bottom-menu-text ${
            status === "/contact" ? "active" : ""
          }`}
          onClick={() => setBurger(!burger)}
        >
          <Link to="/contact">Контакты</Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
