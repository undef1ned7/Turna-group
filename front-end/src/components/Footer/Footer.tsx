import React from "react";
import logo from "../../assets/Footer/logo.png";
import facebook from "../../assets/Header/facebook.svg";
import instagram from "../../assets/Header/instagram.svg";
import youtube from "../../assets/Header/youtube.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__menu">
          <div className="footer__menu-content">
            <div className="footer__menu-content-row">
              <img className="footer__menu-content-logo" src={logo} alt="" />
              <div className="row">
                <div className="col-3">
                  <div className="footer__menu-content">
                    <ul>
                      <li>Отели</li>
                      <li>Страны</li>
                      <li>Maistra online</li>
                      <li>Туры online</li>
                    </ul>
                  </div>
                </div>
                <div className="col-3">
                  <div className="footer__menu-content">
                    <ul>
                      <li>Агентам</li>
                      <li>О нас</li>
                      <li>Блог</li>
                    </ul>
                  </div>
                </div>
                <div className="col-3">
                  <div className="footer__menu-content">
                    <ul>
                      <p>Режим работы</p>
                      <li>Пн-Пт 10:00-19:00</li>
                    </ul>
                  </div>
                </div>
                <div className="col-3">
                  <div className="footer__menu-content">
                    <ul>
                      <li>+38 (000) 000-00-00</li>
                      <li>+38 (000) 000-00-00</li>
                      <p>Режим работы</p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__menu-social">
              <p>Copyright Coderun 2024 Все права защищены</p>
              <ul>
                <li>
                  <a href="#">
                    <img src={facebook} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={instagram} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={youtube} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
