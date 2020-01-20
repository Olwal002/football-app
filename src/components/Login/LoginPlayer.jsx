import React from 'react';

function LoginPlayerr() {
   return(

<div className= "container">
        <form>
        <div className="form-group">
            <label>Full Name</label>
            <input type="text" className="form-control" id="username" placeholder="" />
        </div>
        <div className="form-group">
            <label>Team</label>
            <input type="text" className="form-control" id="username" placeholder="" />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" value className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <button type="Submit" className="btn btn-primary">login</button>
        </form>
        </div>

   )
}
export default LoginPlayerr;