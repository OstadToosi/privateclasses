import React from "react";

function Register() {

  

  return (
    <div>
      <form className="mb-4" method="get">
        <label>
          نام و نام خانوادگی :
          <input type="text" id="name" />
        </label>
        <button className="btn btn-success">ثبت نام</button>
      </form>
      <img src="/privateclasses/toosi1.jfif" alt="toosi 1"/>
    </div>
  );
}

export default Register;
