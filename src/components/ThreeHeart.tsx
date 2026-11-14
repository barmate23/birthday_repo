import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeHeartProps {
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
}

export const ThreeHeart: React.FC<ThreeHeartProps> = ({ size = 'md', interactive = true }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || (size === 'lg' ? 400 : size === 'md' ? 300 : 200);
    const height = container.clientHeight || (size === 'lg' ? 400 : size === 'md' ? 300 : 200);

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 180;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Heart Shape
    const heartShape = new THREE.Shape();
    heartShape.moveTo(25, 25);
    heartShape.bezierCurveTo(25, 25, 20, 0, 0, 0);
    heartShape.bezierCurveTo(-30, 0, -30, 35, -30, 35);
    heartShape.bezierCurveTo(-30, 55, -10, 77, 25, 95);
    heartShape.bezierCurveTo(60, 77, 80, 55, 80, 35);
    heartShape.bezierCurveTo(80, 35, 80, 0, 50, 0);
    heartShape.bezierCurveTo(35, 0, 25, 25, 25, 25);

    const extrudeSettings = {
      depth: 20,
      bevelEnabled: true,
      bevelSegments: 8,
      steps: 2,
      bevelSize: 6,
      bevelThickness: 6,
    };

    const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
    // Center the geometry
    geometry.center();

    // Luxurious Ruby / Rose Gold Material
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xe11d48, // Rose 600
      emissive: 0x5c1025, // Deep burgundy glow
      emissiveIntensity: 0.35,
      metalness: 0.25,
      roughness: 0.2,
      clearcoat: 0.8,
      clearcoatRoughness: 0.15,
      reflectivity: 0.9,
    });

    const heartMesh = new THREE.Mesh(geometry, material);
    heartMesh.rotation.z = Math.PI; // Flip heart right side up
    heartMesh.scale.set(0.65, 0.65, 0.65);
    scene.add(heartMesh);

    // Golden Halo / Sparkling particle cloud
    const particlesCount = 180;
    const particlePositions = new Float32Array(particlesCount * 3);
    const particleScales = new Float32Array(particlesCount);

    for (let i = 0; i < particlesCount; i++) {
      const radius = 60 + Math.random() * 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      particlePositions[i * 3] = radius * Math.cos(theta) * Math.cos(phi);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi);
      particlePositions[i * 3 + 2] = radius * Math.sin(theta) * Math.cos(phi);

      particleScales[i] = Math.random() * 2 + 1;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('scale', new THREE.BufferAttribute(particleScales, 1));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xf59e0b, // Golden sparkle
      size: 2.2,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffd700, 2.5, 300);
    pointLight.position.set(60, 80, 90);
    scene.add(pointLight);

    const pinkLight = new THREE.PointLight(0xf43f5e, 2, 300);
    pinkLight.position.set(-60, -50, 70);
    scene.add(pinkLight);

    // Animation & Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isHovered = false;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const normX = ((clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((clientY - rect.top) / rect.height) * 2 - 1);

      targetRotationY = normX * 0.8;
      targetRotationX = -normY * 0.6;
    };

    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => {
      isHovered = false;
      targetRotationX = 0;
      targetRotationY = 0;
    };

    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove, { passive: true });
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth rotation toward mouse or automatic romantic spin
      heartMesh.rotation.y += (targetRotationY + Math.sin(elapsedTime * 0.8) * 0.25 - heartMesh.rotation.y) * 0.05;
      heartMesh.rotation.x += (targetRotationX + Math.cos(elapsedTime * 0.6) * 0.15 - heartMesh.rotation.x) * 0.05;

      // Realistic Heartbeat pulsing (lub-dub)
      const pulseCycle = (elapsedTime * 1.3) % 1; // 78 bpm
      let scaleOffset = 0;
      if (pulseCycle < 0.15) {
        scaleOffset = Math.sin((pulseCycle / 0.15) * Math.PI) * 0.08;
      } else if (pulseCycle > 0.25 && pulseCycle < 0.4) {
        scaleOffset = Math.sin(((pulseCycle - 0.25) / 0.15) * Math.PI) * 0.05;
      }

      const baseScale = isHovered ? 0.72 : 0.65;
      const currentScale = baseScale + scaleOffset;
      heartMesh.scale.set(currentScale, currentScale, currentScale);

      // Rotate particle cloud gently
      particles.rotation.y = elapsedTime * 0.12;
      particles.rotation.z = Math.sin(elapsedTime * 0.1) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handlePointerMove);
      container.removeEventListener('touchmove', handlePointerMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, [size, interactive]);

  const sizeClasses = {
    sm: 'w-48 h-48 sm:w-56 sm:h-56',
    md: 'w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96',
    lg: 'w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px]',
  }[size];

  return (
    <div
      ref={mountRef}
      className={`relative mx-auto flex items-center justify-center cursor-pointer select-none ${sizeClasses}`}
      title="Touch or move cursor over the heart ❤️"
    />
  );
};
