import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Do you want work with us?</h2>
              <p>Leave your resume here</p>
              <form className="form-section">
                <input placeholder="Your Resume/CV..." accept="image/*,.pdf" name="resume" type="file" />
                <input  value="Submit" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;