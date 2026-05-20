import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

import Logo from '../../assets/img/logo.png';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_logo}>
                <img src={Logo} alt="Get A Pet" />
            </div>
            <ul className={styles.navbar_links}>
                <li>
                    <Link to={'/'}>Adotar</Link>
                </li>
                <li>
                    <Link to={'/login'}>Entrar</Link>
                </li>
                <li className={styles.navbar_cta}>
                    <Link to={'/register'}>Cadastrar</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
