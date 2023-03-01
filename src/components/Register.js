import React from "react";
import "./registercss.css";

const form = () => {
  return (
    <div>
      <div className="heading heading_small">REGISTRATION</div>
      <div className="heading">FORM</div>

      <div className="row form_row">
        <div className="col-lg-6 col-sm-12">
          <div className="inputs">
            {" "}
            <input
              className="form__input"
              type="text"
              id="Name"
              placeholder="Name"
            />
          </div>
          <div className="inputs">
            {" "}
            <input
              className="form__input"
              type="text"
              id="Contact_Number"
              placeholder="Contact Number"
            />
          </div>
          <div className="inputs">
            {" "}
            <input
              className="form__input"
              type="email"
              id="E_mail"
              placeholder="E-Mail"
            />
          </div>
          <div className="inputs">
            {" "}
            <input
              className="form__input"
              type="text"
              id="Institute_name"
              placeholder="Institute Name"
            />
          </div>
          <div className="inputs">
            {" "}
            <input
              className="form__input"
              type="text"
              id="course"
              placeholder="Course"
            />
          </div>
          <div className="inputs">
            {" "}
            <input
              className="form__input"
              type="text"
              id="Year_Graduation"
              placeholder="Year of Graduation"
            />
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="inputs">
            {" "}
            <input
              className="form__input"
              type="text"
              id="LinkedIn_ID"
              placeholder="LinkedIn ID"
            />
          </div>
          <div className="inputs">
            {" "}
            <input
              className="form__input"
              type="text"
              id="Instagram_ID"
              placeholder="Instagram ID"
            />
          </div>
          <div className="inputs">
            {" "}
            <input
              className="form__input"
              type="text"
              id="Facebook_ID"
              placeholder="Facebook ID"
            />
          </div>

          <div className="row inputs row_submit">
            <div className="col-9">
              {" "}
              <input
                className="form__input"
                type="text"
                id="College_ID"
                placeholder="College ID"
              />
            </div>
            <div className="col-3 upload">
              <button className="button">Upload</button>
            </div>
          </div>

          <div className="row inputs row_submit">
            <div className="col-9">
              {" "}
              <input
                className="form__input"
                type="text"
                id="Aadhar"
                placeholder="Aadhar"
              />
            </div>
            <div className="col-3 upload">
              <button className="button">Upload</button>
            </div>
          </div>
        </div>
      </div>

      <div className="submit col-4">
        <button className="submitb">Submit</button>
      </div>
    </div>
  );
};

export default form;
