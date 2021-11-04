import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import {useHistory} from "react-router-dom"

function Register() {

  let history = useHistory();

  const [name, setName] = useState("")
  const [size, setSize] = useState("big")

  useEffect(() => {
    console.log(name + size);
  }, [name, size])

  const submitForm = () => {
    history.push(`/privateclasses/success?name=${name}&size=${size}`);
  }

  return (
    <div>
        <label>
          نام و نام خانوادگی :
          <input type="text" id="name" className="form-control" onInput={(e) => {
            setName(e.target.value);
          }} />
          <label>
            سایز باسن :
            <select className="form-select" onInput={(e) => {
              setSize(e.target.value);
            }}>
              <option value="big">بزرگ</option>
              <option value="small">کوچک</option>
            </select>
          </label>
          <p id="basan-alert">توجه : درصورت بزرگ بودن سایز باسن هزینه کلاس ها رایگان است</p>
        </label>
        <br />
        <button onClick={submitForm} className="btn btn-success my-2">ثبت نام</button>
        <br />
      <img src="/privateclasses/toosi1.jfif" alt="toosi 1" />
      <Footer />
    </div>
  );
}

export default Register;
