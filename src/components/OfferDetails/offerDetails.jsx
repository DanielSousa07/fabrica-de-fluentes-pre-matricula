import { offerData } from './offerData';
import styles from './OfferDetails.module.css';

const CheckIcon = () => (
  <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

export function OfferDetails() {
  const renderCard = (item, isBonusCard = false) => (
    <div key={item.id} className={`${styles.card} ${isBonusCard ? styles.cardHorizontal : ''}`}>
      <div className={styles.imageWrapper}>
        <img 
          src={item.image} 
          alt={item.title.replace(/<[^>]+>/g, '')}
          className={styles.image}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className={styles.imageFallback}>
          <span>{item.placeholder}</span>
        </div>
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle} dangerouslySetInnerHTML={{ __html: item.title }} />
        
        {item.description && (
          <p className={styles.cardDesc} dangerouslySetInnerHTML={{ __html: item.description }} />
        )}
        
        {item.list && (
          <ul className={styles.featureList}>
            {item.list.map((listItem, index) => (
              <li key={index}>
                <CheckIcon />
                <span>{listItem}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <img src="/LogoScholl.png" alt="Logo" className={styles.smallLogo} onError={(e) => e.target.style.display='none'} />
          <h2 className={styles.title}>
            Tudo o que você vai receber nesta <span className={styles.highlight}>Oferta especial do Curso completo de Inglês da Fábrica de Fluentes:</span>
          </h2>
        </div>

        <div className={styles.gridTop}>
          {offerData.topRow.map(item => renderCard(item))}
        </div>

        <div className={styles.gridMiddle}>
          {offerData.middleRow.map(item => renderCard(item))}
        </div>

        <div className={styles.bonusWrapper}>
          {renderCard(offerData.bottomCard, true)}
        </div>

        <div className={styles.footerCta}>
          <p className={styles.ctaHelper}>Toque no botão abaixo para fazer sua pré-matrícula</p>
          <button 
            className={styles.ctaButton}
            onClick={() => alert('Redirecionando para a pré-matrícula!')}
          >
            FAZER PRÉ-MATRÍCULA
          </button>
        </div>

      </div>
    </section>
  );
}