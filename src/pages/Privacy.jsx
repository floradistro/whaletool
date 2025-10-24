import '../App.css'
import { useEffect } from 'react'

function Privacy() {
  useEffect(() => {
    document.title = 'Privacy Policy - Whaletools | Your Data, Your Rules'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Your data is yours. We don\'t sell it, rent it, or do shady things with it. Clear privacy policy. Updated January 2025.')
    }
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

      {/* Privacy Hero */}
      <section className="hero" style={{paddingBottom: '40px'}}>
        <div className="hero-glow"></div>
        <div className="hero-container" style={{animation: 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) backwards'}}>
          <div style={{marginBottom: '32px', animation: 'float 6s ease-in-out infinite'}}>
            <img src="/yacht-club-logo.png" alt="whaletools" style={{height: '80px', opacity: '0.9'}} />
          </div>
          <h1 className="hero-title" style={{fontSize: '56px', marginBottom: '16px'}}>
            Your Data.<br />Your Rules.
          </h1>
          <p className="hero-subtitle" style={{maxWidth: '600px', margin: '0 auto 0 auto', fontSize: '16px', color: 'var(--gray-500)'}}>
            Updated January 2025
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="features-section" style={{paddingTop: '20px'}}>
        <div className="features-container">
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            
            <div style={{fontSize: '16px', lineHeight: '1.8', color: 'var(--gray-400)'}}>
              
              {/* Simple Promise */}
              <div style={{
                marginBottom: '60px',
                padding: '48px',
                background: 'rgba(10, 10, 10, 0.4)',
                border: '1px solid var(--gray-800)',
                borderRadius: '16px',
                textAlign: 'center',
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s backwards'
              }}>
                <h2 style={{fontSize: '32px', fontWeight: '400', letterSpacing: '-0.02em', color: 'var(--geist-foreground)', marginBottom: '20px'}}>
                  Simple.
                </h2>
                <p style={{fontSize: '18px', lineHeight: '1.6', color: 'var(--gray-300)'}}>
                  Your data is yours. We don't sell it. We don't rent it. We don't do shady things with it.
                </p>
              </div>

              <div className="privacy-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '60px'}}>
                <div style={{
                  padding: '32px',
                  background: 'rgba(10, 10, 10, 0.3)',
                  border: '1px solid var(--gray-900)',
                  borderRadius: '12px',
                  animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s backwards'
                }}>
                  <h3 style={{fontSize: '20px', fontWeight: '500', color: 'var(--geist-foreground)', marginBottom: '12px'}}>
                    What We Collect
                  </h3>
                  <p>Account info. Business data. Usage patterns. Security logs.</p>
                </div>

                <div style={{
                  padding: '32px',
                  background: 'rgba(10, 10, 10, 0.3)',
                  border: '1px solid var(--gray-900)',
                  borderRadius: '12px',
                  animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s backwards'
                }}>
                  <h3 style={{fontSize: '20px', fontWeight: '500', color: 'var(--geist-foreground)', marginBottom: '12px'}}>
                    Why We Collect It
                  </h3>
                  <p>Run the platform. Keep it secure. Make it better.</p>
                </div>

                <div style={{
                  padding: '32px',
                  background: 'rgba(10, 10, 10, 0.3)',
                  border: '1px solid var(--gray-900)',
                  borderRadius: '12px',
                  animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s backwards'
                }}>
                  <h3 style={{fontSize: '20px', fontWeight: '500', color: 'var(--geist-foreground)', marginBottom: '12px'}}>
                    Who Gets It
                  </h3>
                  <p>You. Service providers. Nobody else. Ever.</p>
                </div>

                <div style={{
                  padding: '32px',
                  background: 'rgba(10, 10, 10, 0.3)',
                  border: '1px solid var(--gray-900)',
                  borderRadius: '12px',
                  animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.5s backwards'
                }}>
                  <h3 style={{fontSize: '20px', fontWeight: '500', color: 'var(--geist-foreground)', marginBottom: '12px'}}>
                    Your Rights
                  </h3>
                  <p>Access it. Export it. Delete it. Anytime.</p>
                </div>
              </div>

              <div style={{
                padding: '40px',
                background: 'rgba(10, 10, 10, 0.4)',
                border: '1px solid var(--gray-800)',
                borderRadius: '12px',
                marginBottom: '40px',
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.6s backwards'
              }}>
                <h3 style={{fontSize: '24px', fontWeight: '400', color: 'var(--geist-foreground)', marginBottom: '16px'}}>
                  Security
                </h3>
                <p style={{marginBottom: '12px'}}>
                  Encrypted in transit (TLS). Encrypted at rest (AES-256). Industry-standard security.
                </p>
                <p style={{fontSize: '14px', color: 'var(--gray-500)'}}>
                  If there's a breach, you'll know within 72 hours. No hiding. No delays.
                </p>
              </div>

              <div style={{
                padding: '40px',
                background: 'rgba(10, 10, 10, 0.4)',
                border: '1px solid var(--gray-800)',
                borderRadius: '12px',
                marginBottom: '40px',
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.7s backwards'
              }}>
                <h3 style={{fontSize: '24px', fontWeight: '400', color: 'var(--geist-foreground)', marginBottom: '16px'}}>
                  Questions?
                </h3>
                <p>
                  <a href="mailto:privacy@whaletools.com" style={{color: 'var(--geist-foreground)', textDecoration: 'underline'}}>
                    privacy@whaletools.com
                  </a>
                  <br />
                  <span style={{fontSize: '14px', color: 'var(--gray-500)'}}>We respond within 48 hours.</span>
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" style={{paddingTop: '60px'}}>
        <div className="cta-glow"></div>
        <div className="cta-container">
          <h2>Your data stays yours.</h2>
          <p>Always.</p>
          <a href="/signup" className="btn-primary btn-large">
            Start Free Trial
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

export default Privacy
