import { Link } from 'react-router-dom';
import '../styles/nav.css';

function Nav() {
    return(
        <nav className="nav">
            <Link to="/" className="nav__link_home">Accueil</Link>
            <Link to="/about" className="nav__link_about">A propos</Link>
        </nav>
    )
}
export default Nav