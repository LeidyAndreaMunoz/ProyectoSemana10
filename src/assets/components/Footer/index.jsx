import "./footer.css";
import img1 from "../../img/logo.png";
import img2 from "../../img/socialmedialogo.png";

export default function Footer(){
    return (
        <footer className="footer">
        <div>
            <h1>Servicios</h1>
            <p>Busqueda de cartas</p>
            <p>Informacion detallada</p>
            <p>Contenido de valor</p>
        </div>
        <div>
            <h1>Te ayudamos</h1>
            <h4>Busqueda por: </h4>
            <p>Nombre</p>
            <p>Tipo</p>
            <p>Efecto</p>
        </div>
        <div className="logoyugi">
            <img src={img1} alt="logo" />
        </div>
        <div className="socialmedia">
            <h1>Social Media</h1>
            <img src={img2} alt="socialmedia" />
        </div>
        <div className="contacto">
            <a href="./">Contactenos</a>
            <a href="./">Sobre Nosotros</a>
        </div>
     </footer>
    )
}