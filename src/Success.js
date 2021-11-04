import Footer from "./Footer";

export default function Success(props) {
    let query = new URLSearchParams(props.location.search);

    return (
        <div>
            ثبت نام موفق
            <h4>
                {query.get("name")} عزیز ، تشکر از ثبت نام شما
            </h4>
            {query.get("size") === "big" && 
            <p id="free-alert">به علت بزرگ بودن سایز باسن هزینه رایگان است</p>}
            <p id="basan-alert">لطفا سر کلاس حتما وازلین به همراه داشته باشید. دلیلش را نپرسید!</p>
            <Footer />
        </div>
    )
};