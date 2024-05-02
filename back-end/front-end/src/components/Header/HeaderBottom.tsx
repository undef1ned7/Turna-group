import React, { useState } from "react";
import arrow from "../../assets/Header/arrow.svg";
import searchBot from "../../assets/Header/searchBot.svg";
import { Link } from "react-router-dom";

interface Props {
  status: string;
}

const HeaderBottom: React.FC<Props> = ({ status }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenS, setIsOpenS] = useState(false);

  return (
    <div className="header__bottom">
      <img src={searchBot} alt="" />

      <div className="header__bottom-menu">
        <p
          className={`header__bottom-menu-text ${
            status === "/all-hotels" ? "active" : ""
          }`}
        >
          <Link to="/all-hotels">Отели</Link>
        </p>
        <img src={arrow} alt="" />
      </div>
      {/* 
      <div className="header__bottom-menu">
        <p
          className={`header__bottom-menu-text ${
            status === "/countries" ? "active" : ""
          }`}
        >
          <Link to="/countries">Страны</Link>
        </p>
        <img src={arrow} alt="" />
      </div> */}

      {/* <div
        className={
          isOpen ? "header__bottom-dropdown active" : "header__bottom-dropdown"
        }
        onMouseEnter={() => setIsOpen(!isOpen)}
        // onMouseLeave={() => setIsOpen(!isOpen)}
      >
        <div className="header__bottom-menu">
          <p
            className={`header__bottom-menu-text ${
              status === "/flights" ? "active" : ""
            }`}
          >
            <Link to="/flights">Авиа</Link>
          </p>
          <img src={arrow} alt="" />
        </div>
        <ul
          className="header__dropdown"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <li className="header__dropdown-list">Чартерные рейсы в Хорватию</li>
          <li className="header__dropdown-list">Регулярные рейсы в Хорватию</li>
          <li className="header__dropdown-list">
            Чартерные рейсы в Черногорию
          </li>
          <li className="header__dropdown-list">
            Регулярные рейсы в Черногорию
          </li>
          <li className="header__dropdown-list">Авиаперелеты в Италию</li>
          <li className="header__dropdown-list">Авиаперелеты в Словению</li>
          <li className="header__dropdown-list">Авиаперелеты по всему миру</li>
        </ul>
      </div> */}

      <div className="header__bottom-menu">
        <p
          className={`header__bottom-menu-text ${
            status === "/all-tour" ? "active" : ""
          }`}
        >
          <Link to="/all-tour">Каталог туров</Link>
        </p>
        <img src={arrow} alt="" />
      </div>

      {/* <div
        className={
          isOpenS ? "header__bottom-dropdown active" : "header__bottom-dropdown"
        }
        onMouseEnter={() => setIsOpenS(true)}
      >
        <div className="header__bottom-menu">
          <p
            className={`header__bottom-menu-text ${
              status === "/agents" ? "active" : ""
            }`}
          >
            <Link to="/agents">Агентам</Link>
          </p>
          <img src={arrow} alt="" />
        </div>
        <ul
          className="header__dropdown"
          onMouseEnter={() => setIsOpenS(true)}
          onMouseLeave={() => setIsOpenS(false)}
        >
          <li className="header__dropdown-list">Условия сотрудничества</li>
          <li className="header__dropdown-list">Вебинары</li>
        </ul>
      </div> */}

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
            status === "/all-blog" ? "active" : ""
          }`}
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
        >
          <Link to="/FAQ">FAQ</Link>
        </p>
      </div>

      <div className="header__bottom-menu">
        <p
          className={`header__bottom-menu-text ${
            status === "/contact" ? "active" : ""
          }`}
        >
          <Link to="/contact">Контакты</Link>
        </p>
      </div>
    </div>
  );
};

export default HeaderBottom;
