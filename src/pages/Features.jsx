import '../App.css'
import AITerminal from '../components/AITerminal'

function Features() {
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

      {/* Features Hero */}
      <section className="hero" style={{paddingBottom: '80px'}}>
        <div className="hero-glow"></div>
        <div className="hero-container" style={{animation: 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) backwards'}}>
          <div style={{marginBottom: '32px', animation: 'float 6s ease-in-out infinite'}}>
            <img src="/yacht-club-logo.png" alt="whaletools" style={{height: '120px', opacity: '0.9'}} />
          </div>
          <h1 className="hero-title" style={{fontSize: '72px', marginBottom: '24px'}}>
            Everything.<br />Unified.
          </h1>
          <p className="hero-subtitle" style={{maxWidth: '700px', margin: '0 auto 0 auto'}}>
            POS. E-commerce. Inventory. Analytics. One platform. Zero friction.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="features-section" style={{paddingTop: '0px', paddingBottom: '80px'}}>
        <div className="features-container">
          <div style={{maxWidth: '1200px', margin: '0 auto'}}>
            
            {/* Main Features Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '32px',
              marginBottom: '100px'
            }}>
              
              <div style={{
                background: 'rgba(10, 10, 10, 0.4)',
                border: '1px solid var(--gray-800)',
                borderRadius: '20px',
                padding: '48px',
                transition: 'all 0.4s ease',
                position: 'relative',
                overflow: 'hidden',
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s backwards'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-30%',
                  width: '300px',
                  height: '300px',
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }}></div>
                <div style={{
                  width: '64px',
                  height: '64px',
                  border: '1px solid var(--gray-700)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                  background: 'rgba(255, 255, 255, 0.02)'
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                </div>
                <h3 style={{fontSize: '32px', fontWeight: '400', letterSpacing: '-0.02em', marginBottom: '16px', color: 'var(--geist-foreground)'}}>
                  Online Store
                </h3>
                <p style={{fontSize: '16px', lineHeight: '1.7', color: 'var(--gray-400)', marginBottom: '20px'}}>
                  Beautiful storefronts. Fast checkout. Real-time inventory sync. Your brand, your way.
                </p>
                <ul style={{fontSize: '14px', color: 'var(--gray-500)', lineHeight: '2', listStyle: 'none', paddingLeft: '0'}}>
                  <li>• Customizable themes</li>
                  <li>• Mobile-first design</li>
                  <li>• SEO optimized</li>
                  <li>• Instant deployment</li>
                </ul>
              </div>

              <div style={{
                background: 'rgba(10, 10, 10, 0.4)',
                border: '1px solid var(--gray-800)',
                borderRadius: '20px',
                padding: '48px',
                transition: 'all 0.4s ease',
                position: 'relative',
                overflow: 'hidden',
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s backwards'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-30%',
                  width: '300px',
                  height: '300px',
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }}></div>
                <div style={{
                  width: '64px',
                  height: '64px',
                  border: '1px solid var(--gray-700)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                  background: 'rgba(255, 255, 255, 0.02)'
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="1" y="4" width="22" height="16" rx="2"/>
                    <path d="M1 10h22"/>
                  </svg>
                </div>
                <h3 style={{fontSize: '32px', fontWeight: '400', letterSpacing: '-0.02em', marginBottom: '16px', color: 'var(--geist-foreground)'}}>
                  Point of Sale
                </h3>
                <p style={{fontSize: '16px', lineHeight: '1.7', color: 'var(--gray-400)', marginBottom: '20px'}}>
                  Lightning fast. Works offline. Syncs instantly. Built for real-world chaos.
                </p>
                <ul style={{fontSize: '14px', color: 'var(--gray-500)', lineHeight: '2', listStyle: 'none', paddingLeft: '0'}}>
                  <li>• Offline mode</li>
                  <li>• Multi-terminal support</li>
                  <li>• Hardware flexible</li>
                  <li>• Real-time sync</li>
                </ul>
              </div>

              <div style={{
                background: 'rgba(10, 10, 10, 0.4)',
                border: '1px solid var(--gray-800)',
                borderRadius: '20px',
                padding: '48px',
                transition: 'all 0.4s ease',
                position: 'relative',
                overflow: 'hidden',
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s backwards'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-30%',
                  width: '300px',
                  height: '300px',
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }}></div>
                <div style={{
                  width: '64px',
                  height: '64px',
                  border: '1px solid var(--gray-700)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                  background: 'rgba(255, 255, 255, 0.02)'
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>
                <h3 style={{fontSize: '32px', fontWeight: '400', letterSpacing: '-0.02em', marginBottom: '16px', color: 'var(--geist-foreground)'}}>
                  Inventory
                </h3>
                <p style={{fontSize: '16px', lineHeight: '1.7', color: 'var(--gray-400)', marginBottom: '20px'}}>
                  Track everything. Every location. Every variant. Never run out at the wrong time.
                </p>
                <ul style={{fontSize: '14px', color: 'var(--gray-500)', lineHeight: '2', listStyle: 'none', paddingLeft: '0'}}>
                  <li>• Multi-location tracking</li>
                  <li>• Low-stock alerts</li>
                  <li>• Variant support</li>
                  <li>• Transfer management</li>
                </ul>
              </div>

              <div style={{
                background: 'rgba(10, 10, 10, 0.4)',
                border: '1px solid var(--gray-800)',
                borderRadius: '20px',
                padding: '48px',
                transition: 'all 0.4s ease',
                position: 'relative',
                overflow: 'hidden',
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s backwards'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-30%',
                  width: '300px',
                  height: '300px',
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }}></div>
                <div style={{
                  width: '64px',
                  height: '64px',
                  border: '1px solid var(--gray-700)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                  background: 'rgba(255, 255, 255, 0.02)'
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="18" y1="20" x2="18" y2="10"/>
                    <line x1="12" y1="20" x2="12" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="14"/>
                  </svg>
                </div>
                <h3 style={{fontSize: '32px', fontWeight: '400', letterSpacing: '-0.02em', marginBottom: '16px', color: 'var(--geist-foreground)'}}>
                  Analytics
                </h3>
                <p style={{fontSize: '16px', lineHeight: '1.7', color: 'var(--gray-400)', marginBottom: '20px'}}>
                  Know your numbers. See what moves. Make better decisions. Real-time insights.
                </p>
                <ul style={{fontSize: '14px', color: 'var(--gray-500)', lineHeight: '2', listStyle: 'none', paddingLeft: '0'}}>
                  <li>• Sales reports</li>
                  <li>• Customer insights</li>
                  <li>• Product performance</li>
                  <li>• Custom dashboards</li>
                </ul>
              </div>

            </div>

            {/* AI Terminal Demo */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '100px',
              animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.5s backwards'
            }}>
              <AITerminal />
            </div>

            {/* Developer Section */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.6) 0%, rgba(20, 20, 20, 0.4) 100%)',
              border: '1px solid var(--gray-700)',
              borderRadius: '24px',
              padding: '64px 56px',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '80px',
              animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.5s backwards'
            }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)',
                pointerEvents: 'none'
              }}></div>
              
              <div style={{position: 'relative', zIndex: 1}}>
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
                  marginBottom: '24px'
                }}>
                  Developer First
                </div>
                
                <h2 style={{fontSize: '48px', fontWeight: '400', letterSpacing: '-0.03em', marginBottom: '24px', color: 'var(--geist-foreground)'}}>
                  Built for Developers
                </h2>
                
                <p style={{fontSize: '20px', lineHeight: '1.7', color: 'var(--gray-400)', marginBottom: '48px', maxWidth: '800px'}}>
                  Full REST API. Webhook support. MCP integration. Build whatever you need.
                </p>

                <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px'}}>
                  <div style={{
                    padding: '32px',
                    background: 'rgba(10, 10, 10, 0.6)',
                    border: '1px solid var(--gray-800)',
                    borderRadius: '16px',
                    transition: 'all 0.3s ease'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      border: '1px solid var(--gray-700)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                      background: 'rgba(255, 255, 255, 0.02)'
                    }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <polyline points="16 18 22 12 16 6"/>
                        <polyline points="8 6 2 12 8 18"/>
                      </svg>
                    </div>
                    <h4 style={{fontSize: '18px', fontWeight: '500', marginBottom: '12px', color: 'var(--geist-foreground)'}}>
                      REST API
                    </h4>
                    <p style={{fontSize: '14px', color: 'var(--gray-500)', lineHeight: '1.6'}}>
                      Full CRUD operations. Versioned. Rate limits that make sense.
                    </p>
                  </div>

                  <div style={{
                    padding: '32px',
                    background: 'rgba(10, 10, 10, 0.6)',
                    border: '1px solid var(--gray-800)',
                    borderRadius: '16px',
                    transition: 'all 0.3s ease'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      border: '1px solid var(--gray-700)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                      background: 'rgba(255, 255, 255, 0.02)'
                    }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                      </svg>
                    </div>
                    <h4 style={{fontSize: '18px', fontWeight: '500', marginBottom: '12px', color: 'var(--geist-foreground)'}}>
                      Webhooks
                    </h4>
                    <p style={{fontSize: '14px', color: 'var(--gray-500)', lineHeight: '1.6'}}>
                      Real-time events. Retry logic. Delivery guarantees.
                    </p>
                  </div>

                  <div style={{
                    padding: '32px',
                    background: 'rgba(10, 10, 10, 0.6)',
                    border: '1px solid var(--gray-800)',
                    borderRadius: '16px',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      padding: '4px 8px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '6px',
                      fontSize: '10px',
                      fontWeight: '600',
                      color: 'var(--gray-300)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      MCP
                    </div>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      border: '1px solid var(--gray-700)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                      background: 'rgba(255, 255, 255, 0.02)'
                    }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <path d="M20.4 14.5L16 10 4 20"/>
                      </svg>
                    </div>
                    <h4 style={{fontSize: '18px', fontWeight: '500', marginBottom: '12px', color: 'var(--geist-foreground)'}}>
                      AI Native
                    </h4>
                    <p style={{fontSize: '14px', color: 'var(--gray-500)', lineHeight: '1.6'}}>
                      Model Context Protocol. Let AI tools access your data.
                    </p>
                  </div>
                </div>

                <div style={{
                  marginTop: '40px',
                  padding: '24px 32px',
                  background: 'rgba(0, 0, 0, 0.4)',
                  borderRadius: '12px',
                  border: '1px solid var(--gray-900)',
                  fontFamily: 'monospace',
                  fontSize: '14px',
                  color: 'var(--gray-300)',
                  overflowX: 'auto'
                }}>
                  <div style={{color: 'var(--gray-500)', marginBottom: '4px'}}>// Example: Fetch products</div>
                  <div><span style={{color: 'var(--gray-200)'}}>fetch</span>(<span style={{color: 'var(--gray-400)'}}>'https://api.whaletools.com/v1/products'</span>, {'{'}</div>
                  <div style={{paddingLeft: '20px'}}>headers: {'{'} <span style={{color: 'var(--gray-400)'}}>'Authorization'</span>: <span style={{color: 'var(--gray-400)'}}>'Bearer YOUR_API_KEY'</span> {'}'}</div>
                  <div>{'}'})</div>
                </div>
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="mystery-section" style={{animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.6s backwards'}}>
            <div className="mystery-content">
              <div className="mystery-badge">14-Day Trial</div>
              <h3 className="mystery-title">See it in action</h3>
              <p style={{fontSize: '20px', color: 'var(--gray-400)', marginBottom: '32px', lineHeight: '1.6'}}>
                Full access. No credit card. No commitment.
              </p>
              <a href="/signup" className="mystery-cta">
                Start Free Trial
                <svg className="btn-arrow" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </div>
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

export default Features
