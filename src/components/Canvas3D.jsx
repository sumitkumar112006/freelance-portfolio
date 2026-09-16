import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Canvas3D({ accentColor = '#00F0FF' }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const meshRef = useRef(null);
  const pointsRef = useRef(null);
  const ringsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Convert hex accent to THREE.Color
    const primaryColor = new THREE.Color(accentColor);
    const secondaryColor = new THREE.Color('#6366F1');

    // 1. Central Icosahedron Wireframe
    const geometry = new THREE.IcosahedronGeometry(1.6, 2);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: primaryColor,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const icosahedron = new THREE.Mesh(geometry, wireframeMaterial);
    scene.add(icosahedron);
    meshRef.current = icosahedron;

    // 2. Inner Glowing Core
    const coreGeo = new THREE.IcosahedronGeometry(0.9, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: secondaryColor,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    icosahedron.add(core);

    // 3. Surrounding Floating Particle Cloud
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 2.0 + Math.random() * 1.5;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      scales[i] = Math.random() * 0.05 + 0.02;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: primaryColor,
      size: 0.04,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    pointsRef.current = particles;

    // 4. Orbital Gyro Rings
    const rings = [];
    for (let r = 0; r < 2; r++) {
      const ringGeo = new THREE.TorusGeometry(2.4 + r * 0.5, 0.012, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color: r === 0 ? primaryColor : secondaryColor,
        transparent: true,
        opacity: 0.2,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / (2 + r);
      ring.rotation.y = (Math.PI / 4) * r;
      scene.add(ring);
      rings.push(ring);
    }
    ringsRef.current = rings;

    // Mouse Parallax tracking
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current.targetX = x * 0.8;
      mouseRef.current.targetY = y * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Shockwave click effect
    let pulseScale = 1;
    const handlePointerDown = () => {
      pulseScale = 1.35;
    };
    container.addEventListener('pointerdown', handlePointerDown);

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Rotate central mesh
      if (meshRef.current) {
        meshRef.current.rotation.x = elapsedTime * 0.15 + mouseRef.current.y * 0.6;
        meshRef.current.rotation.y = elapsedTime * 0.2 + mouseRef.current.x * 0.6;
        
        // Return pulse to normal
        pulseScale += (1 - pulseScale) * 0.08;
        meshRef.current.scale.set(pulseScale, pulseScale, pulseScale);
      }

      // Rotate particle cloud
      if (pointsRef.current) {
        pointsRef.current.rotation.y = -elapsedTime * 0.08;
        pointsRef.current.rotation.x = elapsedTime * 0.05;
      }

      // Rotate orbital rings
      ringsRef.current.forEach((ring, idx) => {
        ring.rotation.z += (idx + 1) * 0.003;
        ring.rotation.y += (idx + 1) * 0.002;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointerdown', handlePointerDown);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update color dynamically when accent changes
  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.material.color.set(accentColor);
    }
    if (pointsRef.current) {
      pointsRef.current.material.color.set(accentColor);
    }
    if (ringsRef.current[0]) {
      ringsRef.current[0].material.color.set(accentColor);
    }
  }, [accentColor]);

  return (
    <div 
      ref={mountRef} 
      className="relative w-full h-full min-h-[380px] lg:min-h-[520px] flex items-center justify-center cursor-grab active:cursor-grabbing"
      title="Click or drag to interact with the 3D physics mesh"
    >
      <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-md bg-obsidian-900/80 border border-white/10 text-[10px] font-mono text-slate-400 flex items-center gap-1.5 backdrop-blur-md pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping"></span>
        <span>Interactive 3D WebGL</span>
      </div>
    </div>
  );
}
