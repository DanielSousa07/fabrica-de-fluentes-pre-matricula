import { CheckIcon } from '../ui/CheckIcon';
import styles from './BenefitList.module.css';

const DEFAULT_BENEFITS = [
  "1 ano de aulas de conversação ao vivo ilimitadas",
  "Ferramenta com IA no WhatsApp para prática de inglês",
  "12 meses de acesso + 1 acesso extra ao curso",
  "Garantia de fluência + Plano de estudos mensal"
];

export function BenefitList({ items = DEFAULT_BENEFITS }) {
  return (
    <ul className={styles.list}>
      {items.map((benefit, index) => (
        <li key={index} className={styles.item}>
          <CheckIcon className={styles.icon} />
          <span>{benefit}</span>
        </li>
      ))}
    </ul>
  );
}