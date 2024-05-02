import React from "react";

import logo from "../../assets/Home/tour/logo.svg";
import logo2 from "../../assets/Home/tour/logo2.svg";
import logo3 from "../../assets/Home/tour/logo3.svg";

const Tour: React.FC = () => {
  return (
    <section className="tour">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="tour__content">
              <h2 className="tour__content-title">
                ВАШ ТУРОПЕРАТОР ВЫСОКОГО УРОВНЯ ОБСЛУЖИВАНИЯ.
              </h2>
              <p className="tour__content-text">
                Откройте мир путешествий заново.
              </p>
              <div className="tour__content-btns">
                <button className="tour__content-btns-button">
                  Что мы предлагаем?
                </button>
                <button className="tour__content-btns-button">
                  Консультация
                </button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul className="tour__menu">
              <li className="tour__menu-list">
                <span>
                  <img src={logo} alt="" className="tour__menu-list-img" />
                </span>
                <p>ИНДИВИДУАЛЬНЫЙ ПОДХОД</p>
              </li>
              <li className="tour__menu-list">
                <span>
                  <img src={logo2} alt="" className="tour__menu-list-img" />
                </span>
                <p> КОНСЬЕРЖ-СЕРВИС</p>
              </li>
              <li className="tour__menu-list">
                <span>
                  <img src={logo3} alt="" className="tour__menu-list-img" />
                </span>
                <p>ОТДЫХ ПРЕМИУМ-КЛАССА</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tour;
