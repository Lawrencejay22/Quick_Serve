import { useState, useEffect } from 'react';
import { SERVICES } from '../data/services';
import { showToast } from '../utils/helpers';
import Footer from '../components/Footer';
import '../css/Community.css';

const Community = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedRating, setSelectedRating] = useState(0);
  const [posts, setPosts] = useState([]);
  const [successVisible, setSuccessVisible] = useState(false);

  // Initialize posts from services data
  useEffect(() => {
    const initialPosts = [];
    SERVICES.forEach((s) => {
      s.posts.forEach((p) => {
        initialPosts.push({ ...p, service: s.name, id: Math.random() });
      });
    });
    setPosts(initialPosts);
  }, []);

  const filters = [
    { id: 'all', label: 'All Posts' },
    { id: 'tip', label: 'Tips' },
    { id: 'warning', label: 'Warning' },
    { id: 'kudos', label: 'Kudos' },
  ];

  const filteredPosts = activeFilter === 'all' 
    ? posts 
    : posts.filter(p => p.type === activeFilter);

  const handleSubmitPost = () => {
    const type = document.getElementById('tip-type').value;
    const service = document.getElementById('tip-service').value;
    const name = document.getElementById('tip-name').value.trim() || 'Anonymous';
    const desc = document.getElementById('tip-desc').value.trim();

    if (!desc) {
      alert('Please write a description.');
      return;
    }

    setPosts([...posts, {
      type,
      service,
      name,
      stars: selectedRating || 4,
      desc,
      id: Date.now()
    }]);

    setSuccessVisible(true);
    document.getElementById('tip-desc').value = '';
    document.getElementById('tip-name').value = '';
    setSelectedRating(0);

    setTimeout(() => setSuccessVisible(false), 3000);
    showToast('✓ Tip posted!');
  };

  return (
    <div className="page active">
      <div className="community-hero">
        <div className="tag">
          COMMUNITY · REAL UPDATE
        </div>
        <h1>
          Community <span>Board</span>
        </h1>
        <p>
          Tips, warnings and kudos from Ilonggos who've actually been there.
        </p>
      </div>

      <div className="community-layout">
        <div className="community-feed">
          <div className="post-filters">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div>
            {[...filteredPosts].reverse().map((post) => (
              <div key={post.id} className="post-card">
                <div className="post-header">
                  <span className={`post-type-badge type-${post.type}`}>
                    {post.type.toUpperCase()}
                  </span>
                  <span className="post-meta">{post.service}</span>
                </div>
                <div className="post-service">{post.service}</div>
                <div className="post-desc">{post.desc}</div>
                <div className="post-footer">
                  <span className="post-stars">
                    {'★'.repeat(post.stars)}{'☆'.repeat(5 - post.stars)}
                  </span>
                  <span className="post-author">— {post.name}</span>
                  <button 
                    className="helpful-btn"
                    onClick={(e) => e.target.textContent = '✓ Helpful'}
                  >
                    Helpful?
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="community-sidebar">
          <div className="post-form">
            <div className="form-title">✏️ Share a Tip</div>
            <div className="form-group">
              <label className="form-label">Tip Type</label>
              <select className="form-select" id="tip-type">
                <option value="tip">💡 Tip</option>
                <option value="warning">⚠️ Warning</option>
                <option value="kudos">👏 Kudos</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Service Name</label>
              <select className="form-select" id="tip-service">
                <option>Tatlo Lopez Barbershop</option>
                <option>The Grace Salon</option>
                <option>Clinching Gym</option>
                <option>St Paul Hospital</option>
                <option>Bella Phone Repair</option>
                <option>CAFE</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input className="form-input" id="tip-name" placeholder="Anonymous" />
            </div>
            <div className="form-group">
              <label className="form-label">Rating</label>
              <div className="star-input">
                {[1, 2, 3, 4, 5].map((n) => (
                  <span
                    key={n}
                    className={selectedRating >= n ? 'active' : ''}
                    onClick={() => setSelectedRating(n)}
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
                id="tip-desc" 
                placeholder="Share your experience..."
              />
            </div>
            <button className="btn-submit" onClick={handleSubmitPost}>
              Post Tip
            </button>
            {successVisible && (
              <div className="success-msg" style={{ display: 'block' }}>
                ✓ Your tip has been shared with the community!
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Community;