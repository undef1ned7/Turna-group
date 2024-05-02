import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/redux";
import calendar from "../../assets/Home/Blog/calendar.svg";
import eye from "../../assets/Home/Blog/eye.svg";
import { getBlogs, selectBlogs } from "../../slices/blog";
const BlogPage = () => {
  const dispatch = useAppDispatch();
  const blog = useAppSelector(selectBlogs);
  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  return (
    <section className="blog">
      <div className="container">
        <div className="best__head container">
          <h2>Блог</h2>
        </div>
        <div className="row">
          {blog.map((blog) => {
            return (
              <div className="col-3" key={blog.id}>
                <div className="blog__content">
                  <img src={blog.image} className="blog__content-img" alt="" />
                  <div className="blog__content-row">
                    <p className="blog__content-view">
                      <img src={calendar} alt="" /> {blog.date}
                    </p>
                    <p className="blog__content-view">
                      <img src={eye} alt="" /> {blog.views}
                    </p>
                  </div>
                  <h2 className="blog__content-title">{blog.title}</h2>
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

export default BlogPage;
