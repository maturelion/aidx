import emailjs from '@emailjs/browser';

/**
 * Send email using EmailJS provider
 * @param {Object} options
 * @param {string} options.serviceId - EmailJS service ID
 * @param {string} options.templateId - EmailJS template ID
 * @param {string} options.publicKey - EmailJS public key (user/public key)
 * @param {Record<string, any>} options.params - Template params
 * @returns {Promise<{status: number, text: string}>}
 */
export async function sendWithEmailJS({ serviceId, templateId, publicKey, params }) {
  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS configuration is missing. Ensure serviceId, templateId, and publicKey are set.');
  }

  // Init is idempotent; safe to call multiple times in SPA context
  emailjs.init({ publicKey });

  const res = await emailjs.send(serviceId, templateId, params);
  // Normalize to a common shape
  return { status: 200, text: res?.text ?? 'OK' };
}
