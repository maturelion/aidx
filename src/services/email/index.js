import { sendWithEmailJS } from './providers/emailjsProvider';
import { sendWithFormSubmit } from './providers/formsubmitProvider';
import { sendWithTelegram } from './providers/telegramProvider';

/**
 * Provider-agnostic email sender.
 * Configure via Vite env variables in your .env:
 *
 * VITE_EMAIL_PROVIDER= emailjs | formsubmit | telegram
 *
 * When VITE_EMAIL_PROVIDER=emailjs:
 *   VITE_EMAILJS_SERVICE_ID=your_service_id
 *   VITE_EMAILJS_TEMPLATE_ID=your_template_id
 *   VITE_EMAILJS_PUBLIC_KEY=your_public_key
 *
 * When VITE_EMAIL_PROVIDER=formsubmit:
 *   VITE_FORMSUBMIT_RECIPIENT=recipient@example.com
 *
 * When VITE_EMAIL_PROVIDER=telegram:
 *   VITE_TELEGRAM_BOT_TOKEN=your_bot_token
 *   VITE_TELEGRAM_CHAT_ID=your_chat_id
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
    case 'telegram':
      return sendWithTelegram({
        botToken: import.meta.env.VITE_TELEGRAM_BOT_TOKEN,
        chatId: import.meta.env.VITE_TELEGRAM_CHAT_ID,
        params,
      });
    default:
      throw new Error(
        'VITE_EMAIL_PROVIDER is not set or unsupported. Set it to "emailjs", "formsubmit", or "telegram" in your .env.'
      );
  }
}

export default { sendEmail };
