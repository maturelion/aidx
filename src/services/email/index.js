import { sendWithEmailJS } from './providers/emailjsProvider';
import { sendWithFormSubmit } from './providers/formsubmitProvider';

/**
 * Provider-agnostic email sender.
 * Configure via Vite env variables in your .env:
 *
 * VITE_EMAIL_PROVIDER= emailjs | formsubmit
 *
 * When VITE_EMAIL_PROVIDER=emailjs:
 *   VITE_EMAILJS_SERVICE_ID=your_service_id
 *   VITE_EMAILJS_TEMPLATE_ID=your_template_id
 *   VITE_EMAILJS_PUBLIC_KEY=your_public_key
 *
 * When VITE_EMAIL_PROVIDER=formsubmit:
 *   VITE_FORMSUBMIT_RECIPIENT=recipient@example.com
 *
 * Usage:
 *   import { sendEmail } from '@/services/email';
 *   await sendEmail({ name, email, message })
 */
export async function sendEmail(params) {
  const provider = import.meta.env.VITE_EMAIL_PROVIDER?.toLowerCase();

  switch (provider) {
    case 'emailjs':
      return sendWithEmailJS({
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        params,
      });
    case 'formsubmit':
      return sendWithFormSubmit({
        recipient: import.meta.env.VITE_FORMSUBMIT_RECIPIENT,
        params,
      });
    default:
      throw new Error(
        'VITE_EMAIL_PROVIDER is not set or unsupported. Set it to "emailjs" or "formsubmit" in your .env.'
      );
  }
}

export default { sendEmail };
