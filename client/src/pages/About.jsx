import Footer from '../components/Footer';
import '../css/About.css';

const About = ({ onNavigate }) => {
  return (
    <div className="page active">
      <div className="about-hero">
        <div>
          <div className="tag">
            COMMUNITY · REAL UPDATE
          </div>
          <h1>About <span>ServeMap</span></h1>
          <p>
            QuickServe was born out of a simple frustration: finding reliable
            services in Iloilo City was too hard. We wanted to change that. Our
            platform makes it easy for everyone to find and share trusted local
            services — from barbershops in Jaro to clinics in Lapuz.
          </p>
          <p className="sub-text">
            This is a 100% Iloilo-centric experience to give Ilonggos a real
            tool for how local communities can leverage technology to make their
            collective knowledge stronger together.
          </p>
        </div>
        <div className="rating-widget">
          <div className="big">4.9</div>
          <div className="stars">★★★★★</div>
          <div className="lbl">Platform Rating</div>
        </div>
      </div>

      <div className="about-section" style={{ borderBottom: '1px solid #2a2a2a' }}>
        <h2>Meet the <span>builders</span></h2>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar">PL</div>
            <div className="team-name">Project Lead</div>
            <div className="team-role">Vision, Strategy & Direction</div>
          </div>
          <div className="team-card">
            <div className="team-avatar">DR</div>
            <div className="team-name">Design Researcher</div>
            <div className="team-role">UX Research & Community Insight</div>
          </div>
          <div className="team-card">
            <div className="team-avatar">SA</div>
            <div className="team-name">System Analyst</div>
            <div className="team-role">Architecture & Data Systems</div>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2>What we <span>stand for</span></h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🏚</div>
            <div className="value-title">Community First</div>
            <div className="value-desc">
              Every feature is built to serve Iloilo's community — real people
              with real needs, not corporations.
            </div>
          </div>
          <div className="value-card">
            <div className="value-icon">🔍</div>
            <div className="value-title">Radical Transparency</div>
            <div className="value-desc">
              We publish real ratings, real reviews and real feedback — no
              pay-to-rank schemes, ever.
            </div>
          </div>
          <div className="value-card">
            <div className="value-icon">🗺</div>
            <div className="value-title">Local Relevance</div>
            <div className="value-desc">
              Built specifically for Iloilo City. We know the districts, the
              barangays and the people.
            </div>
          </div>
          <div className="value-card">
            <div className="value-icon">✨</div>
            <div className="value-title">Design Excellence</div>
            <div className="value-desc">
              Great tools deserve great design. We obsess over every detail so
              using QuickServe feels effortless.
            </div>
          </div>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default About;