import './search.css';
import logoSmall from '../../assets/img/logo.png';
import lens from '../../assets/img/lens.png';

function Search() {
    return (
    <section className="search">
        <div>
            <div className="logo-container">
                <img src={logoSmall} alt="Logo" />
            </div>
            <div className="input-container">
                <input placeholder="Busca cualquier carta" />
                <button type="button"><img src={lens} alt="Buscar" /></button>
            </div>
        </div>
    </section>
    );
}

export default Search;