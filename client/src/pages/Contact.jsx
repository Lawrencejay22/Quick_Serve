import { useState } from 'react';
import { showToast } from '../utils/helpers';
import Footer from '../components/Footer';
import '../css/Contact.css';

const Contact = ({ onNavigate }) => {
  const [successVisible, setSuccessVisible] = useState(false);

  const handleSubmit = () => {
    const name = document.getElementById('c-name').value.trim();
    const msg = document.getElementById('c-msg').value.trim();

    if (!name || !msg) {
      alert('Please fill in your name and message.');
      return;
    }

    setSuccessVisible(true);
    document.getElementById('c-name').value = '';
    document.getElementById('c-email').value = '';
    document.getElementById('c-msg').value = '';

    showToast('✉️ Message sent!');
    setTimeout(() => setSuccessVisible(false), 4000);
  };

  return (
    <div className="page active">
      <div className="contact-layout">
        <div className="contact-left">
          <div className="tag">GET IN TOUCH</div>
          <h1>Contact <span>us</span></h1>
          <p>
            QuickServe loves to hear from Ilonggos! Whether you'd like to
            suggest a new local listing, report inaccurate information, or
            collaborate with the QuickServe — we're here to listen.
          </p>
          <div className="contact-info-row">
            <div className="contact-icon">📍</div>
            <div className="contact-detail">
              <div>Iloilo City, Philippines</div>
              <div className="sub">Jaro District</div>
            </div>
          </div>
          <div className="contact-info-row">
            <div className="contact-icon">✉️</div>
            <div className="contact-detail">
              <div>hello@quickserve.ph</div>
              <div className="sub">We reply within 24hrs</div>
            </div>
          </div>
          <div className="contact-info-row">
            <div className="contact-icon">📞</div>
            <div className="contact-detail">
              <div>+63 933 123 4567</div>
              <div className="sub">Mon–Fri, 9am–5pm</div>
            </div>
          </div>
          <div className="contact-info-row">
            <div className="contact-icon">🕐</div>
            <div className="contact-detail">
              <div>Mon–Fri, 9am–5pm</div>
              <div className="sub">Philippine Standard Time</div>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <h2>Send a Message</h2>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input className="form-input" id="c-name" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input className="form-input" id="c-email" placeholder="you@email.com" type="email" />
          </div>
          <div className="form-group">
            <label className="form-label">Topic</label>
            <select className="form-select" id="c-topic">
              <option>Suggest a listing</option>
              <option>Report inaccurate info</option>
              <option>Partnership / Collaboration</option>
              <option>Technical issue</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              className="form-textarea"
              id="c-msg"
              placeholder="Tell us more..."
              style={{ minHeight: 120 }}
            />
          </div>
          <button
            className="btn-primary"
            style={{ width: '100%', padding: 14 }}
            onClick={handleSubmit}
          >
            Send Message
          </button>
          {successVisible && (
            <div className="contact-success" style={{ display: 'block' }}>
              ✓ Message sent! We'll get back to you within 24 hours.
            </div>
          )}
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Contact;