import { useCallback, useState } from 'react';
import { sendLead } from '../services/sendLead';

const EMPTY_FORM = { name: '', email: '', phone: '' };

export function useLeadForm(origem) {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await sendLead(formData, origem);
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
