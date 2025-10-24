import {
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
  Handle,
  Position,
  Panel,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import './flowchart.css'
import { useState, useEffect, useCallback } from 'react'
import ELK from 'elkjs/lib/elk.bundled.js'

const elk = new ELK()

const CustomNode = ({ data }) => {
  const isPlatform = data.type === 'platform'
  
  return (
    <div className={`workflow-node ${data.type || ''} ${data.color ? `node-${data.color}` : ''}`}>
      <Handle 
        type="target" 
        position={Position.Top} 
        style={{ opacity: 0 }} 
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
        position={Position.Bottom} 
        style={{ opacity: 0 }} 
      />
    </div>
  )
}

const nodeTypes = {
  custom: CustomNode,
}

// Single source of truth for nodes
const initialNodes = [
  { 
    id: 'whaletools', 
    type: 'custom',
    data: { 
      label: 'whaletools',
      icon: <img src="/yacht-club-logo.png" alt="whaletools" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
      type: 'platform'
    },
  },
  { 
    id: 'ecom', 
    type: 'custom',
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
    data: { 
      label: 'Customer',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
      type: 'customer'
    },
  },
]

// Edges - whaletools to all components, all components to customer
const initialEdges = [
  { id: 'w-e1', source: 'whaletools', target: 'ecom', animated: true },
  { id: 'w-e2', source: 'whaletools', target: 'pos', animated: true },
  { id: 'w-e3', source: 'whaletools', target: 'inv', animated: true },
  { id: 'w-e4', source: 'whaletools', target: 'vendors', animated: true },
  { id: 'w-e5', source: 'whaletools', target: 'analytics', animated: true },
  { id: 'c-e1', source: 'ecom', target: 'customer', animated: true },
  { id: 'c-e2', source: 'pos', target: 'customer', animated: true },
  { id: 'c-e3', source: 'inv', target: 'customer', animated: true },
  { id: 'c-e4', source: 'vendors', target: 'customer', animated: true },
  { id: 'c-e5', source: 'analytics', target: 'customer', animated: true },
]

// ELK Layout
const getLayoutedElements = async (nodes, edges, isMobile = false) => {
  // Determine if we're on a very small screen
  const isSmallMobile = typeof window !== 'undefined' && window.innerWidth <= 480
  
  const getNodeDimensions = (nodeType) => {
    if (nodeType === 'platform') {
      return isMobile 
        ? (isSmallMobile ? { width: 300, height: 380 } : { width: 340, height: 420 })
        : { width: 320, height: 400 }
    } else if (nodeType === 'customer') {
      return isMobile
        ? (isSmallMobile ? { width: 130, height: 130 } : { width: 150, height: 150 })
        : { width: 180, height: 180 }
    } else {
      return isMobile
        ? (isSmallMobile ? { width: 100, height: 100 } : { width: 110, height: 110 })
        : { width: 140, height: 140 }
    }
  }

  const graph = {
    id: 'root',
    layoutOptions: {
      'elk.algorithm': 'layered',
      'elk.direction': 'DOWN',
      'elk.spacing.nodeNode': isMobile ? (isSmallMobile ? '50' : '60') : '60',
      'elk.layered.spacing.nodeNodeBetweenLayers': isMobile ? (isSmallMobile ? '100' : '120') : '140',
      'elk.layered.nodePlacement.strategy': 'SIMPLE',
      'elk.alignment': 'CENTER',
      'elk.padding': '[top=10,left=10,bottom=10,right=10]',
    },
    children: nodes.map(node => {
      const dims = getNodeDimensions(node.data.type)
      return {
        id: node.id,
        width: dims.width,
        height: dims.height,
      }
    }),
    edges: edges.map(edge => ({
      id: edge.id,
      sources: [edge.source],
      targets: [edge.target],
    })),
  }

  const layoutedGraph = await elk.layout(graph)

  const layoutedNodes = nodes.map((node, index) => {
    const layoutedNode = layoutedGraph.children[index]
    return {
      ...node,
      position: {
        x: layoutedNode.x,
        y: layoutedNode.y,
      },
    }
  })

  return { nodes: layoutedNodes, edges }
}

function FlowchartCanvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [isMobile, setIsMobile] = useState(false)
  const [isLayouted, setIsLayouted] = useState(false)
  const [reactFlowInstance, setReactFlowInstance] = useState(null)

  // Layout effect
  useEffect(() => {
    let resizeTimeout
    const checkMobile = () => {
      const newIsMobile = window.innerWidth <= 768
      if (newIsMobile !== isMobile) {
        // Debounce to avoid too many relayouts
        clearTimeout(resizeTimeout)
        resizeTimeout = setTimeout(() => {
          setIsMobile(newIsMobile)
        }, 200)
      }
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => {
      window.removeEventListener('resize', checkMobile)
      clearTimeout(resizeTimeout)
    }
  }, [isMobile])

  useEffect(() => {
    const applyLayout = async () => {
      setIsLayouted(false)
      const { nodes: layoutedNodes, edges: layoutedEdges } = await getLayoutedElements(
        initialNodes,
        initialEdges,
        isMobile
      )
      setNodes(layoutedNodes)
      setEdges(layoutedEdges)
      
      // Wait for layout to render before showing
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsLayouted(true)
        })
      })
    }

    applyLayout()
  }, [isMobile, setNodes, setEdges])

  const onInit = useCallback((instance) => {
    setReactFlowInstance(instance)
    // Fit view immediately without animation on initial load
    setTimeout(() => {
      const padding = isMobile ? 0.02 : 0.1
      const maxZoom = isMobile ? 3 : 1.2
      instance.fitView({ 
        padding, 
        duration: 0, // No animation on initial load
        minZoom: 0.5, 
        maxZoom,
        includeHiddenNodes: false
      })
    }, 50)
  }, [isMobile])

  // Re-fit view whenever layout changes
  useEffect(() => {
    if (isLayouted && nodes.length > 0 && reactFlowInstance) {
      setTimeout(() => {
        const padding = isMobile ? 0.02 : 0.1
        const maxZoom = isMobile ? 3 : 1.2
        reactFlowInstance.fitView({ 
          padding, 
          duration: 400, 
          minZoom: 0.5, 
          maxZoom,
          includeHiddenNodes: false
        })
      }, 150)
    }
  }, [isLayouted, nodes, isMobile, reactFlowInstance])

  return (
    <section className="flowchart-section">
      <div className="canvas-wrapper">
        <div className={`reactflow-container ${!isLayouted ? 'flowchart-hidden' : ''}`}>
          {nodes.length === 0 ? (
            <div className="flowchart-loading">
              <div className="loading-spinner"></div>
            </div>
          ) : (
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onInit={onInit}
              nodesDraggable={false}
              nodesConnectable={false}
              elementsSelectable={false}
              zoomOnScroll={false}
              panOnScroll={false}
              panOnDrag={false}
              zoomOnPinch={false}
              zoomOnDoubleClick={false}
              preventScrolling={false}
              panOnScrollSpeed={0}
              nodesFocusable={false}
              edgesFocusable={false}
              proOptions={{ hideAttribution: true }}
              fitView
              fitViewOptions={{ 
                padding: isMobile ? 0.02 : 0.1, 
                maxZoom: isMobile ? 3 : 1.2, 
                minZoom: 0.5,
                includeHiddenNodes: false
              }}
            >
              <Background 
                variant="dots"
                color="rgba(255,255,255,0.08)" 
                gap={isMobile ? 20 : 24}
                size={isMobile ? 1 : 1.5}
              />
            </ReactFlow>
          )}
        </div>
      </div>
    </section>
  )
}

export default FlowchartCanvas
