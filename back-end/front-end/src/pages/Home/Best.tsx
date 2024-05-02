import { Link } from "react-router-dom";
import star from "../../assets/Home/Best/star.svg";
import { Hotel } from "../../type";
interface Props {
  hotels: Hotel[];
}
const Best: React.FC<Props> = ({ hotels }) => {
  return (
    <section className="best">
      <div className="">
        <div className="best__head container">
          <h2 className="best__head-title">Лучшее Отели</h2>
          <Link to={"/all-hotels"} className="best__head-btn">
            Все отели
          </Link>
        </div>
        <div className="row">
          {hotels.slice(0, 3).map((hotel) => {
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

export default Best;
