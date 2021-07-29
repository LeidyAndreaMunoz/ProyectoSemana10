import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './header.css';

export default function Header() {
    return (
        <header>
            <section className="Header-logo">
                <Link to ="/home"><img src={logo} alt="Logo" /></Link>
            </section>
            <section className="Header-login">
                <div>
                    <Link to ="/registerpage"><button type="button">Registrarse</button></Link>
                </div>
                <div>
                    <Link to ="/loginpage"><button type="button">Iniciar Sesión</button></Link>
                </div>
            </section>
        </header>
    )
}