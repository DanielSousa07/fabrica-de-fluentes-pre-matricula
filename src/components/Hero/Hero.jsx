import { BenefitList } from './BenefitList';
import { LeadForm } from './LeadForm';
import heroBg from '../../assets/hero-person.jpg';
import heroMobileBg from '../../assets/hero-mobile.jpg';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section 
      className={styles.section}
      style={{ 
        '--bg-desktop': `url(${heroBg})`,
        '--bg-mobile': `url(${heroMobileBg})`
      }}
    >
      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brandLogo}>
            <span className={styles.brandWhite}>FÁBRICA DE</span>
            <span className={styles.brandRed}>FLUENTES</span>
          </div>

          <h1 className={styles.title}>
            Fale inglês desde o primeiro dia, e ganhe 1 ano de{' '}
            <span className={styles.highlight}>conversação ilimitada!</span>
          </h1>

          <BenefitList />
          <LeadForm />
        </div>
      </div>
    </section>
  );
}