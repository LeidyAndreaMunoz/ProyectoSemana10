import "./homepage.css";
import Cards from "../../Components/cardsHome/Index";
import Register from "../../Components/RegisterForm/Index";

export default function Homepage() {
    return <section className="container">
            <Cards/>
            <Register/>
        </section>
}