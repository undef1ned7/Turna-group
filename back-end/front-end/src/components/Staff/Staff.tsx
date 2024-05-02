import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/redux";
import { getGroups, selectGroups } from "../../slices/group";

const Staff = () => {
  const workers = useAppSelector(selectGroups);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getGroups());
  }, []);
  return (
    <div className="contact__staff container">
      <h3 className="contact__staff-title">наш колектив</h3>
      <div className="row">
        {workers.map((worker) => {
          return (
            <div className="col-6" key={worker.id}>
              <div className="contact__staff-content">
                <img src={worker.photo} alt="" />
                <div className="contact__staff-content-box">
                  <h4>{worker.name}</h4>
                  <p>{worker.position}</p>
                  <b>{worker.email}</b>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Staff;
