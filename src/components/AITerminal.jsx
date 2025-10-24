import { useState, useEffect, useRef } from 'react'
import './AITerminal.css'

function AITerminal() {
  const [lines, setLines] = useState([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [streamingText, setStreamingText] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const terminalRef = useRef(null)

  const terminalSequence = [
    { type: 'user', text: '> Show me today\'s top selling products', delay: 800, stream: false },
    { type: 'system', text: '⚡ Connecting to MCP server...', delay: 1200, stream: false },
    { type: 'system', text: '✓ Connected to whaletools://api', delay: 800, stream: false },
    { type: 'code', text: 'mcp.call({', delay: 600, stream: false },
    { type: 'code', text: '  tool: "get_products",', delay: 400, stream: false },
    { type: 'code', text: '  params: {', delay: 300, stream: false },
    { type: 'code', text: '    sort: "sales_desc",', delay: 300, stream: false },
    { type: 'code', text: '    limit: 5,', delay: 300, stream: false },
    { type: 'code', text: '    timeframe: "today"', delay: 300, stream: false },
    { type: 'code', text: '  }', delay: 300, stream: false },
    { type: 'code', text: '})', delay: 800, stream: false },
    { type: 'system', text: '', delay: 400, stream: false },
    { type: 'response', text: '📊 Analyzing sales data across all locations...', delay: 1000, stream: true },
    { type: 'data', text: '1. Premium Indica Blend', value: '$2,847', delay: 600, stream: false },
    { type: 'data', text: '2. Sativa Energy Pack', value: '$2,103', delay: 500, stream: false },
    { type: 'data', text: '3. Hybrid Sampler', value: '$1,892', delay: 500, stream: false },
    { type: 'data', text: '4. CBD Wellness Set', value: '$1,654', delay: 500, stream: false },
    { type: 'data', text: '5. House Special', value: '$1,401', delay: 500, stream: false },
    { type: 'system', text: '', delay: 800, stream: false },
    { type: 'user', text: '> Update inventory for product #2', delay: 1400, stream: false },
    { type: 'system', text: '⚡ Executing inventory update...', delay: 1000, stream: false },
    { type: 'code', text: 'mcp.call({', delay: 400, stream: false },
    { type: 'code', text: '  tool: "update_inventory",', delay: 300, stream: false },
    { type: 'code', text: '  params: {', delay: 300, stream: false },
    { type: 'code', text: '    product_id: "prod_2",', delay: 300, stream: false },
    { type: 'code', text: '    quantity: 150,', delay: 300, stream: false },
    { type: 'code', text: '    location: "main"', delay: 300, stream: false },
    { type: 'code', text: '  }', delay: 300, stream: false },
    { type: 'code', text: '})', delay: 800, stream: false },
    { type: 'system', text: '', delay: 400, stream: false },
    { type: 'success', text: '✓ Inventory updated successfully. Stock level now at 150 units.', delay: 1000, stream: true },
    { type: 'success', text: '✓ Synced across 4 locations in 12ms', delay: 800, stream: true },
    { type: 'system', text: '', delay: 1200, stream: false },
    { type: 'user', text: '> Generate sales report for this week', delay: 1800, stream: false },
    { type: 'system', text: '⚡ Generating analytics...', delay: 1000, stream: false },
    { type: 'code', text: 'mcp.call({', delay: 400, stream: false },
    { type: 'code', text: '  tool: "analytics",', delay: 300, stream: false },
    { type: 'code', text: '  params: { period: "7d" }', delay: 300, stream: false },
    { type: 'code', text: '})', delay: 800, stream: false },
    { type: 'system', text: '', delay: 600, stream: false },
    { type: 'response', text: '📈 Aggregating 7-day performance metrics...', delay: 1200, stream: true },
    { type: 'metric', text: 'Total Revenue', value: '$47,892', delay: 600, stream: false },
    { type: 'metric', text: 'Orders Processed', value: '1,247', delay: 500, stream: false },
    { type: 'metric', text: 'Average Order Value', value: '$38.40', delay: 500, stream: false },
    { type: 'metric', text: 'Growth vs Last Week', value: '+14.2%', delay: 500, stream: false },
    { type: 'system', text: '', delay: 2000, stream: false }
  ]

  // Intersection Observer to detect when terminal is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setIsVisible(true)
            setHasStarted(true)
          }
        })
      },
      {
        threshold: 0.3, // Trigger when 30% of the terminal is visible
        rootMargin: '0px'
      }
    )

    if (terminalRef.current) {
      observer.observe(terminalRef.current)
    }

    return () => {
      if (terminalRef.current) {
        observer.unobserve(terminalRef.current)
      }
    }
  }, [hasStarted])

  // Animation logic - only runs when visible
  useEffect(() => {
    if (!isVisible) return

    if (currentLineIndex >= terminalSequence.length) {
      const restartTimer = setTimeout(() => {
        setLines([])
        setCurrentLineIndex(0)
        setStreamingText('')
        setIsStreaming(false)
      }, 4000)
      return () => clearTimeout(restartTimer)
    }

    const currentLine = terminalSequence[currentLineIndex]
    
    if (currentLine.stream && currentLine.text) {
      setIsStreaming(true)
      let charIndex = 0
      const streamInterval = setInterval(() => {
        if (charIndex < currentLine.text.length) {
          setStreamingText(currentLine.text.substring(0, charIndex + 1))
          charIndex++
        } else {
          clearInterval(streamInterval)
          setLines(prev => [...prev, currentLine])
          setStreamingText('')
          setIsStreaming(false)
          setCurrentLineIndex(prev => prev + 1)
        }
      }, 30)
      
      return () => clearInterval(streamInterval)
    } else {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, currentLine])
        setCurrentLineIndex(prev => prev + 1)
      }, currentLine.delay)
      
      return () => clearTimeout(timer)
    }
  }, [currentLineIndex, isStreaming, isVisible])

  return (
    <div className="ai-terminal" ref={terminalRef}>
      <div className="terminal-header">
        <div className="terminal-controls">
          <span className="control-dot"></span>
          <span className="control-dot"></span>
          <span className="control-dot"></span>
        </div>
        <div className="terminal-title">AI Assistant → whaletools MCP</div>
        <div className="terminal-status">
          <span className={`status-indicator ${isVisible ? 'active' : ''}`}></span>
          <span className="status-text">{isVisible ? 'Live' : 'Idle'}</span>
        </div>
      </div>
      <div className="terminal-body">
        {!isVisible && (
          <div className="terminal-idle">
            <div className="idle-message">Scroll to activate...</div>
          </div>
        )}
        
        {isVisible && (
          <>
            {lines.map((line, index) => (
              <div key={index} className={`terminal-line terminal-${line.type}`}>
                {line.type === 'user' && <span className="line-prefix user-prefix">$</span>}
                {line.type === 'code' && <span className="line-prefix code-prefix"></span>}
                {line.type === 'system' && line.text && <span className="line-prefix system-prefix">•</span>}
                
                <span className="line-content">
                  {line.text}
                  {(line.type === 'data' || line.type === 'metric') && line.value && (
                    <span className="line-value">{line.value}</span>
                  )}
                </span>
              </div>
            ))}
            
            {isStreaming && streamingText && (
              <div className={`terminal-line terminal-${terminalSequence[currentLineIndex]?.type || 'response'} streaming-line`}>
                {terminalSequence[currentLineIndex]?.type === 'user' && <span className="line-prefix user-prefix">$</span>}
                {terminalSequence[currentLineIndex]?.type === 'system' && <span className="line-prefix system-prefix">•</span>}
                <span className="line-content">
                  {streamingText}
                  <span className="cursor-blink">_</span>
                </span>
              </div>
            )}
            
            {!isStreaming && lines.length > 0 && lines[lines.length - 1].text && (
              <span className="cursor-static">_</span>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default AITerminal
