import {
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
  Handle,
  Position,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import './flowchart.css'
import { useState, useEffect } from 'react'

const CustomNode = ({ data }) => {
  const isPlatform = data.type === 'platform'
  
  return (
    <div className={`workflow-node ${data.type || ''} ${data.color ? `node-${data.color}` : ''}`}>
      <Handle 
        type="target" 
        position={Position.Left} 
        style={{ opacity: 0, left: isPlatform ? '50%' : undefined, top: isPlatform ? '50%' : undefined, transform: isPlatform ? 'translate(-50%, -50%)' : undefined }} 
      />
      <div className="node-content">
        {data.icon && <div className="node-icon">{data.icon}</div>}
        <div className="node-text">
          <div className="node-title">{data.label}</div>
          {data.subtitle && <div className="node-subtitle">{data.subtitle}</div>}
        </div>
      </div>
      <Handle 
        type="source" 
        position={Position.Right} 
        style={{ 
          opacity: 0, 
          right: isPlatform ? '50%' : undefined, 
          top: isPlatform ? '40%' : undefined, 
          transform: isPlatform ? 'translate(50%, -50%)' : undefined 
        }} 
      />
    </div>
  )
}

const nodeTypes = {
  custom: CustomNode,
}

// Node configuration - whaletools → Stack → Customer
const nodes = [
  // LEFT - whaletools platform
  { 
    id: 'whaletools', 
    type: 'custom',
    position: { x: 100, y: 200 }, 
    data: { 
      label: 'whaletools',
      icon: <img src="/yacht-club-logo.png" alt="whaletools" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
      type: 'platform'
    },
  },
  
  // Stack Label
  { 
    id: 'stack-label', 
    type: 'custom',
    position: { x: 490, y: -40 }, 
    data: { 
      label: 'Stack',
      type: 'label'
    },
  },
  
  // CENTER - Software Stack (powered by whaletools)
  { 
    id: 'ecom', 
    type: 'custom',
    position: { x: 500, y: 0 }, 
    data: { 
      label: 'Ecom',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
      type: 'component',
      color: 'blue'
    },
  },
  { 
    id: 'pos', 
    type: 'custom',
    position: { x: 500, y: 145 }, 
    data: { 
      label: 'POS',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></svg>,
      type: 'component',
      color: 'purple'
    },
  },
  { 
    id: 'inv', 
    type: 'custom',
    position: { x: 500, y: 290 }, 
    data: { 
      label: 'Stock',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
      type: 'component',
      color: 'cyan'
    },
  },
  { 
    id: 'vendors', 
    type: 'custom',
    position: { x: 500, y: 435 }, 
    data: { 
      label: 'Vendors',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>,
      type: 'component',
      color: 'orange'
    },
  },
  { 
    id: 'analytics', 
    type: 'custom',
    position: { x: 500, y: 580 }, 
    data: { 
      label: 'Reports',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>,
      type: 'component',
      color: 'pink'
    },
  },
  
  // RIGHT - Customer
  { 
    id: 'customer', 
    type: 'custom',
    position: { x: 830, y: 270 }, 
    data: { 
      label: 'Customer',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
      type: 'customer'
    },
  },
]

// Edges - whaletools to all components, all components to customer
const edges = [
  // whaletools → components
  { 
    id: 'w-e1', 
    source: 'whaletools', 
    target: 'ecom', 
    sourceHandle: null,
    targetHandle: null,
    animated: true
  },
  { 
    id: 'w-e2', 
    source: 'whaletools', 
    target: 'pos', 
    sourceHandle: null,
    targetHandle: null,
    animated: true
  },
  { 
    id: 'w-e3', 
    source: 'whaletools', 
    target: 'inv', 
    sourceHandle: null,
    targetHandle: null,
    animated: true
  },
  { 
    id: 'w-e4', 
    source: 'whaletools', 
    target: 'vendors', 
    sourceHandle: null,
    targetHandle: null,
    animated: true
  },
  { 
    id: 'w-e5', 
    source: 'whaletools', 
    target: 'analytics', 
    sourceHandle: null,
    targetHandle: null,
    animated: true
  },
  
  // components → customer
  { 
    id: 'c-e1', 
    source: 'ecom', 
    target: 'customer', 
    sourceHandle: null,
    targetHandle: null,
    animated: true
  },
  { 
    id: 'c-e2', 
    source: 'pos', 
    target: 'customer', 
    sourceHandle: null,
    targetHandle: null,
    animated: true
  },
  { 
    id: 'c-e3', 
    source: 'inv', 
    target: 'customer', 
    sourceHandle: null,
    targetHandle: null,
    animated: true
  },
  { 
    id: 'c-e4', 
    source: 'vendors', 
    target: 'customer', 
    sourceHandle: null,
    targetHandle: null,
    animated: true
  },
  { 
    id: 'c-e5', 
    source: 'analytics', 
    target: 'customer', 
    sourceHandle: null,
    targetHandle: null,
    animated: true
  },
]

function FlowchartCanvas() {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  const [nodesState] = useNodesState(nodes)
  const [edgesState] = useEdgesState(edges)

  // Mobile horizontal stack nodes - whaletools → stack → customer
  const mobileNodes = [
    { 
      id: 'whaletools', 
      type: 'custom',
      position: { x: 470, y: 50 }, 
      data: { 
        label: 'whaletools',
        icon: <img src="/yacht-club-logo.png" alt="whaletools" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
        type: 'platform'
      },
    },
    // Horizontal stack
    { 
      id: 'ecom', 
      type: 'custom',
      position: { x: 50, y: 300 }, 
      data: { 
        label: 'Ecom',
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
        type: 'component',
        color: 'blue'
      },
    },
    { 
      id: 'pos', 
      type: 'custom',
      position: { x: 230, y: 300 }, 
      data: { 
        label: 'POS',
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></svg>,
        type: 'component',
        color: 'purple'
      },
    },
    { 
      id: 'inv', 
      type: 'custom',
      position: { x: 410, y: 300 }, 
      data: { 
        label: 'Stock',
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
        type: 'component',
        color: 'cyan'
      },
    },
    { 
      id: 'vendors', 
      type: 'custom',
      position: { x: 590, y: 300 }, 
      data: { 
        label: 'Vendors',
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>,
        type: 'component',
        color: 'orange'
      },
    },
    { 
      id: 'analytics', 
      type: 'custom',
      position: { x: 770, y: 300 }, 
      data: { 
        label: 'Reports',
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>,
        type: 'component',
        color: 'pink'
      },
    },
    { 
      id: 'customer', 
      type: 'custom',
      position: { x: 465, y: 550 }, 
      data: { 
        label: 'Customer',
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
        type: 'customer'
      },
    },
  ]

  // Mobile edges - whaletools to all stack, stack to customer
  const mobileEdges = [
    { id: 'w-e1', source: 'whaletools', target: 'ecom', animated: true },
    { id: 'w-p', source: 'whaletools', target: 'pos', animated: true },
    { id: 'w-i', source: 'whaletools', target: 'inv', animated: true },
    { id: 'w-v', source: 'whaletools', target: 'vendors', animated: true },
    { id: 'w-a', source: 'whaletools', target: 'analytics', animated: true },
    { id: 'e-c', source: 'ecom', target: 'customer', animated: true },
    { id: 'p-c', source: 'pos', target: 'customer', animated: true },
    { id: 'i-c', source: 'inv', target: 'customer', animated: true },
    { id: 'v-c', source: 'vendors', target: 'customer', animated: true },
    { id: 'a-c', source: 'analytics', target: 'customer', animated: true },
  ]

  return (
    <section className="flowchart-section">
      <div className="canvas-wrapper">
        <div className="reactflow-container">
          <ReactFlow
            nodes={isMobile ? mobileNodes : nodesState}
            edges={isMobile ? mobileEdges : edgesState}
            nodeTypes={nodeTypes}
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable={false}
            zoomOnScroll={false}
            panOnDrag={false}
            panOnScroll={false}
            zoomOnPinch={false}
            preventScrolling={false}
            proOptions={{ hideAttribution: true }}
            defaultViewport={isMobile ? { x: -130, y: 0, zoom: 0.42 } : { x: 100, y: 0, zoom: 0.8 }}
            fitView={false}
          >
            <Background 
              variant="dots"
              color="rgba(255,255,255,0.08)" 
              gap={isMobile ? 20 : 24}
              size={isMobile ? 1 : 1.5}
            />
          </ReactFlow>
        </div>
      </div>
    </section>
  )
}

export default FlowchartCanvas
