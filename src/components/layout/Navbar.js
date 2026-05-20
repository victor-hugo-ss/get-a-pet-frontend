import { Link } from 'react-router-dom';
import { useContext } from 'react';

import styles from './Navbar.module.css';

import Logo from '../../assets/img/logo.png';

// Context
import { Context } from '../../context/UserContext';

function Navbar() {
    const { authenticated } = useContext(Context);

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_logo}>
                <img src={Logo} alt="Get A Pet" />
            </div>
            <ul className={styles.navbar_links}>
                <li>
                    <Link to={'/'}>Adotar</Link>
                </li>
                {authenticated ? (
                    <>
                        <p>Logado</p>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to={'/login'}>Entrar</Link>
                        </li>
                        <li className={styles.navbar_cta}>
                            <Link to={'/register'}>Cadastrar</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
