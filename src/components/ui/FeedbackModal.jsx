import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './FeedbackModal.module.css';

export function FeedbackModal({ feedback, successTitle, onClose }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!feedback) return;
    buttonRef.current?.focus();
    const handleKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [feedback, onClose]);

  if (!feedback) return null;

  const isSuccess = feedback.type === 'success';
  const firstName = feedback.name?.split(' ')[0];

  return createPortal(
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="feedback-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={isSuccess ? styles.iconSuccess : styles.iconError}>
          {isSuccess ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path className={styles.checkPath} d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <path d="M12 7v6M12 17h.01" />
            </svg>
          )}
        </div>

        <h3 id="feedback-title" className={styles.title}>
          {isSuccess ? successTitle : 'Ops! Algo deu errado'}
        </h3>

        <p className={styles.text}>
          {isSuccess ? (
            <>
              {firstName ? <>Obrigado, <strong>{firstName}</strong>! </> : 'Obrigado! '}
              Recebemos seus dados e em breve você receberá todos os detalhes da sua{' '}
              <span className={styles.highlight}>oferta exclusiva</span>.
            </>
          ) : (
            'Não conseguimos enviar seus dados agora. Verifique sua conexão e tente novamente em instantes.'
          )}
        </p>

        <button ref={buttonRef} type="button" className={styles.button} onClick={onClose}>
          {isSuccess ? 'PERFEITO!' : 'TENTAR NOVAMENTE'}
        </button>
      </div>
    </div>,
    document.body
  );
}
