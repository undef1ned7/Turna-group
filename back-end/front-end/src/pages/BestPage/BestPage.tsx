import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/redux";
import star from "../../assets/Home/Best/star.svg";
import { getHotels, selectHotels } from "../../slices/hotel";
const BestPage = () => {
  const dispatch = useAppDispatch();
  const hotels = useAppSelector(selectHotels);

  useEffect(() => {
    dispatch(getHotels());
  }, []);
  return (
    <section className="best">
      <div className="">
        <div className="best__head container">
          <h2 className="best__head-title">Отели</h2>
        </div>
        <div className="row">
          {hotels.map((hotel) => {
            return (
              <div className="col-4" key={hotel.id}>
                <div
                  className="best__content"
                  style={{ backgroundImage: `url(${hotel.image})` }}
                >
                  <p className="best__content-address">{hotel.location}</p>
                  <div className="best__content-block">
                    <div className="best__content-block-star">
                      {Array.from({ length: hotel.rating }, (_, index) => (
                        <span key={index}>
                          <img src={star} alt="" />
                        </span>
                      ))}
                    </div>
                    <h4 className="best__content-block-title">{hotel.name}</h4>
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

export default BestPage;
