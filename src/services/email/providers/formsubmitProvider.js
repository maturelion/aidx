import axios from 'axios';

/**
 * Send email using FormSubmit.co provider (AJAX endpoint)
 * @param {Object} options
 * @param {string} options.recipient - The email address configured at FormSubmit to receive messages
 * @param {Record<string, any>} options.params - Arbitrary fields to send; FormSubmit forwards them
 * @returns {Promise<{status: number, text: string}>}
 */
export async function sendWithFormSubmit({ recipient, params }) {
  if (!recipient) {
    throw new Error('FormSubmit recipient is missing. Provide a recipient email.');
  }

  const url = `https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`;
  const { status, statusText, data } = await axios.post(url, params, {
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  });

  // FormSubmit returns JSON like { success: '...'} or { error: '...'}
  if (status >= 200 && status < 300) {
    const text = typeof data?.success === 'string' ? data.success : statusText || 'OK';
    return { status, text };
  }

  throw new Error(data?.error || `FormSubmit failed with status ${status}`);
}
