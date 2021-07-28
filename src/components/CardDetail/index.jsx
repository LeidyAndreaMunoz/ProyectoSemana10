import GetData from '../../Utils/getData';
import './styles.css';

export default function CardDetail() {

    let cartas = GetData("Armed Dragon Catapult Cannon");

    return cartas.length === 0 ? <h1>Loading...</h1> : (
        <section className="detalles-carta">
            <div className="detalle-img">
                <img src={cartas.data[0].card_images[0].image_url} alt="" />
            </div>
            <div className="detalle-text">
                <h4>Nombre: {cartas.data[0].name}</h4>
                <h4>Tipo: {cartas.data[0].type}</h4>
                <h4>Ataque: {cartas.data[0].atk}</h4>
                <h4>Defensa: {cartas.data[0].def}</h4>
                <h4>Nivel: {cartas.data[0].level}</h4>
                <h4>Raza: {cartas.data[0].race}</h4>
                <h4>Atributo: {cartas.data[0].attribute}</h4>
                <h4>Arquetipo: {cartas.data[0].archetype}</h4>
            </div>
        </section>
    )
}