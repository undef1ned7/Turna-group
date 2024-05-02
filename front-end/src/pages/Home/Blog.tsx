import { Link } from "react-router-dom";
import calendar from "../../assets/Home/Blog/calendar.svg";
import eye from "../../assets/Home/Blog/eye.svg";
import type { Blog as BlogType } from "../../type";
interface Props {
  blogs: BlogType[];
}
const Blog: React.FC<Props> = ({ blogs }) => {
  return (
    <section className="blog">
      <div className="container">
        <div className="best__head container">
          <h2 className="best__head-title">БЛОГ</h2>
          <Link to={"/all-blog"} className="best__head-btn">
            Все блоги
          </Link>
        </div>
        <div className="row">
          {blogs.slice(0, 4).map((blog) => {
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

export default Blog;
