import '../App.css'

function About() {
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

      {/* About Hero */}
      <section className="hero" style={{paddingBottom: '60px'}}>
        <div className="hero-glow"></div>
        <div className="hero-container" style={{animation: 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) backwards'}}>
          <div style={{marginBottom: '32px', animation: 'float 6s ease-in-out infinite'}}>
            <img src="/yacht-club-logo.png" alt="whaletools" style={{height: '120px', opacity: '0.9'}} />
          </div>
          <h1 className="hero-title" style={{fontSize: '56px', marginBottom: '24px'}}>
            Built by operators.<br />For operators.
          </h1>
          <p className="hero-subtitle" style={{maxWidth: '600px', margin: '0 auto 0 auto', fontSize: '20px'}}>
            We spent years fighting clunky systems. So we built what we wished we had.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="features-section" style={{paddingTop: '0px', paddingBottom: '120px'}}>
        <div className="features-container">
          
          {/* Values Grid */}
          <div style={{maxWidth: '1000px', margin: '0 auto'}}>
            <div style={{
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '32px',
              marginBottom: '80px'
            }}>
              
              <div style={{
                background: 'rgba(10, 10, 10, 0.4)',
                border: '1px solid var(--gray-800)',
                borderRadius: '16px',
                padding: '48px 40px',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s backwards'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }}></div>
                <div style={{fontSize: '48px', marginBottom: '24px', opacity: '0.3'}}>01</div>
                <h3 style={{fontSize: '28px', fontWeight: '400', letterSpacing: '-0.02em', marginBottom: '16px', color: 'var(--geist-foreground)'}}>
                  No Surprises
                </h3>
                <p style={{fontSize: '16px', lineHeight: '1.6', color: 'var(--gray-400)'}}>
                  $299/month. That's it. No hidden fees. No per-transaction tax. You keep your margins.
                </p>
              </div>

              <div style={{
                background: 'rgba(10, 10, 10, 0.4)',
                border: '1px solid var(--gray-800)',
                borderRadius: '16px',
                padding: '48px 40px',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s backwards'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }}></div>
                <div style={{fontSize: '48px', marginBottom: '24px', opacity: '0.3'}}>02</div>
                <h3 style={{fontSize: '28px', fontWeight: '400', letterSpacing: '-0.02em', marginBottom: '16px', color: 'var(--geist-foreground)'}}>
                  Speed Wins
                </h3>
                <p style={{fontSize: '16px', lineHeight: '1.6', color: 'var(--gray-400)'}}>
                  Real-time sync. Zero lag. Your customers don't wait. Neither should you.
                </p>
              </div>

              <div style={{
                background: 'rgba(10, 10, 10, 0.4)',
                border: '1px solid var(--gray-800)',
                borderRadius: '16px',
                padding: '48px 40px',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s backwards'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }}></div>
                <div style={{fontSize: '48px', marginBottom: '24px', opacity: '0.3'}}>03</div>
                <h3 style={{fontSize: '28px', fontWeight: '400', letterSpacing: '-0.02em', marginBottom: '16px', color: 'var(--geist-foreground)'}}>
                  Built Right
                </h3>
                <p style={{fontSize: '16px', lineHeight: '1.6', color: 'var(--gray-400)'}}>
                  By people who ran the register. Closed the books. Lived the chaos. We know what matters.
                </p>
              </div>

              <div style={{
                background: 'rgba(10, 10, 10, 0.4)',
                border: '1px solid var(--gray-800)',
                borderRadius: '16px',
                padding: '48px 40px',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s backwards'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }}></div>
                <div style={{fontSize: '48px', marginBottom: '24px', opacity: '0.3'}}>04</div>
                <h3 style={{fontSize: '28px', fontWeight: '400', letterSpacing: '-0.02em', marginBottom: '16px', color: 'var(--geist-foreground)'}}>
                  Your Data
                </h3>
                <p style={{fontSize: '16px', lineHeight: '1.6', color: 'var(--gray-400)'}}>
                  It's yours. Export anytime. No lock-in. No games. This is how it should be.
                </p>
              </div>

            </div>
          </div>

          {/* Team CTA */}
          <div className="mystery-section" style={{animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.5s backwards'}}>
            <div className="mystery-content">
              <div className="mystery-badge">Join Us</div>
              <h3 className="mystery-title" style={{fontSize: '48px'}}>Think retail software shouldn't suck?</h3>
              <p style={{fontSize: '20px', color: 'var(--gray-400)', marginBottom: '32px', lineHeight: '1.6'}}>
                We're building the future. Small team. Big vision.
              </p>
              <a href="/contact" className="mystery-cta">
                Let's Talk
                <svg className="btn-arrow" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-glow"></div>
        <div className="cta-container">
          <h2>Ready?</h2>
          <p>14 days free. No credit card. Just results.</p>
          <a href="/signup" className="btn-primary btn-large">
            Start Now
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
              <img src="/yacht-club-logo.png" alt="whaletools" style={{height: '32px', marginBottom: '12px', opacity: '0.9'}} />
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

export default About
