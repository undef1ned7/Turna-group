import React from "react";
import checked from "../../assets/Home/About/checked.svg";
const About = () => {
  return (
    <section className="about">
      <div className="container about__background">
        <h2 className="about__title">ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
        <div className="row">
          <div className="col-6">
            <div className="about__content">
              <p className="about__content-text">
                Полностью <strong>персонализированный подход</strong> к
                оформлению путешествия.
              </p>
              <button className="about__content-btn">
                <img src={checked} alt="" />
              </button>
            </div>
          </div>
          <div className="col-6">
            <div className="about__content">
              <p className="about__content-text">
                <strong>Консьерж-сервис</strong> и дополнительные услуги <br />
                по запросу клиента: от билетов на <br /> мероприятия до
                уникальных туристических <br /> маршрутов.
              </p>
              <button className="about__content-btn">
                <img src={checked} alt="" />
              </button>
            </div>
          </div>
          <div className="col-6">
            <div className="about__content">
              <p className="about__content-text">
                <strong>Эксклюзивные предложения</strong> от мировых <br />
                отельных цепочек.
              </p>
              <button className="about__content-btn">
                <img src={checked} alt="" />
              </button>
            </div>
          </div>
          <div className="col-6">
            <div className="about__content">
              <p className="about__content-text">
                <strong>18 лет</strong> мы обеспечиваем незабываемый <br />
                отдых клиентам и поддерживаем <br /> безупречную репутацию.
              </p>
              <button className="about__content-btn">
                <img src={checked} alt="" />
              </button>
            </div>
          </div>
          <div className="col-6">
            <div className="about__content">
              <p className="about__content-text">
                <strong>Хорватия, Черногория, Словения и Италия –</strong> наши
                основные направления. Мы досконально знаем эти страны.
              </p>
              <button className="about__content-btn">
                <img src={checked} alt="" />
              </button>
            </div>
          </div>
          <div className="col-6">
            <div className="about__content">
              <p className="about__content-text">
                <strong>
                  Требовательный подход и внимание к <br /> деталям
                </strong>{" "}
                мы используем для организации <br /> туров и в другие страны.
              </p>
              <button className="about__content-btn">
                <img src={checked} alt="" />
              </button>
            </div>
          </div>
          <div className="col-6">
            <div className="about__content">
              <p className="about__content-text">
                Гарантию лучшей стоимости мы <br /> обеспечиваем,{" "}
                <strong>
                  заранее выкупая <br /> авиабилеты на чартерные рейсы.
                </strong>
              </p>
              <button className="about__content-btn">
                <img src={checked} alt="" />
              </button>
            </div>
          </div>
          <div className="col-6">
            <div className="about__content">
              <p className="about__content-text">
                <strong>С нами будут только приятные сюрпризы:</strong> <br />
                мы вовремя предоставим всю необходимую <br /> информацию по
                правилам въезда, <br /> интересным событиям и другим важным{" "}
                <br />
                новостям
              </p>
              <button className="about__content-btn">
                <img src={checked} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
