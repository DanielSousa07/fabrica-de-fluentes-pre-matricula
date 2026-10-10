import { useLeadForm } from '../../hooks/useLeadForm';
import { FeedbackModal } from '../ui/FeedbackModal';
import { LEAD_FORM_ID } from '../../utils/scrollToLeadForm';
import styles from './LeadForm.module.css';

export function LeadForm({ onSubmit }) {
  const { formData, isSending, feedback, handleChange, handleSubmit, closeFeedback } =
    useLeadForm('Formulário do topo');

  return (
    <div className={styles.formContainer}>
      <p className={styles.helperText}>
        ↓ Preencha aqui para desbloquear sua oferta ↓
      </p>

      <form id={LEAD_FORM_ID} onSubmit={handleSubmit} className={styles.leadForm}>
        <input
          type="text" name="name" placeholder="Digite seu primeiro nome"
          value={formData.name} onChange={handleChange} required
          className={styles.input}
        />
        <input
          type="email" name="email" placeholder="Digite seu melhor e-mail"
          value={formData.email} onChange={handleChange} required
          className={styles.input}
        />
        <div className={styles.phoneGroup}>
          <span className={styles.countryCode}>🇧🇷 +55</span>
          <input
            type="tel" name="phone" placeholder="(11) 98765-4321"
            value={formData.phone} onChange={handleChange} required
            className={styles.phoneInput}
          />
        </div>
        <button type="submit" className={styles.ctaButton} disabled={isSending}>
          {isSending ? 'ENVIANDO...' : 'DESBLOQUEAR OFERTA'}
        </button>
      </form>

      <FeedbackModal feedback={feedback} successTitle="Oferta solicitada!" onClose={closeFeedback} />
    </div>
  );
}