import React from "react";
import ButtonTemplate from "../ButtonTemplate";
import "./contact-us.scss";

export default function ContactUs() {
  return (
    <div id="contact-us">
      <div className="my-container relative ">
        <form className="contact-form z-10 flex flex-col">
          <div className="contact-grid">
            <input className="form-input" required type="text" placeholder="Name" />
            <input
              className="form-input"
              required
              type="text"
              placeholder="Email /Phone"
            />

            <textarea
              placeholder="Comment"
              className="form-input comment resize-none"
            ></textarea>
          </div>
          <ButtonTemplate type="submit" color="#D88535" strokeColor="#AD6016">
            <p className="relative z-10 text-center w-full">Request a Callback</p>
          </ButtonTemplate>
        </form>
      </div>
    </div>
  );
}
