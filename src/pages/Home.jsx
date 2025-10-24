import '../App.css'
import { useEffect, useState } from 'react'
import FlowchartCanvas from '../components/FlowchartCanvas'
import AITerminal from '../components/AITerminal'

function Home() {
  const [ecomOrders, setEcomOrders] = useState(247)
  const [posTransactions, setPosTransactions] = useState(89)
  const [syncLatency, setSyncLatency] = useState(12)
  const [updateTrigger, setUpdateTrigger] = useState({
    orders: false,
    pos: false,
    latency: false
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setEcomOrders(prev => prev + Math.floor(Math.random() * 3))
      setPosTransactions(prev => prev + Math.floor(Math.random() * 2))
      setSyncLatency(Math.round(10 + Math.random() * 8))
      
      setUpdateTrigger({ orders: true, pos: true, latency: true })
      setTimeout(() => {
        setUpdateTrigger({ orders: false, pos: false, latency: false })
      }, 600)
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
            <a href="/features" className="nav-item">Features</a>
            <a href="/pricing" className="nav-item">Pricing</a>
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
        
        {/* Simplified Stats */}
        <div className="hero-stats">
          <div className="stat-card">
            <div className={`stat-value ${updateTrigger.orders ? 'value-update' : ''}`}>{ecomOrders}</div>
            <div className="stat-label">Orders Today</div>
          </div>
          
          <div className="stat-card">
            <div className={`stat-value ${updateTrigger.pos ? 'value-update' : ''}`}>{posTransactions}</div>
            <div className="stat-label">POS Transactions</div>
          </div>
          
          <div className="stat-card">
            <div className={`stat-value ${updateTrigger.latency ? 'value-update' : ''}`}>{syncLatency}ms</div>
            <div className="stat-label">Sync Latency</div>
          </div>
        </div>
      </section>

      {/* Flowchart Section */}
      <FlowchartCanvas />

      {/* AI Terminal Section */}
      <section className="features-section" style={{paddingTop: '80px', paddingBottom: '80px'}}>
        <div className="features-container">
          <div className="section-header">
            <h2 className="section-title" style={{fontSize: '48px'}}>AI Native</h2>
            <p className="section-subtitle">Watch AI interact with your data through MCP. Real-time. Instant.</p>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', marginTop: '60px'}}>
            <AITerminal />
          </div>
        </div>
      </section>

      {/* Tools for Whales */}
      <section className="features-section" id="features">
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
      <section className="pricing-section" id="pricing">
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
              <p>Built for retail operators.</p>
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
                <a href="/terms">Terms</a>
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

export default Home

