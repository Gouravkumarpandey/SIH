import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <h1 className="header-title">Welcome</h1>
      </header>

      {/* Language Selector */}
      <div className="language-selector-container">
        <div className="language-selector">
          English ▼
        </div>
      </div>

      {/* App Branding */}
      <div className="app-branding">
        <div>
          <h2 className="app-title">GetBus</h2>
          <p className="app-subtitle">Bus Tracking Services</p>
        </div>
        <div className="app-logo">
          <div className="bus-icon">
            <div className="bus-stripe"></div>
            <div className="bus-window">
              <div className="bus-door"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        <p className="description-text">
          Apply online Smart Card Passes through "GetBus" mobile application or the
        </p>

        {/* Feature Grid */}
        <div className="feature-grid">
          {/* Search for Bus Stops Near Me */}
          <Link to="/buses" className="feature-card">
            <div className="feature-icon">🏃‍♂️</div>
            <h3 className="feature-title">SEARCH FOR BUS STOPS NEAR ME</h3>
          </Link>

          {/* Search Buses Between Two Bus Stops */}
          <div className="feature-card">
            <div className="feature-icon">🚌</div>
            <h3 className="feature-title">SEARCH BUSES BETWEEN TWO BUS STOPS (FROM-TO)</h3>
          </div>

          {/* Smart Card */}
          <div className="feature-card">
            <div className="feature-icon">💳</div>
            <h3 className="feature-title">SMART CARD</h3>
          </div>

          {/* Track Bus by Route Number */}
          <div className="feature-card">
            <div className="feature-icon">📍</div>
            <h3 className="feature-title">TRACK BUS BY ROUTE NUMBER</h3>
          </div>

          {/* My Favourites */}
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3 className="feature-title">MY FAVOURITES</h3>
          </div>

          {/* Customer Grievance */}
          <div className="feature-card">
            <div className="feature-icon">👤</div>
            <h3 className="feature-title">CUSTOMER GRIEVANCE</h3>
          </div>
        </div>

        {/* Online Booking Card - Full Width */}
        <div className="full-width-card">
          <div className="feature-icon">📱</div>
          <h3 className="feature-title">ONLINE BOOKING - LONG ROUTE BUS</h3>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">Powered By GetBus</p>
      </footer>
    </div>
  );
}