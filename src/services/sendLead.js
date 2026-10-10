const LEAD_EMAIL = 'felipemacedo300@gmail.com';

export async function sendLead({ name, email, phone }, origem) {
  const response = await fetch(`https://formsubmit.co/ajax/${LEAD_EMAIL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      Nome: name,
      Email: email,
      Telefone: `+55 ${phone}`,
      Origem: origem,
      _subject: `Novo lead (${origem}) - ${name}`,
      _template: 'table',
      _captcha: 'false',
    }),
  });

  if (!response.ok) throw new Error('Falha ao enviar formulário');
}
