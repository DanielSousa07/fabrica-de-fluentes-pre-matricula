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
          <span><strong>CNPJ:</strong> 00.000.000/0001-00</span>
          <span className={styles.separator}>|</span>
          <span><strong>Whatsapp:</strong> (11) 99999-9999</span>
          <span className={styles.separator}>|</span>
          <span>suporte@fabricadefluentes.com.br</span>
        </div>

        <div className={styles.developedBy}>
          DESENVOLVIDO POR DANIEL DE SOUSA
        </div>

      </div>
    </footer>
  );
}