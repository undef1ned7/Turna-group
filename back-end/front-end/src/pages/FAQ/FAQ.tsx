import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/redux";
import arrowBottom from "../../assets/FAQ/arrowBottom.svg";
import arrowTop from "../../assets/FAQ/arrowTop.svg";
import question from "../../assets/FAQ/question.png";
import { getFaqs, selectFaqs } from "../../slices/faq";
interface State {
  [key: number]: boolean;
}
const FAQ: React.FC = () => {
  const [drops, setDrops] = useState<State>({});
  const dispatch = useAppDispatch();
  const questions = useAppSelector(selectFaqs);
  const toggleDropDown = (id: number) => {
    setDrops((prevDrops) => ({
      ...prevDrops,
      [id]: !prevDrops[id],
    }));
  };
  useEffect(() => {
    dispatch(getFaqs());
  }, []);
  return (
    <section className="faq">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="faq__question">
              <h3 className="faq__question-title">
                остались <br /> вопросы?
              </h3>
              <img className="faq__question-img" src={question} alt="" />
            </div>
          </div>
          <div className="col-9">
            {questions.map((question) => {
              return (
                <div
                  className={
                    drops[question.id] ? "faq__content active" : "faq__content"
                  }
                  key={question.id}
                  onClick={() => toggleDropDown(question.id)}
                >
                  <div>
                    <p className={"faq__content-id"}>{question.id}.</p>
                    <h2 className="faq__content-title">{question.question}</h2>
                    {drops[question.id] ? (
                      <img src={arrowTop} alt="" />
                    ) : (
                      <img src={arrowBottom} alt="" />
                    )}
                  </div>
                  <p className="faq__content-text">{question.answer}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
