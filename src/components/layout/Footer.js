import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.footer_logo}>🐾 Get A Pet</p>
            <p className={styles.footer_sub}>
                Conectando pets e famílias com amor
            </p>
            <p className={styles.footer_copy}>
                © 2026 Get A Pet. Todos os direitos reservados.
            </p>
        </footer>
    );
}

export default Footer;
