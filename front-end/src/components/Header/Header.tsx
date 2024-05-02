import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/redux";
import book from "../../assets/Header/book.svg";
import facebook from "../../assets/Header/facebook.svg";
import instagram from "../../assets/Header/instagram.svg";
import phone from "../../assets/Header/phone.svg";
import search from "../../assets/Header/search.svg";
import youtube from "../../assets/Header/youtube.svg";
import { getSettings, selectSettings } from "../../slices/settings";
import HeaderBottom from "./HeaderBottom";
import Navbar from "./Navbar";
interface Props {
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}
const Header: React.FC<Props> = ({ status, setStatus }) => {
  const dispatch = useAppDispatch();
  const settings = useAppSelector(selectSettings);
  useEffect(() => {
    dispatch(getSettings());
  }, []);
  const [burger, setBurger] = useState(false);
  return (
    <header className={burger ? "header active" : "header"}>
      <div className="header__top">
        <div className="container header__container">
          <NavLink to={"/"} className={"header__container-link"}>
            {settings.map((logo) => {
              return (
                <img
                  key={logo.id}
                  src={logo.logo}
                  className="header__container-img"
                  alt=""
                />
              );
            })}
          </NavLink>
          <span className="header__line"></span>
          <div className="header__container-course">
            <p className="header__container-course-text">USD 28,90</p>
            <p className="header__container-course-text">EUR 35,00</p>
          </div>
          <span className="header__line"></span>
          <div className="header__container-social">
            <a href="#">
              <img src={facebook} alt="" />
            </a>
            <a href="#">
              <img src={instagram} alt="" />
            </a>
            <a href="#">
              <img src={youtube} alt="" />
            </a>
          </div>
          <span className="header__line"></span>
          <div className="header__container-number">
            <div>
              {settings.map((number) => {
                return <h3 key={number.id}>{number.phone_number}</h3>;
              })}
            </div>
            <img src={phone} alt="" />
          </div>
          <span className="header__line"></span>
          <div className="header__container-maistra">
            <h3 className="header__container-maistra-title">Maistra ONLINE</h3>
            <button className="header__container-maistra-btn">
              <img src={book} alt="" />
            </button>
          </div>
          <div className="header__container-tours">
            <h3 className="header__container-maistra-title">Maistra ONLINE</h3>
            <button className="header__container-tours-btn">
              <img src={search} alt="" />
            </button>
          </div>
          <div className="header__burger" onClick={() => setBurger(!burger)}>
            <span></span>
          </div>
        </div>
      </div>
      <HeaderBottom status={status} />
      <Navbar setBurger={setBurger} burger={burger} status={status} />
    </header>
  );
};

export default Header;
