import '../App.css'
import { useState } from 'react'

function Help() {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedIdx, setExpandedIdx] = useState(null)

  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        { q: 'How do I set up my store?', a: '5-minute setup wizard. Add your info, connect payments, upload products. Done.' },
        { q: 'Can I import from another platform?', a: 'Yes. CSV, Shopify, WooCommerce, Square. Settings → Import.' },
        { q: 'How long is the trial?', a: '14 days. Full access. No credit card.' }
      ]
    },
    {
      category: 'Point of Sale',
      questions: [
        { q: 'What hardware do I need?', a: 'Any tablet or computer. Stripe Terminal, Square, or Clover readers supported.' },
        { q: 'Does it work offline?', a: 'Yes. Syncs when connection returns.' },
        { q: 'How do I add employees?', a: 'Settings → Team → Add User. Set permissions. Done.' }
      ]
    },
    {
      category: 'Pricing',
      questions: [
        { q: 'Any transaction fees?', a: 'No. $299/month flat. Keep your margins.' },
        { q: 'Can I cancel anytime?', a: 'Yes. From your dashboard. No penalties.' },
        { q: 'What payment methods?', a: 'Credit cards, ACH. Processed through Stripe.' }
      ]
    }
  ]

  const filteredFAQs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(faq => 
      searchQuery === '' || 
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

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

      {/* Help Hero */}
      <section className="hero" style={{paddingBottom: '60px'}}>
        <div className="hero-glow"></div>
        <div className="hero-container" style={{animation: 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) backwards'}}>
          <div style={{marginBottom: '32px', animation: 'float 6s ease-in-out infinite'}}>
            <img src="/yacht-club-logo.png" alt="whaletools" style={{height: '100px', opacity: '0.9'}} />
          </div>
          <h1 className="hero-title" style={{fontSize: '64px', marginBottom: '24px'}}>
            Help
          </h1>
          <p className="hero-subtitle" style={{maxWidth: '600px', margin: '0 auto 32px auto'}}>
            Quick answers. No fluff.
          </p>
          
          {/* Search Bar */}
          <div style={{maxWidth: '600px', margin: '0 auto'}}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                background: 'rgba(10, 10, 10, 0.6)',
                border: '1px solid var(--gray-800)',
                borderRadius: '12px',
                padding: '16px 20px',
                fontSize: '16px',
                color: 'var(--geist-foreground)',
                outline: 'none',
                transition: 'all 0.2s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--gray-600)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--gray-800)'}
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="features-section" style={{paddingTop: '0px', paddingBottom: '100px'}}>
        <div className="features-container">
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((category, catIdx) => (
                <div key={catIdx} style={{marginBottom: '60px'}}>
                  <h2 style={{
                    fontSize: '28px', 
                    fontWeight: '400', 
                    letterSpacing: '-0.02em', 
                    color: 'var(--geist-foreground)', 
                    marginBottom: '24px',
                    animation: `fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.1 + catIdx * 0.1}s backwards`
                  }}>
                    {category.category}
                  </h2>
                  
                  <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                    {category.questions.map((faq, faqIdx) => {
                      const globalIdx = catIdx * 100 + faqIdx
                      const isExpanded = expandedIdx === globalIdx
                      
                      return (
                        <div
                          key={faqIdx}
                          onClick={() => setExpandedIdx(isExpanded ? null : globalIdx)}
                          style={{
                            background: 'rgba(10, 10, 10, 0.3)',
                            border: '1px solid var(--gray-900)',
                            borderRadius: '12px',
                            padding: '24px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            animation: `fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.2 + catIdx * 0.1 + faqIdx * 0.05}s backwards`
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--gray-800)'}
                          onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--gray-900)'}
                        >
                          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <h3 style={{
                              fontSize: '16px',
                              fontWeight: '500',
                              color: 'var(--geist-foreground)',
                              letterSpacing: '-0.01em'
                            }}>
                              {faq.q}
                            </h3>
                            <span style={{
                              fontSize: '20px',
                              color: 'var(--gray-500)',
                              transition: 'transform 0.3s ease',
                              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
                            }}>
                              ↓
                            </span>
                          </div>
                          {isExpanded && (
                            <p style={{
                              fontSize: '15px',
                              lineHeight: '1.6',
                              color: 'var(--gray-400)',
                              marginTop: '12px',
                              paddingTop: '12px',
                              borderTop: '1px solid var(--gray-900)',
                              animation: 'fadeInUp 0.3s ease'
                            }}>
                              {faq.a}
                            </p>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))
            ) : (
              <div style={{textAlign: 'center', padding: '80px 20px'}}>
                <p style={{fontSize: '18px', color: 'var(--gray-500)'}}>
                  Nothing found. <a href="/contact" style={{color: 'var(--geist-foreground)', textDecoration: 'underline'}}>Ask us directly</a>.
                </p>
              </div>
            )}

          </div>

          {/* Contact CTA */}
          <div className="mystery-section" style={{animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.8s backwards'}}>
            <div className="mystery-content">
              <div className="mystery-badge">24hr Response</div>
              <h3 className="mystery-title">Still stuck?</h3>
              <p style={{fontSize: '18px', color: 'var(--gray-400)', marginBottom: '32px', lineHeight: '1.6'}}>
                Real humans. Fast replies.
              </p>
              <a href="/contact" className="mystery-cta">
                Contact Support
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

export default Help
