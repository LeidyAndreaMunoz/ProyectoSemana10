import GetData from '../../Utils/getData';
import './styles.css';

export default function CardDetail() {

    let cartas = GetData("Red Dragon Ninja");

    return (
        <section className="detalles-carta">
            <div className="detalle-img">
                <img src="https://ygoprodeck.com/pics/58165765.jpg" alt="" />
            </div>
            <div className="detalle-text">
                <h4>Nombre: </h4>
                <h4>Tipo: </h4>
                <h4>Ataque: </h4>
                <h4>Defensa: </h4>
                <h4>Nivel: </h4>
                <h4>Raza: </h4>
                <h4>Atributo: </h4>
                <h4>Arquetipo: </h4>
            </div>
        </section>
    )
}