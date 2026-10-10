import { useCallback, useState } from 'react';
import { sendLead } from '../services/sendLead';

const EMPTY_FORM = { name: '', email: '', phone: '' };

function formatPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits.replace(/^(\d{1,2})/, '($1');
  if (digits.length <= 6) return digits.replace(/^(\d{2})(\d+)/, '($1) $2');
  if (digits.length <= 10) return digits.replace(/^(\d{2})(\d{4})(\d+)/, '($1) $2-$3');
  return digits.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}

export function useLeadForm(origem) {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nextValue = name === 'phone' ? formatPhone(value) : value;
    setFormData((prev) => ({ ...prev, [name]: nextValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await sendLead({ ...formData, name: formData.name.trim(), email: formData.email.trim() }, origem);
      setFeedback({ type: 'success', name: formData.name.trim() });
      setFormData(EMPTY_FORM);
    } catch {
      setFeedback({ type: 'error' });
    } finally {
      setIsSending(false);
    }
  };

  const closeFeedback = useCallback(() => setFeedback(null), []);

  return { formData, isSending, feedback, handleChange, handleSubmit, closeFeedback };
}
