import Footer from "./Footer";

export default function Success(props) {
    return (
        <div>
            ثبت نام موفق
            <h4>
                {props.match.params.name} عزیز ، تشکر از ثبت نام شما
            </h4>
            {props.match.params.size == "big" && 
            <p>به علت بزرگ بودن سایز باسن هزینه رایگان است</p>}
            <Footer />
        </div>
    )
};