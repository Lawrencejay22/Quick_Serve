import '../css/Footer.css';

const Footer = ({ onNavigate }) => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">Quick<span>Serve</span></div>
          <div className="footer-desc">
            Access nearby services instantly and connect with trusted
            providers in seconds.
          </div>
        </div>
        <div className="footer-nav">
          <h4>Navigate</h4>
          <ul>
            <li><a onClick={() => onNavigate('home')}>Home</a></li>
            <li><a onClick={() => onNavigate('services')}>Services</a></li>
            <li><a onClick={() => onNavigate('community')}>Community</a></li>
            <li><a onClick={() => onNavigate('about')}>About</a></li>
          </ul>
        </div>
        <div className="footer-cats">
          <h4>Categories</h4>
          <ul>
            <li><a>🔴 Medical</a></li>
            <li><a>🟡 Food</a></li>
            <li><a>🟢 Beauty</a></li>
            <li><a>🔧 Repair</a></li>
            <li><a>🏢 Mall</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;