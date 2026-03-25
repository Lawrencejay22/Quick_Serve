import { useState } from 'react';
import { SERVICES, FEATURED_SERVICES } from '../data/services';
import { showToast } from '../utils/helpers';
import Footer from '../components/Footer';
import '../css/Profile.css';

const Profile = ({ serviceId, onBack, onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalRating, setModalRating] = useState(0);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [posts, setPosts] = useState([]);

  const allServices = [...SERVICES, ...FEATURED_SERVICES];
  const service = allServices.find(s => s.id === serviceId);

  if (!service) {
    return <div className="profile-page">Service not found</div>;
  }

  const servicePosts = [...service.posts, ...posts.filter(p => p.serviceId === serviceId)];

  const handleSaveService = () => {
    showToast('🔖 Service saved to your list!');
  };

  const handleGetDirections = () => {
    window.open(service.dirLink, '_blank');
  };

  const handleSubmitModalPost = () => {
    const name = document.getElementById('m-name').value.trim() || 'Anonymous';
    const desc = document.getElementById('m-desc').value.trim();
    const type = document.getElementById('m-type').value;

    if (!desc) {
      alert('Please write a description.');
      return;
    }

    setPosts([...posts, {
      type,
      name,
      stars: modalRating || 4,
      desc,
      serviceId,
      id: Date.now()
    }]);

    setModalSuccess(true);
    document.getElementById('m-desc').value = '';
    document.getElementById('m-name').value = '';
    setModalRating(0);

    setTimeout(() => {
      setModalOpen(false);
      setModalSuccess(false);
    }, 1500);

    showToast('✓ Tip posted!');
  };

  return (
    <div className="profile-page active">
      <div className="profile-hero">
        <div>
          <button className="back-btn" onClick={onBack}>
            ← Back to Services
          </button>
          <div className="profile-cat-tag">{service.catLabel}</div>
          <div className="profile-name">{service.name}</div>
          <div className="profile-addr">{service.addr}</div>
          <div className="profile-stats">
            <div className="profile-stat">
              <div className="val">{service.rating}</div>
              <div className="lbl">Rating</div>
            </div>
            <div className="profile-stat">
              <div className="val">{service.reviews}</div>
              <div className="lbl">Reviews</div>
            </div>
            <div className="profile-stat">
              <div className="val">{service.tips + posts.filter(p => p.serviceId === serviceId).length}</div>
              <div className="lbl">Tips</div>
            </div>
          </div>
        </div>
        <div className="profile-actions">
          <button className="btn-directions" onClick={handleGetDirections}>
            🗺 Get Directions
          </button>
          <button className="btn-save" onClick={handleSaveService}>
            🔖 Save Service
          </button>
          <button
            className="btn-outline"
            onClick={() => setModalOpen(true)}
            style={{ marginTop: 0, padding: 10 }}
          >
            ✏️ Post a Tip
          </button>
        </div>
      </div>

      <div className="profile-map-section">
        <iframe
          src={service.mapEmbed}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        />
      </div>

      <div className="profile-body">
        <div className="profile-main">
          <div className="section-title">Community Reviews & Tips</div>
          <div>
            {servicePosts.map((post, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <div className="reviewer-name">{post.name}</div>
                  <span className={`review-badge badge-${post.type}`}>
                    {post.type.toUpperCase()}
                  </span>
                </div>
                <div className="review-stars">
                  {'★'.repeat(post.stars)}{'☆'.repeat(5 - post.stars)}
                </div>
                <div className="review-text">{post.desc}</div>
              </div>
            ))}
            {servicePosts.length === 0 && (
              <p style={{ color: '#888' }}>No reviews yet.</p>
            )}
          </div>
        </div>
        <div className="profile-sidebar">
          <div className="section-title">Service Info</div>
          <div>
            {Object.entries(service.info).map(([key, value]) => (
              <div key={key} className="info-row">
                <span className="key">{key}</span>
                <span className="val">{value}</span>
              </div>
            ))}
            <div className="info-row">
              <span className="key">Status</span>
              <span className={`val ${service.status.includes('Open') ? 'open-badge' : 'closed-badge'}`}>
                {service.status}
              </span>
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <div className="section-title">Hours</div>
            <div>
              {Object.entries(service.hours).map(([day, time]) => (
                <div key={day} className="info-row">
                  <span className="key">{day}</span>
                  <span className="val">{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className={`modal-overlay ${modalOpen ? 'open' : ''}`}>
        <div className="modal">
          <button className="modal-close" onClick={() => setModalOpen(false)}>✕</button>
          <div className="modal-title">✏️ Post a Tip</div>
          <div className="form-group">
            <label className="form-label">Tip Type</label>
            <select className="form-select" id="m-type">
              <option value="tip">💡 Tip</option>
              <option value="warning">⚠️ Warning</option>
              <option value="kudos">👏 Kudos</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input className="form-input" id="m-name" placeholder="Anonymous" />
          </div>
          <div className="form-group">
            <label className="form-label">Rating</label>
            <div className="star-input">
              {[1, 2, 3, 4, 5].map((n) => (
                <span
                  key={n}
                  className={modalRating >= n ? 'active' : ''}
                  onClick={() => setModalRating(n)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              className="form-textarea"
              id="m-desc"
              placeholder="Share your experience..."
            />
          </div>
          <button className="btn-submit" onClick={handleSubmitModalPost}>
            Post Tip
          </button>
          {modalSuccess && (
            <div className="success-msg" style={{ display: 'block' }}>
              ✓ Your tip has been posted!
            </div>
          )}
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Profile;