import { Link } from "react-router-dom";
import "./styles.css";

/**
 * Cabeçalho que contém os links para navegar entre as páginas
 *
 * Uso: `<Cabecalho />`
 *
 * @returns {JSX.Element}
 */
const Cabecalho = () => {
  return (
    <header>
      <div>
        <div>
          <h2>Exame Final de Frontend IV</h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/favoritos">Favoritos</Link>
            </li>
            <li>
              <Link to="/detalhe">Detalhe</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Cabecalho;
