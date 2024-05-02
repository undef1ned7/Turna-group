import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/redux";
import calendar from "../../assets/Home/Blog/calendar.svg";
import { getNews, selectNews } from "../../slices/news";

const NewsPages: React.FC = () => {
  const dispatch = useAppDispatch();
  const news = useAppSelector(selectNews);
  useEffect(() => {
    dispatch(getNews());
  }, []);
  return (
    <section className="news">
      <div className="container">
        <div className="best__head container">
          <h2 className="best__head-title">ВАЖНЫЕ НОВОСТИ</h2>
        </div>
        <div className="row">
          {news.map((newsItem) => {
            return (
              <div className="col-3" key={newsItem.id}>
                <div className="blog__content">
                  <img
                    src={newsItem.image}
                    className="blog__content-img"
                    alt=""
                  />
                  <div className="blog__content-row">
                    <p className="blog__content-view">
                      <img src={calendar} alt="" /> {newsItem.date}
                    </p>
                  </div>
                  <h2 className="blog__content-title">{newsItem.title}</h2>
                  <Link className="blog__content-link" to={"/"}>
                    Подробнее
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewsPages;
