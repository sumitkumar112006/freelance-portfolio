export const projectsData = [
  {
    id: "krypton-kv",
    title: "Krypton Edge KV",
    tagline: "Sub-5ms global distributed key-value storage engine",
    category: "Distributed Systems",
    status: "Production",
    featured: true,
    year: "2026",
    stars: "2.4k",
    metrics: [
      { label: "p99 Read Latency", value: "3.8ms", change: "-42%" },
      { label: "Peak QPS", value: "1.2M req/s", change: "+180%" },
      { label: "Global Edge Nodes", value: "48 PoPs", change: "Multi-region" },
      { label: "Zero-Downtime Replication", value: "99.999%", change: "Raft Consensus" }
    ],
    tech: ["Rust", "Wasm", "Cloudflare Workers", "Raft", "TypeScript", "gRPC"],
    description: "Architected a globally distributed, low-latency key-value engine with automatic peer-to-peer partition tolerance and CRDT conflict resolution. Built for edge-native microservices requiring instantaneous consensus.",
    architecture: {
      diagram: [
        { stage: "Edge Ingress", desc: "Anycast routing with geo-affinity handshake" },
        { stage: "Consensus Tier", desc: "Multi-Raft state machine with zero-copy serialization" },
        { stage: "Storage Engine", desc: "LSM-Tree with memory-mapped bloom filters" },
        { stage: "Sync Layer", desc: "Delta-state CRDTs over multiplexed QUIC streams" }
      ],
      highlights: [
        "Eliminated cold start latency using V8 isolates and custom WASM runtime bindings.",
        "Implemented custom SIMD-accelerated checksum verification for sub-millisecond block integrity.",
        "Engineered automatic failover routing across 48 worldwide edge points-of-presence."
      ]
    },
    liveUrl: "https://krypton-kv.dev",
    githubUrl: "https://github.com/sumit/krypton-kv",
    accent: "from-cyan-500/20 to-blue-500/10"
  },
  {
    id: "aura-canvas",
    title: "Aura Spatial Canvas",
    tagline: "60 FPS WebGL infinite collaboration whiteboard engine",
    category: "WebGL & 3D",
    status: "Production",
    featured: true,
    year: "2025",
    stars: "4.1k",
    metrics: [
      { label: "Rendering Performance", value: "60 FPS", change: "100k+ elements" },
      { label: "WebSocket Sync Latency", value: "12ms", change: "Multiplayer" },
      { label: "Memory Footprint", value: "34 MB", change: "-65% vs DOM" },
      { label: "Spatial Tree Queries", value: "< 0.4ms", change: "Quadtree R-Tree" }
    ],
    tech: ["TypeScript", "WebGL", "Three.js", "WebSockets", "Web Workers", "Tailwind CSS"],
    description: "Engineered a high-performance spatial infinite whiteboard that bypasses the DOM entirely, rendering complex vectors, infinite zoom planes, and multi-cursor real-time physics on a custom WebGL pipeline.",
    architecture: {
      diagram: [
        { stage: "Client Viewport", desc: "Orthographic spatial camera with quadtree culling" },
        { stage: "Render Pipeline", desc: "Instanced mesh batching with custom fragment shaders" },
        { stage: "Worker Thread", desc: "Off-thread bezier curve tessellation and hit-testing" },
        { stage: "Sync Protocol", desc: "Binary messagepack diffs over persistent WebSockets" }
      ],
      highlights: [
        "GPU-instanced vector rendering handling over 100,000 interactive nodes at smooth 60fps.",
        "Spatial quadtree indexing allowing instant viewport bounding-box queries under 0.5ms.",
        "Conflict-free multiplayer cursor interpolation with predictive physics smoothing."
      ]
    },
    liveUrl: "https://aura-canvas.io",
    githubUrl: "https://github.com/sumit/aura-canvas",
    accent: "from-purple-500/20 to-indigo-500/10"
  },
  {
    id: "apex-telemetry",
    title: "Apex Micro-Telemetry",
    tagline: "High-cardinality observability & anomaly detection dashboard",
    category: "Design Engineering",
    status: "Production",
    featured: true,
    year: "2025",
    stars: "1.8k",
    metrics: [
      { label: "Log Ingestion Rate", value: "500k/sec", change: "Real-time" },
      { label: "Query Execution", value: "18ms", change: "ClickHouse" },
      { label: "Interface Responsiveness", value: "100/100", change: "Lighthouse" },
      { label: "Anomaly Detection", value: "99.4%", change: "Adaptive Threshold" }
    ],
    tech: ["React", "ClickHouse", "Go", "Tailwind CSS", "D3.js", "Web Audio API"],
    description: "A dark-mode first, keyboard-navigable time-series monitoring UI engineered for DevOps teams. Features smooth interactive brush charts, real-time alert heatmaps, and zero-latency filtering across billions of log lines.",
    architecture: {
      diagram: [
        { stage: "Ingestion Buffer", desc: "High-throughput Kafka streaming pipeline" },
        { stage: "Columnar Storage", desc: "ClickHouse partitions with materialized aggregations" },
        { stage: "Frontend Cache", desc: "Virtualized windowing with Web Worker downsampling" },
        { stage: "UI Render Layer", desc: "Canvas-accelerated time series charts with tactile audio alerts" }
      ],
      highlights: [
        "Dynamic canvas-based time-series chart rendering 1,000,000 data points with smooth pinch-to-zoom.",
        "Comprehensive keyboard shortcut system (Cmd+K, J/K jump navigation, / query focus).",
        "Integrated Web Audio synth triggers for audible threshold breach warnings."
      ]
    },
    liveUrl: "https://apex-metrics.dev",
    githubUrl: "https://github.com/sumit/apex-telemetry",
    accent: "from-emerald-500/20 to-teal-500/10"
  },
  {
    id: "synthetix-ui",
    title: "Synthetix Design System",
    tagline: "Accessible, headless craft UI library with dynamic physics",
    category: "Design Engineering",
    status: "Open Source",
    featured: false,
    year: "2024",
    stars: "3.5k",
    metrics: [
      { label: "Components", value: "42 Primitives", change: "WCAG AAA" },
      { label: "Bundle Size", value: "< 4.2 kB", change: "Tree-shakable" },
      { label: "Weekly Downloads", value: "85k+", change: "NPM registry" },
      { label: "Test Coverage", value: "99.2%", change: "Unit & Visual" }
    ],
    tech: ["TypeScript", "Radix UI", "CSS Modules", "Framer Motion", "Storybook"],
    description: "An opinionated design system crafted for developer tools and high-velocity SaaS products. Features sub-pixel borders, spring-physics motion curves, sound feedback integrations, and full keyboard accessibility.",
    architecture: {
      diagram: [
        { stage: "Token Engine", desc: "Three-tier semantic token architecture with CSS variables" },
        { stage: "Component Core", desc: "Headless primitives with ARIA 1.2 compliance" },
        { stage: "Motion Driver", desc: "Spring-physics layout animations with reduced-motion support" },
        { stage: "Telemetry Hooks", desc: "Interaction analytics and micro-sound synthesis triggers" }
      ],
      highlights: [
        "Zero-runtime CSS variables with automated contrast ratio verification.",
        "Built-in tactile micro-interaction sounds via lightweight audio hooks.",
        "Sub-pixel glassmorphism components with graceful fallback for low-power hardware."
      ]
    },
    liveUrl: "https://synthetix-ui.org",
    githubUrl: "https://github.com/sumit/synthetix-ui",
    accent: "from-amber-500/20 to-orange-500/10"
  }
];
