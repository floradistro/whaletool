import { useEffect, useRef } from 'react'
import './MobileFlowchart.css'

function MobileFlowchart() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    
    // Set canvas size
    const width = 340
    const height = 600
    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    ctx.scale(dpr, dpr)

    // Node definitions
    const nodes = {
      platform: { x: 170, y: 80, radius: 60, label: 'whaletools' },
      ecom: { x: 100, y: 230, radius: 35, label: 'Ecom', color: '#3B82F6' },
      pos: { x: 240, y: 230, radius: 35, label: 'POS', color: '#8B5CF6' },
      stock: { x: 100, y: 330, radius: 35, label: 'Stock', color: '#06B6D4' },
      vendors: { x: 240, y: 330, radius: 35, label: 'Vendors', color: '#F97316' },
      reports: { x: 170, y: 430, radius: 35, label: 'Reports', color: '#EC4899' },
      customer: { x: 170, y: 540, radius: 40, label: 'Customer', color: '#22C55E' }
    }

    // Connection lines
    const connections = [
      { from: 'platform', to: 'ecom' },
      { from: 'platform', to: 'pos' },
      { from: 'platform', to: 'stock' },
      { from: 'platform', to: 'vendors' },
      { from: 'platform', to: 'reports' },
      { from: 'ecom', to: 'customer' },
      { from: 'pos', to: 'customer' },
      { from: 'stock', to: 'customer' },
      { from: 'vendors', to: 'customer' },
      { from: 'reports', to: 'customer' }
    ]

    let animationFrame
    let dashOffset = 0

    function drawConnection(from, to, opacity = 1) {
      const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y)
      gradient.addColorStop(0, `rgba(255, 255, 255, ${0.15 * opacity})`)
      gradient.addColorStop(1, `rgba(255, 255, 255, ${0.05 * opacity})`)

      ctx.strokeStyle = gradient
      ctx.lineWidth = 1.5
      ctx.setLineDash([5, 5])
      ctx.lineDashOffset = dashOffset

      ctx.beginPath()
      ctx.moveTo(from.x, from.y)
      ctx.lineTo(to.x, to.y)
      ctx.stroke()
    }

    function drawNode(node, isPlatform = false) {
      // Outer glow
      const gradient = ctx.createRadialGradient(
        node.x, node.y, 0,
        node.x, node.y, node.radius + 10
      )
      gradient.addColorStop(0, `${node.color || '#fff'}22`)
      gradient.addColorStop(1, 'transparent')
      
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius + 10, 0, Math.PI * 2)
      ctx.fill()

      // Node background
      const bgGradient = ctx.createRadialGradient(
        node.x, node.y - node.radius * 0.3, 0,
        node.x, node.y, node.radius
      )
      bgGradient.addColorStop(0, '#1a1a1a')
      bgGradient.addColorStop(1, '#0a0a0a')
      
      ctx.fillStyle = bgGradient
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
      ctx.fill()

      // Node border
      ctx.strokeStyle = node.color ? `${node.color}66` : 'rgba(255, 255, 255, 0.15)'
      ctx.lineWidth = isPlatform ? 3 : 2
      ctx.setLineDash([])
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
      ctx.stroke()

      // Inner highlight
      const highlightGradient = ctx.createRadialGradient(
        node.x, node.y - node.radius * 0.4, 0,
        node.x, node.y, node.radius * 0.6
      )
      highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)')
      highlightGradient.addColorStop(1, 'transparent')
      
      ctx.fillStyle = highlightGradient
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius * 0.8, 0, Math.PI * 2)
      ctx.fill()

      // Text
      ctx.fillStyle = '#fff'
      ctx.font = isPlatform ? 'bold 16px Inter' : 'bold 11px Inter'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(node.label, node.x, node.y + (isPlatform ? 0 : 2))
    }

    function animate() {
      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Draw background dots
      ctx.fillStyle = 'rgba(255, 255, 255, 0.03)'
      for (let x = 0; x < width; x += 40) {
        for (let y = 0; y < height; y += 40) {
          ctx.beginPath()
          ctx.arc(x, y, 1.5, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Draw connections
      connections.forEach(conn => {
        const fromNode = nodes[conn.from]
        const toNode = nodes[conn.to]
        drawConnection(fromNode, toNode)
      })

      // Draw nodes
      drawNode(nodes.ecom)
      drawNode(nodes.pos)
      drawNode(nodes.stock)
      drawNode(nodes.vendors)
      drawNode(nodes.reports)
      drawNode(nodes.customer)
      drawNode(nodes.platform, true)

      // Draw "Stack" label
      ctx.fillStyle = '#666'
      ctx.font = '9px Inter'
      ctx.textAlign = 'center'
      ctx.letterSpacing = '1px'
      ctx.fillText('STACK', 170, 190)

      // Update animation
      dashOffset -= 0.5
      if (dashOffset < -10) dashOffset = 0

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [])

  return (
    <div className="mobile-flowchart-canvas">
      <canvas ref={canvasRef} />
    </div>
  )
}

export default MobileFlowchart
