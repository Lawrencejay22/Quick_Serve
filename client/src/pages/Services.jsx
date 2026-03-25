import { useState } from 'react';
import { SERVICES } from '../data/services';
import { getStars } from '../utils/helpers';
import Footer from '../components/Footer';
import '../css/Services.css';

const Services = ({ onNavigate, onShowProfile }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [mapUrl, setMapUrl] = useState("https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15726.3!2d122.5622!3d10.7202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1");
  const [mapLabel, setMapLabel] = useState('📍 Jaro, Iloilo City');
  const [dirLink, setDirLink] = useState(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'medical', label: 'Medical' },
    { id: 'food', label: 'Food' },
    { id: 'beauty', label: 'Beauty' },
    { id: 'repair', label: 'Repair' },
    { id: 'mall', label: 'Mall' },
  ];

  const filteredServices = activeFilter === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.cat === activeFilter);

  const getDirections = (e, service) => {
    e.stopPropagation();
    setMapUrl(service.mapEmbed);
    setMapLabel(`📍 ${service.addr}`);
    setDirLink(service.dirLink);
    // Scroll to map for visibility
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page active">
      <div className="services-hero">
        <div className="tag">ILOILO CITY • JARO DISTRICT</div>
        <h1>Service <span>Board</span></h1>
        <p>Directory of services rated and reviewed by the community.</p>
        <div className="cat-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`cat-btn ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="map-area">
        <iframe
          src={mapUrl}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map"
        />
        <div className="map-overlay">
          <span>{mapLabel}</span>
          {dirLink && (
            <a 
              href={dirLink} 
              target="_blank" 
              rel="noreferrer"
              className="map-dir-link"
              style={{
                marginLeft: '12px',
                color: '#e63946',
                fontWeight: '600',
                textDecoration: 'none',
                background: '#fff',
                padding: '4px 10px',
                borderRadius: '4px',
                fontSize: '0.75rem'
              }}
            >
              Get Full Directions
            </a>
          )}
        </div>
      </div>

      <div className="services-list">
        <div className="services-grid">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="service-card"
              onClick={() => onShowProfile(service.id)}
            >
              <div className="service-card-top">
                <div className="service-icon">{service.icon}</div>
                <div className="service-badge">{service.badge}</div>
              </div>
              <div className="service-name">{service.name}</div>
              <div className="service-addr">📍 {service.addr}</div>
              <div className="service-rating-row">
                <div className="big-rating">{service.rating}</div>
                <div className="rating-meta">
                  <div className="stars">{getStars(service.rating)}</div>
                  <div className="count">{service.reviews} reviews</div>
                </div>
              </div>
              <div className="service-card-footer">
                <button
                  className="btn-sm btn-sm-primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    onShowProfile(service.id);
                  }}
                >
                  View Profile
                </button>
                <button
                  className="btn-sm btn-sm-ghost"
                  onClick={(e) => getDirections(e, service)}
                >
                  Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Services;