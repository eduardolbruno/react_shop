import styles from '../../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span className={styles.brand}>Eduardo Bruno</span>{' - '}
            {new Date().getFullYear()}
        </footer>
    );
};

export default Footer;
