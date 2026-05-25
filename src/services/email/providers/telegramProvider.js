import axios from 'axios';

/**
 * Send a message using the Telegram Bot API
 * @param {Object} options
 * @param {string} options.botToken - Telegram bot token from @BotFather
 * @param {string} options.chatId  - Target chat/group/channel ID
 * @param {Record<string, any>} options.params - Arbitrary fields to format and send
 * @returns {Promise<{status: number, text: string}>}
 */
export async function sendWithTelegram({ botToken, chatId, params }) {
  if (!botToken || !chatId) {
    throw new Error(
      'Telegram configuration is missing. Set VITE_TELEGRAM_BOT_TOKEN and VITE_TELEGRAM_CHAT_ID in your .env.'
    );
  }

  // Build a readable HTML message from the params
  const lines = Object.entries(params)
    .map(([key, value]) => `<b>${escapeHtml(key)}:</b> <pre>${escapeHtml(String(value))}</pre>`)
    .join('\n');

  const text = `📩 <b>New Submission</b>\n\n${lines}`;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const { status, data } = await axios.post(url, {
    chat_id: chatId,
    text,
    parse_mode: 'HTML',
  });

  if (data?.ok) {
    return { status, text: 'Message sent to Telegram' };
  }

  throw new Error(data?.description || `Telegram API failed with status ${status}`);
}

/** Escape HTML special characters to prevent parse errors */
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
