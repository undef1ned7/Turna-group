import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/redux";
import { getTours, selectTours } from "../../slices/tour";

const TourPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const tours = useAppSelector(selectTours);
  useEffect(() => {
    dispatch(getTours());
  }, []);
  return (
    <section className="current">
      <div className="container">
        <div className="best__head container">
          <h2 className="best__head-title">АКТУАЛЬНЫЕ ТУРЫ</h2>
        </div>
        <div className="row">
          {tours.map((tour) => {
            return (
              <div className="col-4" key={tour.id}>
                <div className="current__content">
                  <div
                    className="current__content-img"
                    style={{ backgroundImage: `url(${tour.image})` }}
                  >
                    <span>{tour.location}</span>
                  </div>
                  <div className="current__content-padd">
                    <h3 className="current__content-title">{tour.title}</h3>
                    <p className="current__content-text">{tour.description}</p>
                    <div className="current__content-box">
                      <p className="current__content-price">
                        от <strong>{+tour.earnings}</strong> KGS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TourPage;
