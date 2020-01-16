import React from "react";

function RegisterTeam() {
  return (
    <div className="container">
      <p className="registration">Register Team</p>
      <hr />
      <form>
        <div className="row">
          <div className="form-group col-sm-12 col-md-6 col-md-6">
            <label>Managers Name</label>
            <input type="text" className="form-control" placeholder="" />
          </div>

          <div className="form-group col-sm-12 col-md-6 col-lg-6">
            <label>Team Name</label>
            <input type className="form-control" placeholder />
          </div>
          <div className="form-group col-sm-12 col-md-6 col-lg-6">
            <label>Phone Number</label>
            <input type="text" className="form-control" placeholder="" />
          </div>
          <div className="form-group col-sm-12 col-md-6 col-lg-6">
            <label>Team Location</label>
            <input type="text" className="form-control" placeholder="" />
          </div>
          <div className="form-group col-sm-12 col-md-6 col-lg-6">
            <label>Number of Players</label>
            <input type="number" className="form-control" placeholder="" />
          </div>
          <div className="form-group col-sm-12 col-md-6 col-lg-6">
            <label>Nickname</label>
            <input type="text" className="form-control" placeholder="" />
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
            Register Team
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterTeam;
