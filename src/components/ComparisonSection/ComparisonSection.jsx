import { useState } from 'react';
import styles from './ComparisonSection.module.css';

export function ComparisonSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Vaga garantida com sucesso!');
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.comparisonCard}>
          
          <div className={styles.badSection}>
            <h3 className={styles.badTitle}>
              SEU INGLÊS <span>SEM A OFERTA EXCLUSIVA</span> DO CURSO COMPLETO DE INGLÊS DA FÁBRICA DE FLUENTES
            </h3>
            <ul className={styles.list}>
              <li>
                <span className={styles.iconBad}>✕</span>
                Métodos tradicionais focados em gramática.
              </li>
              <li>
                <span className={styles.iconBad}>✕</span>
                Horas intermináveis de estudo sem resultado.
              </li>
              <li>
                <span className={styles.iconBad}>✕</span>
                Medo e trava na hora de falar na vida real.
              </li>
              <li>
                <span className={styles.iconBad}>✕</span>
                Termina o ano sem falar inglês (de novo!).
              </li>
            </ul>
          </div>

          <div className={styles.divider} />

          <div className={styles.goodSection}>
            <h3 className={styles.goodTitle}>
              SEU INGLÊS <span>COM A OFERTA EXCLUSIVA</span> DO CURSO COMPLETO DE INGLÊS DA FÁBRICA DE FLUENTES
            </h3>
            <ul className={styles.list}>
              <li>
                <span className={styles.iconGood}>✓</span>
                Método focado em conversação para o dia a dia.
              </li>
              <li>
                <span className={styles.iconGood}>✓</span>
                Aulas de 15-20 min que expandem seu vocabulário.
              </li>
              <li>
                <span className={styles.iconGood}>✓</span>
                Consegue fazer viagens internacionais nos primeiros meses.
              </li>
              <li>
                <span className={styles.iconGood}>✓</span>
                Termina o ano falando inglês com confiança (finalmente!).
              </li>
            </ul>
          </div>

        </div>

        <div className={styles.formCardWrapper}>
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <span className={styles.logoText}>FÁBRICA DE <span className={styles.logoRed}>FLUENTES</span></span>
              <h3 className={styles.formTitle}>
                Falta pouco para <span className={styles.formHighlight}>desbloquear a melhor oferta que já fiz.</span>
              </h3>
              <p className={styles.formSubtitle}>Toque no botão abaixo para fazer sua pré-matrícula</p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                name="name"
                placeholder="Digite seu primeiro nome"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
              />
              <input
                type="email"
                name="email"
                placeholder="Digite seu melhor e-mail"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
              <div className={styles.phoneGroup}>
                <span className={styles.countryCode}>🇧🇷 +55</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(11) 98765-4321"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={styles.phoneInput}
                />
              </div>
              <button type="submit" className={styles.ctaButton}>
                GARANTIR VAGA
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
