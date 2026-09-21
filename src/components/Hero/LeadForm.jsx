import { useState } from 'react';
import styles from './LeadForm.module.css';

export function LeadForm({ onSubmit }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Oferta solicitada com sucesso!');
  };

  return (
    <div className={styles.formContainer}>
      <p className={styles.helperText}>
        ↓ Preencha aqui para desbloquear sua oferta ↓
      </p>

      <form onSubmit={handleSubmit} className={styles.leadForm}>
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
        <button type="submit" className={styles.ctaButton}>
          DESBLOQUEAR OFERTA
        </button>
      </form>
    </div>
  );
}