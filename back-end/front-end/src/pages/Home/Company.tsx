import React from "react";
import nav from "../../assets/Home/image.png";
const Company = () => {
  return (
    <section className="company">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="company__nav">
              <h2 className="company__nav-title">
                VALANTA TRAVEL COMPANY <span> В ЦИФРАХ</span>
              </h2>
              <p className="company__nav-text">
                На случай, если вы доверяете только сухим фактам:
              </p>
            </div>
          </div>
          <div className="col-9">
            <img className="company__img" src={nav} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="company__content">
              <h2 className="company__content-title">18</h2>
              <p className="company__content-text">
                лет компания успешно <br /> обеспечивает премиум-отдых <br />{" "}
                своим клиентам
              </p>
            </div>
          </div>
          <div className="col-4">
            <div className="company__content">
              <h2 className="company__content-title">18</h2>
              <p className="company__content-text">
                лет компания успешно <br /> обеспечивает премиум-отдых <br />{" "}
                своим клиентам
              </p>
            </div>
          </div>
          <div className="col-4">
            <div className="company__content">
              <h2 className="company__content-title">18</h2>
              <p className="company__content-text">
                лет компания успешно <br /> обеспечивает премиум-отдых <br />{" "}
                своим клиентам
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
