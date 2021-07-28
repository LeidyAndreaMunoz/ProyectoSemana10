import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './header.css';

export default function Header() {
    return (
        <header>
            <section className="Header-logo">
                <Link to="/home"><img src={logo} alt="Logo" /></Link>
            </section>
            <section className="Header-login">
                <div>
                    <button type="button">Registrarse</button>
                </div>
                <div>
                    <button type="button">Iniciar Sesion</button>
                </div>
            </section>
        </header>
    )
}