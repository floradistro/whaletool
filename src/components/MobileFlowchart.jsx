import './MobileFlowchart.css'

function MobileFlowchart() {
  return (
    <div className="mobile-flow-container">
      {/* Platform */}
      <div className="flow-platform">
        <img src="/yacht-club-logo.png" alt="whaletools" className="platform-icon" />
        <div className="platform-name">whaletools</div>
      </div>

      {/* Stack Label */}
      <div className="flow-divider">STACK</div>

      {/* Components Row 1 */}
      <div className="flow-row">
        <div className="flow-node node-ecom">
          <div className="node-icon">💻</div>
          <div className="node-label">Ecom</div>
        </div>
        <div className="flow-node node-pos">
          <div className="node-icon">💳</div>
          <div className="node-label">POS</div>
        </div>
      </div>

      {/* Components Row 2 */}
      <div className="flow-row">
        <div className="flow-node node-stock">
          <div className="node-icon">📦</div>
          <div className="node-label">Stock</div>
        </div>
        <div className="flow-node node-vendors">
          <div className="node-icon">👥</div>
          <div className="node-label">Vendors</div>
        </div>
      </div>

      {/* Reports */}
      <div className="flow-row single">
        <div className="flow-node node-reports">
          <div className="node-icon">📊</div>
          <div className="node-label">Reports</div>
        </div>
      </div>

      {/* Arrow Down */}
      <div className="flow-arrow">↓</div>

      {/* Customer */}
      <div className="flow-customer">
        <div className="customer-icon">👤</div>
        <div className="customer-label">Customer</div>
      </div>
    </div>
  )
}

export default MobileFlowchart
