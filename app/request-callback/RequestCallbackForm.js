'use client';

import { useState } from 'react';

const FORM_NAME = 'tinitiate-com-callback';

export default function RequestCallbackForm({ initialService }) {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');

    try {
      const formData = new FormData(form);
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form
      className="callback-form panel"
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <input type="hidden" name="subject" value="New TINITIATE callback request" data-remove-prefix />
      <p className="netlify-honeypot" aria-hidden="true">
        <label>Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
      </p>

      <div className="callback-form-head">
        <h2>Book a free call</h2>
        <p>We normally respond within one business day.</p>
      </div>

      <div className="form-grid">
        <label className="form-field">
          <span>Name</span>
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label className="form-field">
          <span>Work email</span>
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label className="form-field">
          <span>Phone</span>
          <input type="tel" name="phone" autoComplete="tel" required />
        </label>
        <label className="form-field">
          <span>Preferred time</span>
          <input type="datetime-local" name="preferredTime" />
        </label>
        <label className="form-field form-field-full">
          <span>Service</span>
          <select name="service" defaultValue={initialService} required>
            <option value="" disabled>Select a service</option>
            <option>Enterprise services</option>
            <option>Cloud migrations</option>
            <option>Data engineering</option>
            <option>AI and agentic automation</option>
            <option>Solo entrepreneur and small business services</option>
            <option>Business process workflows</option>
            <option>AI workers for digital processing</option>
            <option>Planners and checklists</option>
            <option>Products and services management</option>
            <option>Sales management</option>
            <option>Customer management</option>
            <option>Other</option>
          </select>
        </label>
        <label className="form-field form-field-full">
          <span>What would you like to discuss?</span>
          <textarea name="message" rows="5" required></textarea>
        </label>
      </div>

      <div className="callback-submit-row">
        <button className="btn" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Request callback'}
          <span className="btn-arrow"></span>
        </button>
        <p className={`form-status ${status}`} aria-live="polite">
          {status === 'success' && 'Thank you. Your request has been sent.'}
          {status === 'error' && 'We could not send your request. Please try again.'}
        </p>
      </div>
    </form>
  );
}
