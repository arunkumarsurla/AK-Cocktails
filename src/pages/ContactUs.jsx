import React from 'react';

const ContactUs = () => {
  return (
    <section className="contact-section" style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem', textAlign: 'center' }}>
      <h1>Contact Us</h1>
      <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
        Got a question, suggestion, or just want to say hi? We'd love to hear from you!
      </p>

      <form className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          style={{ ...inputStyle, resize: 'vertical' }}
        ></textarea>
        <button type="submit" style={buttonStyle}>
          Send Message
        </button>
      </form>
    </section>
  );
};

// Inline styles (can be moved to CSS file)
const inputStyle = {
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  color: '#f0f0f0',
  fontSize: '1rem',
  outline: 'none'
};

const buttonStyle = {
  padding: '12px',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: '#ffffff10',
  color: '#ffffff',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease'
};

export default ContactUs;
