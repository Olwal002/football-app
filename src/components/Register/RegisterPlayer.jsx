import React from "react";

function RegisterPlayer() {
  return (
    <div className="container">
      <p>Register Player</p>
      <hr />
      <form>
        <div className="row">
          <div className="form-group col-sm-12 col-md-6 col-md-6">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
            />
          </div>

          <div className="form-group col-sm-12 col-md-6 col-lg-6">
            <label>Team Name</label>
            <input type="text" className="form-control" placeholder />
          </div>
          <div className="form-group col-sm-12 col-md-6 col-lg-6">
            <label>Phone Number</label>
            <input type="password" className="form-control" placeholder="" />
          </div>
          <div className="form-group col-sm-12 col-md-6 col-lg-6">
            <label>Age</label>
            <input type="number" className="form-control" placeholder="" />
          </div>
          <div className="form-group col-sm-12 col-md-6 col-lg-6">
            <label> Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
            />
          </div>
          <div className="form-group col-sm-12 col-md-6 col-lg-6">
            <label>Confirm Password</label>
            <input type="password" className="form-control" placeholder="" />
          </div>
        </div>

        <div className="col text-center">
          <button
            type="submit"
            className="btn btn-primary center-block form_button"
          >
            Register Player
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterPlayer;
