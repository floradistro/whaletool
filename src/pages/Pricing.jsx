import '../App.css'
import { useEffect } from 'react'

function Pricing() {
  useEffect(() => {
    document.title = 'Pricing - Whaletools | $299/month, No Transaction Fees'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Simple pricing. $299/month for everything. No transaction fees, no hidden costs, no surprises. Cancel anytime.')
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

      {/* Pricing Hero */}
      <section className="hero" style={{paddingBottom: '80px'}}>
        <div className="hero-glow"></div>
        <div className="hero-container" style={{animation: 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) backwards'}}>
          <div style={{marginBottom: '32px', animation: 'float 6s ease-in-out infinite'}}>
            <img src="/yacht-club-logo.png" alt="whaletools" style={{height: '120px', opacity: '0.9'}} />
          </div>
          <h1 className="hero-title" style={{fontSize: '72px', marginBottom: '24px'}}>
            One Price.<br />Everything.
          </h1>
          <p className="hero-subtitle" style={{maxWidth: '600px', margin: '0 auto 0 auto'}}>
            No surprises. No transaction fees. No games.
          </p>
        </div>
      </section>

      {/* Pricing Content */}
      <section className="features-section" style={{paddingTop: '0px', paddingBottom: '120px'}}>
        <div className="features-container">
          
          {/* Main Pricing Card */}
          <div style={{maxWidth: '600px', margin: '0 auto 80px'}}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.6) 0%, rgba(20, 20, 20, 0.4) 100%)',
              border: '1px solid var(--gray-700)',
              borderRadius: '24px',
              padding: '64px 56px',
              position: 'relative',
              overflow: 'hidden',
              animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s backwards'
            }}>
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
                animation: 'glowPulse 8s ease-in-out infinite'
              }}></div>

              <div style={{position: 'relative', zIndex: 1}}>
                <div style={{textAlign: 'center', marginBottom: '48px'}}>
                  <div style={{
                    display: 'inline-block',
                    padding: '8px 16px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: '500',
                    color: 'var(--gray-300)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '32px'
                  }}>
                    Pro Plan
                  </div>
                  
                  <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'center', marginBottom: '16px'}}>
                    <span style={{fontSize: '80px', fontWeight: '300', letterSpacing: '-0.04em', color: 'var(--geist-foreground)'}}>$299</span>
                    <span style={{fontSize: '24px', fontWeight: '200', color: 'var(--gray-500)', marginLeft: '8px'}}>/month</span>
                  </div>
                  
                  <p style={{fontSize: '16px', color: 'var(--gray-400)'}}>
                    Everything included. Forever.
                  </p>
                </div>

                <div style={{
                  padding: '40px',
                  background: 'rgba(10, 10, 10, 0.4)',
                  borderRadius: '16px',
                  marginBottom: '40px'
                }}>
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', fontSize: '15px', color: 'var(--gray-300)'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill="rgba(255, 255, 255, 0.1)"/>
                        <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Online Store
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill="rgba(255, 255, 255, 0.1)"/>
                        <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Point of Sale
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill="rgba(255, 255, 255, 0.1)"/>
                        <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Inventory
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill="rgba(255, 255, 255, 0.1)"/>
                        <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Analytics
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill="rgba(255, 255, 255, 0.1)"/>
                        <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Unlimited Products
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill="rgba(255, 255, 255, 0.1)"/>
                        <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Unlimited Orders
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill="rgba(255, 255, 255, 0.1)"/>
                        <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Full API Access
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill="rgba(255, 255, 255, 0.1)"/>
                        <path d="M6 10L9 13L14 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      24/7 Support
                    </div>
                  </div>
                </div>

                <a href="/signup" className="btn-primary" style={{width: '100%', justifyContent: 'center', height: '56px', fontSize: '16px'}}>
                  Start Free Trial
                  <svg className="btn-arrow" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </a>

                <p style={{textAlign: 'center', fontSize: '14px', color: 'var(--gray-500)', marginTop: '20px'}}>
                  14 days free. No credit card required.
                </p>
              </div>
            </div>
          </div>

          {/* Key Points */}
          <div style={{maxWidth: '900px', margin: '0 auto 80px'}}>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px'}}>
              
              <div style={{
                textAlign: 'center',
                padding: '40px 32px',
                background: 'rgba(10, 10, 10, 0.3)',
                border: '1px solid var(--gray-900)',
                borderRadius: '16px',
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s backwards'
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  margin: '0 auto 20px',
                  border: '1px solid var(--gray-800)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255, 255, 255, 0.02)'
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </div>
                <h3 style={{fontSize: '20px', fontWeight: '500', marginBottom: '12px', color: 'var(--geist-foreground)'}}>
                  No Transaction Fees
                </h3>
                <p style={{fontSize: '14px', color: 'var(--gray-500)', lineHeight: '1.6'}}>
                  Keep your margins. We don't take a cut of your sales.
                </p>
              </div>

              <div style={{
                textAlign: 'center',
                padding: '40px 32px',
                background: 'rgba(10, 10, 10, 0.3)',
                border: '1px solid var(--gray-900)',
                borderRadius: '16px',
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s backwards'
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  margin: '0 auto 20px',
                  border: '1px solid var(--gray-800)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255, 255, 255, 0.02)'
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4M12 8h.01"/>
                  </svg>
                </div>
                <h3 style={{fontSize: '20px', fontWeight: '500', marginBottom: '12px', color: 'var(--geist-foreground)'}}>
                  No Hidden Costs
                </h3>
                <p style={{fontSize: '14px', color: 'var(--gray-500)', lineHeight: '1.6'}}>
                  What you see is what you pay. Always.
                </p>
              </div>

              <div style={{
                textAlign: 'center',
                padding: '40px 32px',
                background: 'rgba(10, 10, 10, 0.3)',
                border: '1px solid var(--gray-900)',
                borderRadius: '16px',
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s backwards'
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  margin: '0 auto 20px',
                  border: '1px solid var(--gray-800)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255, 255, 255, 0.02)'
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="5" y="11" width="14" height="10" rx="2"/>
                    <path d="M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
                  </svg>
                </div>
                <h3 style={{fontSize: '20px', fontWeight: '500', marginBottom: '12px', color: 'var(--geist-foreground)'}}>
                  Cancel Anytime
                </h3>
                <p style={{fontSize: '14px', color: 'var(--gray-500)', lineHeight: '1.6'}}>
                  No contracts. No penalties. Export your data and go.
                </p>
              </div>

            </div>
          </div>

          {/* FAQ Section */}
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <h2 style={{
              fontSize: '40px',
              fontWeight: '400',
              letterSpacing: '-0.02em',
              textAlign: 'center',
              marginBottom: '48px',
              color: 'var(--geist-foreground)',
              animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.5s backwards'
            }}>
              Questions?
            </h2>

            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
              
              <div style={{
                padding: '32px',
                background: 'rgba(10, 10, 10, 0.3)',
                border: '1px solid var(--gray-900)',
                borderRadius: '12px',
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.6s backwards'
              }}>
                <h4 style={{fontSize: '18px', fontWeight: '500', marginBottom: '12px', color: 'var(--geist-foreground)'}}>
                  Can I change plans later?
                </h4>
                <p style={{fontSize: '15px', color: 'var(--gray-400)', lineHeight: '1.6'}}>
                  We only have one plan. You get everything. But if you need custom volume pricing, contact us.
                </p>
              </div>

              <div style={{
                padding: '32px',
                background: 'rgba(10, 10, 10, 0.3)',
                border: '1px solid var(--gray-900)',
                borderRadius: '12px',
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.7s backwards'
              }}>
                <h4 style={{fontSize: '18px', fontWeight: '500', marginBottom: '12px', color: 'var(--geist-foreground)'}}>
                  Do you charge per location?
                </h4>
                <p style={{fontSize: '15px', color: 'var(--gray-400)', lineHeight: '1.6'}}>
                  No. One price covers all your locations. Run as many stores as you want.
                </p>
              </div>

              <div style={{
                padding: '32px',
                background: 'rgba(10, 10, 10, 0.3)',
                border: '1px solid var(--gray-900)',
                borderRadius: '12px',
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.8s backwards'
              }}>
                <h4 style={{fontSize: '18px', fontWeight: '500', marginBottom: '12px', color: 'var(--geist-foreground)'}}>
                  What about payment processing fees?
                </h4>
                <p style={{fontSize: '15px', color: 'var(--gray-400)', lineHeight: '1.6'}}>
                  Standard Stripe rates apply (2.9% + 30¢). We don't add anything on top.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-glow"></div>
        <div className="cta-container">
          <h2>Ready to start?</h2>
          <p>Try it free for 14 days.</p>
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

export default Pricing
