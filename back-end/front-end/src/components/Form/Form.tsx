import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../../app/redux";
import { createLead } from "../../slices/lead";
import { RawLead } from "../../type";

const Form = () => {
  const dispatch = useAppDispatch();

  const [state, setState] = useState<RawLead>({
    username: "",
    email: "",
    phone_number: "",
  });
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: files && files[0] ? files[0] : null,
    }));
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (Object.values(state).some((value) => value.trim() === "")) {
      return;
    }

    dispatch(createLead(state));

    setState({
      username: "",
      email: "",
      phone_number: "",
    });
  };

  return (
    <div className="container secondF__top">
      <div className="secondF__top-head">
        <h2 className="secondF__top-head-title">
          ПУТЕШЕСТВУЙ С <br /> Valanta Travel Company!
        </h2>
        <p className="secondF__top-head-text">
          ПОДПИСЫВАЙТЕСЬ НА НАШУ РАССЫЛКУ, ЧТОБЫ <br /> ПОЛУЧАТЬ САМЫЕ ГОРЯЧИЕ
          ПРЕДЛОЖЕНИЯ
        </p>
      </div>
      <form onSubmit={onSubmit} className="secondF__top-body">
        <input
          className="secondF__top-body-input"
          type="text"
          name="username"
          placeholder="username"
          onChange={onChange}
        />
        <input
          className="secondF__top-body-input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
        />
        <input
          className="secondF__top-body-input"
          type="text"
          name="phone_number"
          placeholder="number phone"
          onChange={onChange}
        />
        <button onSubmit={onSubmit} type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default Form;
