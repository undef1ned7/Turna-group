import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/redux";
import Form from "../../components/Form/Form";
import { getBlogs, selectBlogs } from "../../slices/blog";
import { getHotels, selectHotels } from "../../slices/hotel";
import { getNews, selectNews } from "../../slices/news";
import { getTours, selectTours } from "../../slices/tour";
import About from "./About";
import Best from "./Best";
import Blog from "./Blog";
import Company from "./Company";
import Current from "./Current";
import News from "./News";
import Tour from "./Tour";
const Home = () => {
  const dispatch = useAppDispatch();
  const hotels = useAppSelector(selectHotels);
  const blogs = useAppSelector(selectBlogs);
  const news = useAppSelector(selectNews);
  const tours = useAppSelector(selectTours);
  useEffect(() => {
    dispatch(getBlogs());
    dispatch(getHotels());
    dispatch(getNews());
    dispatch(getTours());
  }, []);
  return (
    <main>
      {/* <Carousel /> */}
      <Tour />
      <Best hotels={hotels} />
      <Current tours={tours} />
      <News news={news} />
      <Blog blogs={blogs} />
      <Form />
      <About />
      <Company />
    </main>
  );
};

export default Home;
