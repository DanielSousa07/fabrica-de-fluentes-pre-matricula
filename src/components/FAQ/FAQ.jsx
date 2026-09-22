import { useState } from 'react';
import { faqData } from './faqData';
import styles from './FAQ.module.css';

const CaretIcon = ({ isOpen }) => (
  <svg 
    className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

function FaqItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.item} ${isOpen ? styles.itemActive : ''}`}>
      <button 
        className={styles.questionBtn} 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <CaretIcon isOpen={isOpen} />
        <span>{item.question}</span>
      </button>
      
      <div 
        className={styles.answerWrapper} 
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className={styles.answerInner}>
          <div 
            className={styles.answerContent}
            dangerouslySetInnerHTML={{ __html: item.answer }}
          />
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const halfLength = Math.ceil(faqData.length / 2);
  const leftColumn = faqData.slice(0, halfLength);
  const rightColumn = faqData.slice(halfLength);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h2 className={styles.title}>
            Perguntas <span className={styles.highlight}>Frequentes</span>
          </h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.column}>
            {leftColumn.map((item) => (
              <FaqItem key={item.id} item={item} />
            ))}
          </div>

          <div className={styles.column}>
            {rightColumn.map((item) => (
              <FaqItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className={styles.footerCta}>
          <p className={styles.ctaHelper}>
            Toque no botão abaixo para fazer sua <strong>pré-matrícula</strong>
          </p>
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
