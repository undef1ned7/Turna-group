import { Map, Placemark, YMaps, ZoomControl } from "@pbe/react-yandex-maps";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/redux";
import { getGroups, selectGroups } from "../../slices/group";
import { createQuestion } from "../../slices/question";
import { RawQuestion } from "../../type";
import { getSettings, selectSettings } from "../../slices/settings";
import Staff from "../../components/Staff/Staff";
const Contact = () => {
  const dispatch = useAppDispatch();

  const [state, setState] = useState<RawQuestion>({
    username: "",
    email: "",
    phone_number: "",
    comment: "",
  });
  const coordinates = [
    {
      id: 1,
      numbers: 40.56355,
      numbersS: 72.795932,
    },
  ];
  const workers = useAppSelector(selectGroups);
  const settings = useAppSelector(selectSettings);
  useEffect(() => {
    dispatch(getSettings());
    dispatch(getGroups());
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (Object.values(state).some((value) => value.trim() === "")) {
      return;
    }

    dispatch(createQuestion(state));

    setState({
      username: "",
      email: "",
      phone_number: "",
      comment: "",
    });
  };
  return (
    <section className="contact">
      <div className="container ">
        <div className="row">
          <div className="col-6">
            {settings.map((item) => {
              return (
                <div className="contact__list">
                  <h2 className="contact__list-title">контакты</h2>
                  <p className="contact__list-text">Адрес:</p>
                  <p className="contact__list-address">{item.address}</p>
                  <p className="contact__list-text">Телефон / факс:</p>
                  <h3 className="contact__list-number">{item.phone_number}</h3>
                  <p className="contact__list-text">Режим работы:</p>
                  <p className="contact__list-address">Пн-Пт 10:00-19:00</p>
                </div>
              );
            })}
          </div>
          <div className="col-6">
            <form onSubmit={onSubmit} action="" className="contact__form">
              <h3 className="contact__form-title">Появились вопросы?</h3>
              <input
                type="text"
                placeholder="Имя"
                name="username"
                className="contact__form-input"
                onChange={onChange}
              />
              <input
                type="text"
                name="phone_number"
                placeholder="Телефон"
                className="contact__form-input"
                onChange={onChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="contact__form-input"
                onChange={onChange}
              />
              <input
                type="text"
                name="comment"
                placeholder="Ваш комментарий"
                className="contact__form-input"
                onChange={onChange}
              />
              <button
                className="contact__form-btn"
                onSubmit={onSubmit}
                type="submit"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="contact__map">
        {coordinates.map((item) => {
          return (
            <YMaps key={item.id}>
              <Map
                defaultState={{
                  center: [item.numbers, item.numbersS],
                  zoom: 9,
                }}
              >
                <Placemark geometry={[item.numbers, item.numbersS]} />
                <ZoomControl options={{ position: { top: 10, right: 10 } }} />
              </Map>
            </YMaps>
          );
        })}
      </div>
      <Staff />
    </section>
  );
};

export default Contact;
