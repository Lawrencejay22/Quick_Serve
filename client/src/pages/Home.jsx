import { SERVICES, FEATURED_SERVICES } from '../data/services';
import { getStars } from '../utils/helpers';
import Footer from '../components/Footer';
import '../css/Home.css';
import heroImage from '../assets/image/image.png';

const Home = ({ onNavigate, onShowProfile }) => {
  const topPicks = [...FEATURED_SERVICES, ...SERVICES.slice(0, 3)];

  return (
    <div className="page active">
      <div className="hero">
        <div className="hero-left">
          <h1>Find the <span>best</span><br />services in<br />Iloilo City</h1>
          <p>
            QuickServe connects you to top local services — tried and reviewed
            by your neighbors, the Ilonggos who know best.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => onNavigate('services')}>
              Explore services
            </button>
            <button className="btn-outline" onClick={() => onNavigate('community')}>
              Read community tips
            </button>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-image">
            <img src={heroImage} alt="logo" className="logo" />
          </div>
        </div>
      </div>

      <div className="why-section">
        <div className="why-heading">
          <div className="why-label">Why QuickServe</div>
          <h2>Powered by your<br /><span>community</span></h2>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">🗣️</div>
            <h4>Community Tips</h4>
            <p>
              Real tips, warnings and kudos from Ilonggos who've actually been there. Insider knowledge at your fingertips.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">🎯</div>
            <h4>Smart Filtering</h4>
            <p>
              Filter by category sort by score or distance. Find exactly what you need whether it's medical, food, beauty or repair.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">🏙</div>
            <h4>Iloilo-First</h4>
            <p>
              Built specifically for Iloilo City. We know Lapaz batchoy, We know Teds, This is your city service directory.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">⏱</div>
            <h4>Live Wait Times</h4>
            <p>
              Community-reported wait times so you know before you go. No more showing up to a 2-hour queue.
            </p>
          </div>
        </div>
      </div>

      <div className="top-picks">
        <div className="section-header">
          <div className="header-left">
            <h3>Top <span>picks</span><br /><small>this week</small></h3>
          </div>
          <button className="view-all" onClick={() => onNavigate('services')}>
            view all services
          </button>
        </div>
        <div className="picks-grid">
          {topPicks.map((pick, index) => (
            <div
              key={pick.id}
              className={`pick-card ${index === 0 ? 'featured' : ''}`}
              onClick={() => onShowProfile(pick.id)}
            >
              <div className="pick-cat">{pick.icon} {pick.badge}</div>
              <div className="pick-name">{pick.name}</div>
              <div className="pick-rating">
                <div className="rating-num">{pick.rating}</div>
                <div>
                  <div className="stars">{getStars(pick.rating)}</div>
                  <div className="rating-label">Rating Score</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-band">
        <div>
          <p>
            Know a great spot?<br /><span>Share it.</span>
          </p>
        </div>
        <button className="btn-white" onClick={() => onNavigate('community')}>
          POST A TIP
        </button>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Home;