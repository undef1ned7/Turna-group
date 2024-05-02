import React, { useEffect } from "react";
import Staff from "../../components/Staff/Staff";
import { useAppDispatch, useAppSelector } from "../../app/redux";
import { getDirections, selectDirections } from "../../slices/direction";

const About = () => {
  // const city = [
  //   {
  //     image:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/375px-Flag_of_Croatia.svg.png",
  //     title: "ХОРВАТИЯ",
  //   },
  //   {
  //     image:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/375px-Flag_of_Croatia.svg.png",
  //     title: "ХОРВАТИЯ",
  //   },
  //   {
  //     image:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/375px-Flag_of_Croatia.svg.png",
  //     title: "ХОРВАТИЯ",
  //   },
  //   {
  //     image:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/375px-Flag_of_Croatia.svg.png",
  //     title: "ХОРВАТИЯ",
  //   },
  // ];
  const dispatch = useAppDispatch();
  const city = useAppSelector(selectDirections);
  useEffect(() => {
    dispatch(getDirections());
  }, []);
  return (
    <section className="company">
      <div className="container">
        <div className="company__about">
          <div className="row">
            <div className="col-6">
              <h2 className="company__about-title">О компании</h2>
              <p className="company__about-text">
                Основанная в 2002 году компания «ВАЛАНТА» – ведущий украинский
                туроператор, специализирующийся исключительно на дизайнерских
                турах в Хорватию, Италию, Словению и Черногорию.
              </p>
            </div>
            <div className="col-6">
              <p className="company__about-text">
                Мы – своего рода туристический дизайнер, который поможет Вам
                «смоделировать» и осуществить путешествие Вашей мечты.
              </p>
            </div>
          </div>
        </div>
        <div className="company__direction">
          <h2 className="company__about-title title">Куда мы отправляем</h2>
          <div className="row">
            {city.map((item) => {
              return (
                <div className="col-3">
                  <div className="company__col">
                    <img src={item.flag} className="company__col-img" alt="" />
                    <h3 className="company__col-title">{item.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Staff />
      </div>
    </section>
  );
};

export default About;
