import GetData from '../../utils/getData';
import './styles.css';

export default function CardDetail() {

    let cartas = GetData("Red Dragon Ninja");

    return cartas.length === 0 ? <h1>Loading...</h1> : (
        <section className="detalles-carta">
            <div className="detalle-img">
                <img src={cartas.data[0].card_images[0].image_url} alt="" />
            </div>
            <div className="detalle-text">
                <h4>Nombre: {cartas.data[0].name}</h4>
                <h4>Tipo: {cartas.data[0].type}</h4>
                <h4>Ataque: {cartas.data[0].atk || 0}</h4>
                <h4>Defensa: {cartas.data[0].def || 0}</h4>
                <h4>Nivel: {cartas.data[0].level || 0}</h4>
                <h4>Raza: {cartas.data[0].race}</h4>
                <h4>Atributo: {cartas.data[0].attribute || "Ninguno"}</h4>
                <h4>Arquetipo: {cartas.data[0].archetype || "Ninguno"}</h4>
            </div>
        </section>
    )
}