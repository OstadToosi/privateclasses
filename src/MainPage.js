import React from "react";
import {Link} from "react-router-dom"
import Footer from "./Footer";

function MainPage() {
    return (
        <div>
            <h1>سلام</h1>
            <h4>بنده استاد سعید طوسی هستم.</h4>
            <p>شما شاید بنده را بشناسید.بنده قاری قرآن معروف و همچنین معلم احکام و قرائت هستم.</p>
            <p> بنده تصمیم گرفتم تا با برگزاری کلاس های خصوصی در شهر مشهد، شما کودکان و نوجوانان را به راه <span className="rust">راست</span> هدایت کنم </p>
            <Link to="/privateclasses/register" className="btn btn-success mb-4 d-block">ثبت نام</Link>
            <img src="/privateclasses/toosi2.jfif" alt="toosi 2"/>
            <Footer/>
        </div>
    )
}

export default MainPage;
