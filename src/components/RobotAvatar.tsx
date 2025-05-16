import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface RobotAvatarProps {
  className?: string;
}

const RobotAvatar: React.FC<RobotAvatarProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const robotRef = useRef<THREE.Group | null>(null);
  const eyesRef = useRef<THREE.Mesh[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      50, 
      containerRef.current.clientWidth / containerRef.current.clientHeight, 
      0.1, 
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create robot head
    const robotGroup = new THREE.Group();
    scene.add(robotGroup);
    robotRef.current = robotGroup;

    // Head
    const headGeometry = new THREE.BoxGeometry(2, 2, 2);
    const headMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x111111
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    robotGroup.add(head);

    // Face plate
    const faceGeometry = new THREE.BoxGeometry(1.5, 1, 0.2);
    const faceMaterial = new THREE.MeshStandardMaterial({
      color: 0x222222,
      metalness: 0.7,
      roughness: 0.3
    });
    const face = new THREE.Mesh(faceGeometry, faceMaterial);
    face.position.z = 1;
    face.position.y = 0.2;
    robotGroup.add(face);

    // Eyes
    const eyeGeometry = new THREE.SphereGeometry(0.2, 16, 16);
    const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0x4472C4 });
    
    // Left eye
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(0.4, 0.3, 1.1);
    robotGroup.add(leftEye);
    eyesRef.current.push(leftEye);
    
    // Right eye
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(-0.4, 0.3, 1.1);
    robotGroup.add(rightEye);
    eyesRef.current.push(rightEye);

    // Antennas
    const antennaGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.8, 8);
    const antennaMaterial = new THREE.MeshStandardMaterial({
      color: 0x666666,
      metalness: 0.8,
      roughness: 0.2
    });
    
    const leftAntenna = new THREE.Mesh(antennaGeometry, antennaMaterial);
    leftAntenna.position.set(0.6, 1.2, 0);
    leftAntenna.rotation.x = Math.PI * 0.1;
    robotGroup.add(leftAntenna);
    
    const rightAntenna = new THREE.Mesh(antennaGeometry, antennaMaterial);
    rightAntenna.position.set(-0.6, 1.2, 0);
    rightAntenna.rotation.x = Math.PI * 0.1;
    robotGroup.add(rightAntenna);

    // Antenna tips
    const tipGeometry = new THREE.SphereGeometry(0.08, 16, 16);
    const tipMaterial = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
    
    const leftTip = new THREE.Mesh(tipGeometry, tipMaterial);
    leftTip.position.set(0.6, 1.6, -0.05);
    robotGroup.add(leftTip);
    
    const rightTip = new THREE.Mesh(tipGeometry, tipMaterial);
    rightTip.position.set(-0.6, 1.6, -0.05);
    robotGroup.add(rightTip);

    // Details - mouth/grill
    const grillGeometry = new THREE.BoxGeometry(0.8, 0.1, 0.1);
    const grillMaterial = new THREE.MeshBasicMaterial({ color: 0x444444 });
    
    for (let i = 0; i < 3; i++) {
      const grill = new THREE.Mesh(grillGeometry, grillMaterial);
      grill.position.set(0, 0 - (i * 0.15), 1.1);
      robotGroup.add(grill);
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const keyLight = new THREE.DirectionalLight(0xffffff, 1);
    keyLight.position.set(1, 1, 2);
    scene.add(keyLight);
    
    const fillLight = new THREE.DirectionalLight(0x4472C4, 0.5);
    fillLight.position.set(-1, 0.5, 1);
    scene.add(fillLight);
    
    const rimLight = new THREE.DirectionalLight(0xA777E3, 0.3);
    rimLight.position.set(0, 0, -1);
    scene.add(rimLight);

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      // Convert mouse position to normalized device coordinates
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      mousePosition.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mousePosition.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      
      cameraRef.current.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    // Animation loop
    const animate = () => {
      if (!robotRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current) return;

      // Make robot face follow mouse
      const targetRotationX = mousePosition.current.y * 0.3;
      const targetRotationY = mousePosition.current.x * 0.5;
      
      robotRef.current.rotation.x += (targetRotationX - robotRef.current.rotation.x) * 0.05;
      robotRef.current.rotation.y += (targetRotationY - robotRef.current.rotation.y) * 0.05;
      
      // Animate eyes
      eyesRef.current.forEach(eye => {
        // Subtle pulsing effect for eyes
        const time = Date.now() * 0.001;
        const scaleFactor = 1 + Math.sin(time * 2) * 0.05;
        eye.scale.set(scaleFactor, scaleFactor, scaleFactor);
        
        // Eye color animation
        const material = eye.material as THREE.MeshBasicMaterial;
        material.color.setHSL(0.6 + Math.sin(time * 0.5) * 0.1, 1, 0.5);
      });
      
      // Subtle floating animation
      if (robotRef.current) {
        robotRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.05;
      }
      
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    animate();

    // Cleanup
    return () => {
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={containerRef} className={`w-full h-full rounded-full overflow-hidden ${className}`}></div>;
};

export default RobotAvatar;