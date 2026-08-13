import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, Stars } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Shield() {
  const group = useRef();

  const shieldGeo = useMemo(() => {
    const geo = new THREE.SphereGeometry(1.15, 64, 32);
    const pos = geo.attributes.position;
    const vec = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      vec.fromBufferAttribute(pos, i);
      const h = Math.min(1, Math.abs(vec.y));
      const bulge = 0.22 * Math.sin(vec.x * 2.4) * Math.sin(vec.z * 2.4) * h;
      vec.multiplyScalar(1 + bulge);
      if (vec.y > -0.05) vec.y = Math.min(1.32, vec.y + 0.16 * h);
      pos.setXYZ(i, vec.x, vec.y, vec.z);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    group.current.rotation.y = Math.sin(t * 0.25) * 0.5;
    group.current.rotation.x = Math.sin(t * 0.4) * 0.18;
    const core = group.current.children.find((c) => c.name === "core");
    if (core) core.material.opacity = 0.45 + Math.sin(t * 2) * 0.25;
  });

  return (
    <group ref={group}>
      <mesh geometry={shieldGeo} name="core">
        <meshPhysicalMaterial
          color="#0e7490"
          transparent
          opacity={0.55}
          metalness={0.6}
          roughness={0.25}
          emissive="#22d3ee"
          emissiveIntensity={0.55}
        />
      </mesh>
      <mesh geometry={shieldGeo} scale={1.001}>
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

function Ring({ radius, speed, tilt, color, dash }) {
  const ref = useRef();

  const geo = useMemo(() => {
    const g = new THREE.RingGeometry(radius, radius + 0.03, 120);
    const pos = g.attributes.position;
    const v = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      v.x *= radius + 0.03;
      v.z *= radius + 0.03;
      pos.setXYZ(i, v.x, v.y, v.z);
    }
    return g;
  }, [radius]);

  useFrame((state) => {
    ref.current.rotation.z = state.clock.elapsedTime * speed;
  });

  return (
    <group rotation={[tilt, tilt * 0.5, 0]}>
      <mesh ref={ref} geometry={geo}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.55}
          side={THREE.DoubleSide}
          wireframe
        />
      </mesh>
    </group>
  );
}

function CyberCube() {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * 0.6;
    ref.current.rotation.y = t * 0.9;
  });

  return (
    <mesh ref={ref} position={[2.1, 1.4, -1]} scale={0.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="#34d399" wireframe transparent opacity={0.5} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 4]} intensity={40} color="#22d3ee" />
      <pointLight position={[-4, -2, -3]} intensity={25} color="#60a5fa" />
      <Stars radius={60} depth={40} count={2600} factor={3} saturation={0} fade speed={0.6} />
      <Sparkles count={140} scale={[9, 7, 5]} size={2.2} speed={0.35} color="#67e8f9" />
      <Float speed={1.6} rotationIntensity={0.5} floatIntensity={1.4}>
        <Shield />
      </Float>
      <Ring radius={1.9} speed={0.35} tilt={1.2} color="#22d3ee" />
      <Ring radius={2.45} speed={-0.25} tilt={0.6} color="#60a5fa" />
      <Ring radius={3.1} speed={0.18} tilt={1.9} color="#34d399" />
      <CyberCube />
    </>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 6.5], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Scene />
    </Canvas>
  );
}
