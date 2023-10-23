import Logo from '../assets/logo.svg';
import Nav from '../components/Nav';
import '../styles/header.css';

export default function Header() {
    return(
        <header className="header">
            <figure className="header__figure">
                <img src={Logo} alt="logo de l'agence"/>
            </figure>
            <Nav className="header__nav" />
        </header>
    )
}
