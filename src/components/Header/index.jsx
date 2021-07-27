import './styles.css'
import logo from '../../assets/img/logo.png';

export default function Header() {
    return (
        <header>
            <section className="Header-logo">
                <a href="#home"><img src={logo} alt="Logo" /></a>
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