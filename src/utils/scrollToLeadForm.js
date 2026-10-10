export const LEAD_FORM_ID = 'lead-form';

export function scrollToLeadForm() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  document.getElementById(LEAD_FORM_ID)?.querySelector('input')?.focus({ preventScroll: true });
}
