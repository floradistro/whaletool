import './MobileFlowchart.css'

function MobileFlowchart() {
  return (
    <div className="mobile-flowchart">
      {/* whaletools Logo */}
      <div className="mobile-node platform-node">
        <img src="/yacht-club-logo.png" alt="whaletools" className="platform-logo" />
        <div className="platform-title">whaletools</div>
      </div>

      {/* Connection Lines from Platform */}
      <svg className="connection-lines" viewBox="0 0 300 500" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
          </linearGradient>
        </defs>
        
        {/* Lines from platform to components */}
        <line x1="150" y1="100" x2="90" y2="200" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="150" y1="100" x2="210" y2="200" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="150" y1="100" x2="90" y2="280" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="150" y1="100" x2="210" y2="280" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="150" y1="100" x2="150" y2="360" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
        </line>
        
        {/* Lines from components to customer */}
        <line x1="90" y1="240" x2="150" y2="430" stroke="url(#lineGradient)" strokeWidth="1.5" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="210" y1="240" x2="150" y2="430" stroke="url(#lineGradient)" strokeWidth="1.5" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="90" y1="320" x2="150" y2="430" stroke="url(#lineGradient)" strokeWidth="1.5" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="210" y1="320" x2="150" y2="430" stroke="url(#lineGradient)" strokeWidth="1.5" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="150" y1="400" x2="150" y2="430" stroke="url(#lineGradient)" strokeWidth="1.5" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite" />
        </line>
      </svg>

      {/* Stack Label */}
      <div className="stack-label">Stack</div>

      {/* Component Grid */}
      <div className="components-grid">
        <div className="mobile-node component-node ecom-node">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <rect x="2" y="3" width="20" height="14" rx="2"/>
            <path d="M8 21h8M12 17v4"/>
          </svg>
          <span>Ecom</span>
        </div>
        <div className="mobile-node component-node pos-node">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <rect x="1" y="4" width="22" height="16" rx="2"/>
            <path d="M1 10h22"/>
          </svg>
          <span>POS</span>
        </div>
      </div>

      <div className="components-grid">
        <div className="mobile-node component-node stock-node">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          </svg>
          <span>Stock</span>
        </div>
        <div className="mobile-node component-node vendors-node">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
          </svg>
          <span>Vendors</span>
        </div>
      </div>

      <div className="components-grid single">
        <div className="mobile-node component-node reports-node">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <line x1="12" y1="20" x2="12" y2="10"/>
            <line x1="18" y1="20" x2="18" y2="4"/>
            <line x1="6" y1="20" x2="6" y2="16"/>
          </svg>
          <span>Reports</span>
        </div>
      </div>

      {/* Customer Node */}
      <div className="mobile-node customer-node">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        <span>Customer</span>
      </div>
    </div>
  )
}

export default MobileFlowchart

