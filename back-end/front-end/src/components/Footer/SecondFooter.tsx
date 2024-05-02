import React from "react";
import logo from "../../assets/Footer/logo.png";
import facebook from "../../assets/Header/facebook.svg";
import instagram from "../../assets/Header/instagram.svg";
import youtube from "../../assets/Header/youtube.svg";
import Form from "../Form/Form";

const SecondFooter = () => {
  return (
    <footer className="secondF">
      <div className="footer__container">
        <Form />
        <div className="secondF__bottom">
          <div className="secondF__bottom-back">
            <div className="container">
              <div className="secondF__bottom-menu">
                <div className="row">
                  <div className="col-3">
                    <div className="secondF__bottom-menu-content">
                      <img src={logo} alt="" />
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="secondF__bottom-menu-content">
                      <ul>
                        <li>Отели</li>
                        <li>Страны</li>
                        <li>Maistra online</li>
                        <li>Туры online</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="secondF__bottom-menu-content">
                      <ul>
                        <li>Агентам</li>
                        <li>О нас</li>
                        <li>Блог</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="secondF__bottom-menu-content">
                      <ul>
                        <p>Режим работы</p>
                        <li>Пн-Пт 10:00-19:00</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="secondF__bottom-menu-social">
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
        </div>
      </div>
    </footer>
  );
};

export default SecondFooter;
