import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.links}>
          <a href="#">Termos de uso e políticas de privacidade</a>
        </div>

        <div className={styles.copy}>
          Fábrica de Fluentes LTDA | &copy; Copyright {currentYear}
        </div>

        <div className={styles.info}>
          <span>
            <strong>WhatsApp:</strong>{' '}
            <a href="https://wa.me/5586988087216" target="_blank" rel="noopener noreferrer">
              (86) 98808-7216
            </a>
          </span>
          <span className={styles.separator} aria-hidden="true">|</span>
          <a href="mailto:felipemacedo3000@gmail.com">felipemacedo3000@gmail.com</a>
        </div>

        <div className={styles.developedBy}>
          DESENVOLVIDO POR DANIEL DE SOUSA
        </div>

      </div>
    </footer>
  );
}