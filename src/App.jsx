import './App.css'
import { useEffect, useState } from 'react'
import { AreaChart, Area, ResponsiveContainer } from 'recharts'
import FlowchartCanvas from './components/FlowchartCanvas'

function App() {
  const [logs, setLogs] = useState([])
  const [ecomOrders, setEcomOrders] = useState(247)
  const [posTransactions, setPosTransactions] = useState(89)
  const [syncLatency, setSyncLatency] = useState(12)

  useEffect(() => {
    const generateDataPoint = () => {
      return {
        time: Date.now(),
        responseTime: Math.round(20 + Math.random() * 50),
        requests: Math.round(100 + Math.random() * 150)
      }
    }

    const initialData = Array(30).fill(0).map(() => generateDataPoint())
    setLogs(initialData)

    const interval = setInterval(() => {
      setLogs(prev => [...prev.slice(1), generateDataPoint()])
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setEcomOrders(prev => prev + Math.floor(Math.random() * 3))
      setPosTransactions(prev => prev + Math.floor(Math.random() * 2))
      setSyncLatency(Math.round(10 + Math.random() * 8))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="App">
      {/* Animated Geometric Background */}
      <div className="geometric-background">
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        <div className="gradient-orb gradient-orb-3"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
          <div className="shape shape-6"></div>
        </div>
        <div className="geometric-grid">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.03)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
      </div>
      
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <a href="/" className="logo">
            <img src="/yacht-club-logo.png" alt="whaletools" className="logo-img" />
          </a>
          
          <nav className="nav">
            <a href="#features" className="nav-item">Features</a>
            <a href="#pricing" className="nav-item">Pricing</a>
            <a href="/contact" className="nav-item">Contact</a>
          </nav>
          
          <div className="nav-actions">
            <a href="/signup" className="signup-btn">Get Started</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-glow"></div>
        
        {/* Background Performance Chart */}
        <div className="performance-chart">
          <div className="chart-header">
            <div className="chart-title">System Performance</div>
            <div className="chart-metric">
              <span className="metric-label">Avg</span>
              <span className="metric-value">
                {logs.length > 0 ? Math.round(logs.reduce((a, b) => a + (b.responseTime || 0), 0) / logs.length) : 0}ms
              </span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={logs} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="rgba(255, 255, 255, 0.3)" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="rgba(255, 255, 255, 0.05)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area 
                type="monotone" 
                dataKey="responseTime" 
                stroke="rgba(255, 255, 255, 0.5)" 
                strokeWidth={1.5}
                fill="url(#colorGradient)"
                animationDuration={1000}
                animationEasing="ease-in-out"
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="chart-footer">
            <div className="chart-stats">
              <div className="stat-mini">
                <span className="stat-mini-label">Requests</span>
                <span className="stat-mini-value">{logs[logs.length - 1]?.requests || 0}/s</span>
              </div>
              <div className="stat-mini">
                <span className="stat-mini-label">Latency</span>
                <span className="stat-mini-value">{logs[logs.length - 1]?.responseTime || 0}ms</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-container">
          <h1 className="hero-title">
            whaletools
          </h1>
          <p className="hero-subtitle">
            Scale efficiently. Built for retail, engineered for growth.
          </p>
          <div className="hero-actions">
            <a href="/signup" className="btn-primary">
              Start Free Trial
              <svg className="btn-arrow" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>
            <a href="/demo" className="btn-secondary">See How It Works</a>
          </div>
        </div>
        
        {/* Animated Cards */}
        <div className="hero-cards">
          <div className="card card-1">
            <div className="card-glow"></div>
            <div className="card-ring">
              <svg className="progress-ring" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" className="progress-ring-bg"/>
                <circle cx="60" cy="60" r="54" className="progress-ring-fill" style={{strokeDasharray: '339.292', strokeDashoffset: '33.9292'}}/>
              </svg>
            </div>
            <div className="card-particles">
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
            </div>
            <div className="card-content">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M3 3h18v18H3z"/>
                  <path d="M3 9h18M9 21V9"/>
                </svg>
              </div>
              <div className="card-text">
                <div className="card-label">Orders Today</div>
                <div className="card-value">{ecomOrders}</div>
                <div className="card-status">
                  <span className="status-dot"></span>
                  +12 last hour
                </div>
              </div>
            </div>
            <div className="card-metric">
              <div className="metric-item">
                <span className="metric-icon">$</span>
                <span className="metric-text">18.2K</span>
              </div>
            </div>
          </div>
          
          <div className="card card-2">
            <div className="card-glow"></div>
            <div className="card-ring">
              <svg className="progress-ring" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" className="progress-ring-bg"/>
                <circle cx="60" cy="60" r="54" className="progress-ring-fill" style={{strokeDasharray: '339.292', strokeDashoffset: '50.8938'}}/>
              </svg>
            </div>
            <div className="card-particles">
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
            </div>
            <div className="card-content">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="1" y="4" width="22" height="16" rx="2"/>
                  <path d="M1 10h22"/>
                </svg>
              </div>
              <div className="card-text">
                <div className="card-label">POS Transactions</div>
                <div className="card-value">{posTransactions}</div>
                <div className="card-status">
                  <span className="status-dot"></span>
                  4 terminals
                </div>
              </div>
            </div>
            <div className="card-metric">
              <div className="metric-item">
                <span className="metric-icon">⚡</span>
                <span className="metric-text">Fast</span>
              </div>
            </div>
          </div>
          
          <div className="card card-3">
            <div className="card-glow"></div>
            <div className="card-ring">
              <svg className="progress-ring" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" className="progress-ring-bg"/>
                <circle cx="60" cy="60" r="54" className="progress-ring-fill" style={{strokeDasharray: '339.292', strokeDashoffset: '16.9646'}}/>
              </svg>
            </div>
            <div className="card-particles">
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
            </div>
            <div className="card-content">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="card-text">
                <div className="card-label">Sync Latency</div>
                <div className="card-value">{syncLatency}ms</div>
                <div className="card-status">
                  <span className="status-dot"></span>
                  Real-time
                </div>
              </div>
            </div>
            <div className="card-metric">
              <div className="metric-item">
                <span className="metric-icon">↻</span>
                <span className="metric-text">Synced</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flowchart Section */}
      <FlowchartCanvas />

      {/* Tools for Whales */}
      <section className="features-section">
        <div className="features-container">
          <div className="section-header">
            <h2 className="section-title">Tools for whales.</h2>
            <p className="section-subtitle">We know how the game works. You get the unfair advantage.</p>
          </div>
          
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-number">01</div>
              <div className="feature-content">
                <h3>Online Store</h3>
                <p>Customers order. You fulfill. No middleman tax.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-number">02</div>
              <div className="feature-content">
                <h3>Point of Sale</h3>
                <p>Take cash. Card. Whatever. Instant sync across everything.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-number">03</div>
              <div className="feature-content">
                <h3>Inventory</h3>
                <p>Track product across every location. Never get caught short.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-number">04</div>
              <div className="feature-content">
                <h3>Analytics</h3>
                <p>Know your whales. See what moves. Make informed plays.</p>
              </div>
            </div>
          </div>
          
          {/* Mystery CTA Section */}
          <div className="mystery-section">
            <div className="mystery-content">
              <div className="mystery-badge">MCP Available</div>
              <h3 className="mystery-title">Want to see everything?</h3>
              <a href="/contact" className="mystery-cta">
                Let's talk
                <svg className="btn-arrow" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </div>
          
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing-section">
        <div className="pricing-container">
          <h2>Simple pricing</h2>
          <div className="pricing-card">
            <div className="pricing-glow"></div>
            <div className="price">
              <span className="price-amount">$299</span>
              <span className="price-period">/month</span>
            </div>
            <ul className="pricing-features">
              <li>
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Online store
              </li>
              <li>
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Point of sale system
              </li>
              <li>
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Inventory management
              </li>
              <li>
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Unlimited products
              </li>
              <li>
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Unlimited orders
              </li>
              <li>
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Support included
              </li>
            </ul>
            <a href="/signup" className="pricing-btn">
              Start Free Trial
              <svg className="btn-arrow" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>
            <p className="pricing-note">No credit card required</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-glow"></div>
        <div className="cta-container">
          <h2>Ready to start selling online?</h2>
          <p>Set up your store in minutes. Start taking orders today.</p>
          <a href="/signup" className="btn-primary btn-large">
            Get Started Free
            <svg className="btn-arrow" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">whaletools</div>
              <p>Built for cannabis retailers.</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <a href="/features">Features</a>
                <a href="/pricing">Pricing</a>
              </div>
              <div className="footer-column">
                <h4>Support</h4>
                <a href="/help">Help Center</a>
                <a href="/contact">Contact Us</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="/about">About</a>
                <a href="/privacy">Privacy</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 whaletools. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
