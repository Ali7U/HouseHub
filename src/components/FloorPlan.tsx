import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface FloorPlanProps {
  data: FloorPlanData[];
}

interface FloorPlanData {
  type: 'wall' | 'door' | 'window';
  position: [number, number];
  size: [number, number];
}

export function FloorPlan({ data }: FloorPlanProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Create a Three.js renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);

    // Create a Three.js scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, canvasRef.current.clientWidth / canvasRef.current.clientHeight, 0.1, 1000);
    camera.position.set(0, 2, 5);
    scene.add(camera);

    // Add lights
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    // Create the 3D objects
    data.forEach(({ type, position, size }) => {
      if (type === 'wall') {
        const wallGeometry = new THREE.BoxGeometry(size[0], 2.5, size[1]);
        const wallMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
        const wallMesh = new THREE.Mesh(wallGeometry, wallMaterial);
        wallMesh.position.set(position[0] + size[0] / 2, 1.25, position[1] + size[1] / 2);
        scene.add(wallMesh);
      } else if (type === 'door') {
        const doorGeometry = new THREE.BoxGeometry(size[0], 0.2, size[1]);
        const doorMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const doorMesh = new THREE.Mesh(doorGeometry, doorMaterial);
        doorMesh.position.set(position[0] + size[0] / 2, 0.1, position[1] + size[1] / 2);
        scene.add(doorMesh);
      } else if (type === 'window') {
        const windowGeometry = new THREE.BoxGeometry(size[0], 0.2, size[1]);
        const windowMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
        const windowMesh = new THREE.Mesh(windowGeometry, windowMaterial);
        windowMesh.position.set(position[0] + size[0] / 2, 1.5, position[1] + size[1] / 2);
        scene.add(windowMesh);
      }
    });

    // Render the scene
    function render() {
      renderer.render(scene, camera);
    }

    render();
  }, [canvasRef, data]);

  return <canvas ref={canvasRef} />;
}
