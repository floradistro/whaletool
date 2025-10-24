import '../App.css'
import { useState, useEffect } from 'react'

function Contact() {
  useEffect(() => {
    document.title = 'Contact - Whaletools | Get in Touch'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Questions? Demo? Let\'s talk. Email us at hello@whaletools.com or use our contact form. 24-hour response time.')
    }
  }, [])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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

      {/* Contact Hero */}
      <section className="hero" style={{paddingBottom: '60px'}}>
        <div className="hero-glow"></div>
        <div className="hero-container" style={{animation: 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) backwards'}}>
          <div style={{marginBottom: '32px', animation: 'float 6s ease-in-out infinite'}}>
            <img src="/yacht-club-logo.png" alt="whaletools" style={{height: '100px', opacity: '0.9'}} />
          </div>
          <h1 className="hero-title" style={{fontSize: '64px', marginBottom: '24px'}}>
            Let's Talk
          </h1>
          <p className="hero-subtitle" style={{maxWidth: '600px', margin: '0 auto 0 auto'}}>
            Questions? Demo? Just want to chat? We're here.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="features-section" style={{paddingTop: '0px', paddingBottom: '100px'}}>
        <div className="features-container">
          <div style={{maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px'}}>
            
            {/* Contact Form */}
            <div style={{animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s backwards'}}>
              <h2 style={{fontSize: '28px', fontWeight: '400', marginBottom: '32px', letterSpacing: '-0.02em'}}>Send a message</h2>
              
              <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <label style={{fontSize: '12px', color: 'var(--gray-400)', textTransform: 'uppercase', letterSpacing: '0.05em'}}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      background: 'rgba(10, 10, 10, 0.6)',
                      border: '1px solid var(--gray-800)',
                      borderRadius: '8px',
                      padding: '14px 16px',
                      fontSize: '15px',
                      color: 'var(--geist-foreground)',
                      outline: 'none',
                      transition: 'all 0.2s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--gray-600)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--gray-800)'}
                  />
                </div>

                <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <label style={{fontSize: '12px', color: 'var(--gray-400)', textTransform: 'uppercase', letterSpacing: '0.05em'}}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      background: 'rgba(10, 10, 10, 0.6)',
                      border: '1px solid var(--gray-800)',
                      borderRadius: '8px',
                      padding: '14px 16px',
                      fontSize: '15px',
                      color: 'var(--geist-foreground)',
                      outline: 'none',
                      transition: 'all 0.2s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--gray-600)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--gray-800)'}
                  />
                </div>

                <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <label style={{fontSize: '12px', color: 'var(--gray-400)', textTransform: 'uppercase', letterSpacing: '0.05em'}}>
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    style={{
                      background: 'rgba(10, 10, 10, 0.6)',
                      border: '1px solid var(--gray-800)',
                      borderRadius: '8px',
                      padding: '14px 16px',
                      fontSize: '15px',
                      color: 'var(--geist-foreground)',
                      outline: 'none',
                      transition: 'all 0.2s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--gray-600)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--gray-800)'}
                  />
                </div>

                <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <label style={{fontSize: '12px', color: 'var(--gray-400)', textTransform: 'uppercase', letterSpacing: '0.05em'}}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    style={{
                      background: 'rgba(10, 10, 10, 0.6)',
                      border: '1px solid var(--gray-800)',
                      borderRadius: '8px',
                      padding: '14px 16px',
                      fontSize: '15px',
                      color: 'var(--geist-foreground)',
                      outline: 'none',
                      transition: 'all 0.2s ease',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--gray-600)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--gray-800)'}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{width: '100%', justifyContent: 'center', marginTop: '8px'}}
                >
                  {submitted ? 'Sent ✓' : 'Send'}
                  {!submitted && (
                    <svg className="btn-arrow" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div style={{animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s backwards'}}>
              <h2 style={{fontSize: '28px', fontWeight: '400', marginBottom: '32px', letterSpacing: '-0.02em'}}>Or email us</h2>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
                <div style={{
                  background: 'rgba(10, 10, 10, 0.4)',
                  border: '1px solid var(--gray-800)',
                  borderRadius: '12px',
                  padding: '24px',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{fontSize: '11px', color: 'var(--gray-500)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>
                    General
                  </div>
                  <a href="mailto:hello@whaletools.com" style={{fontSize: '18px', color: 'var(--geist-foreground)', textDecoration: 'none', transition: 'opacity 0.2s'}}
                     onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                     onMouseLeave={(e) => e.target.style.opacity = '1'}>
                    hello@whaletools.com
                  </a>
                </div>

                <div style={{
                  background: 'rgba(10, 10, 10, 0.4)',
                  border: '1px solid var(--gray-800)',
                  borderRadius: '12px',
                  padding: '24px',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{fontSize: '11px', color: 'var(--gray-500)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>
                    Sales
                  </div>
                  <a href="mailto:sales@whaletools.com" style={{fontSize: '18px', color: 'var(--geist-foreground)', textDecoration: 'none', transition: 'opacity 0.2s'}}
                     onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                     onMouseLeave={(e) => e.target.style.opacity = '1'}>
                    sales@whaletools.com
                  </a>
                </div>

                <div style={{
                  background: 'rgba(10, 10, 10, 0.4)',
                  border: '1px solid var(--gray-800)',
                  borderRadius: '12px',
                  padding: '24px',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{fontSize: '11px', color: 'var(--gray-500)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>
                    Support
                  </div>
                  <a href="mailto:support@whaletools.com" style={{fontSize: '18px', color: 'var(--geist-foreground)', textDecoration: 'none', transition: 'opacity 0.2s'}}
                     onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                     onMouseLeave={(e) => e.target.style.opacity = '1'}>
                    support@whaletools.com
                  </a>
                </div>

                <div style={{marginTop: '16px', padding: '20px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '8px'}}>
                  <div style={{fontSize: '13px', color: 'var(--gray-500)', lineHeight: '1.6'}}>
                    We respond within 24 hours on business days.
                  </div>
                </div>
              </div>
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

export default Contact
