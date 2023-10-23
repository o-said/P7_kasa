import logo from '../assets/logoNoir.svg';
import '../styles/footer.css';

export default function Footer() {
    return(
        <footer className="footer">
            <img src={logo} className="footer__logo" alt="logo"/>
            <p className='footer__text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    ) 
}
