import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, Stars } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/* ---------------- Shield ---------------- */
function Shield({ color1 = "#fde047", color2 = "#38bdf8" }) {
  const group = useRef();

  const geo = useMemo(() => {
    const g = new THREE.SphereGeometry(1.15, 64, 32);
    const pos = g.attributes.position;
    const vec = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      vec.fromBufferAttribute(pos, i);
      const h = Math.min(1, Math.abs(vec.y));
      const bulge = 0.22 * Math.sin(vec.x * 2.4) * Math.sin(vec.z * 2.4) * h;
      vec.multiplyScalar(1 + bulge);
      if (vec.y > -0.05) vec.y = Math.min(1.32, vec.y + 0.16 * h);
      pos.setXYZ(i, vec.x, vec.y, vec.z);
    }
    g.computeVertexNormals();
    return g;
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    group.current.rotation.y = Math.sin(t * 0.25) * 0.5;
    group.current.rotation.x = Math.sin(t * 0.4) * 0.18;
    const core = group.current.children[0];
    if (core) core.material.opacity = 0.45 + Math.sin(t * 2) * 0.2;
  });

  return (
    <group ref={group}>
      <mesh geometry={geo}>
        <meshPhysicalMaterial
          color="#0e7490"
          transparent
          opacity={0.55}
          metalness={0.6}
          roughness={0.25}
          emissive={color1}
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh geometry={geo} scale={1.001}>
        <meshBasicMaterial color={color2} wireframe transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

/* ---------------- Orbit rings ---------------- */
function Ring({ radius, speed, tilt, color }) {
  const ref = useRef();

  useFrame((state) => {
    ref.current.rotation.z = state.clock.elapsedTime * speed;
  });

  return (
    <group rotation={[tilt, tilt * 0.5, 0]}>
      <mesh ref={ref} position={[0, 0, 0]}>
        <ringGeometry args={[radius, radius + 0.035, 120]} />
        <meshBasicMaterial color={color} transparent opacity={0.5} side={THREE.DoubleSide} wireframe />
      </mesh>
    </group>
  );
}

/* ---------------- Wireframe geometric objects ---------------- */
function WireObject({ type, position, scale = 1, color = "#7dd3fc", speed = 0.6 }) {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed;
    ref.current.rotation.x = t;
    ref.current.rotation.y = t * 1.3;
  });

  const geometry = (() => {
    switch (type) {
      case "cube":
        return <boxGeometry args={[1, 1, 1]} />;
      case "octa":
        return <octahedronGeometry args={[0.8]} />;
      case "torus":
        return <torusKnotGeometry args={[0.6, 0.2, 64, 16]} />;
      case "icosa":
        return <icosahedronGeometry args={[0.9]} />;
      case "cone":
        return <coneGeometry args={[0.7, 1.2, 5]} />;
      case "sphere":
        return <sphereGeometry args={[0.9, 24, 24]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  })();

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={scale}>
        {geometry}
        <meshBasicMaterial color={color} wireframe transparent opacity={0.45} />
      </mesh>
    </Float>
  );
}

/* ---------------- Matrix rain (2D overlay via drei) ---------------- */
function MatrixRain() {
  const ref = useRef();
  const chars = "01$#@%&*+=";

  useFrame((state) => {
    if (ref.current) {
      ref.current.material.opacity = 0.35 + Math.sin(state.clock.elapsedTime) * 0.15;
    }
  });

  return <Sparkles count={180} scale={[12, 8, 6]} size={2.5} speed={0.4} color="#fde047" ref={ref} />;
}

/* ---------------- Page 3D scene ---------------- */
const SCENES = {
  home: {
    main: <Shield />,
    wire: [
      { type: "cube", position: [2.3, 1.5, -1], color: "#fde047" },
      { type: "octa", position: [-2.4, -1.2, -1.5], color: "#7dd3fc" },
      { type: "torus", position: [2.6, -1.4, -2], color: "#38bdf8" },
    ],
    rings: [
      { radius: 1.9, speed: 0.35, tilt: 1.2, color: "#fde047" },
      { radius: 2.45, speed: -0.25, tilt: 0.6, color: "#7dd3fc" },
      { radius: 3.1, speed: 0.18, tilt: 1.9, color: "#38bdf8" },
    ],
  },
  about: {
    main: <WireObject type="icosa" position={[0, 0, 0]} scale={1.8} color="#fde047" speed={0.4} />,
    wire: [
      { type: "cube", position: [3, 1, -1], color: "#7dd3fc" },
      { type: "sphere", position: [-3, -0.5, -1.5], color: "#38bdf8" },
    ],
    rings: [
      { radius: 2.3, speed: 0.3, tilt: 0.9, color: "#fde047" },
      { radius: 3, speed: -0.22, tilt: 1.4, color: "#7dd3fc" },
    ],
  },
  services: {
    main: <WireObject type="torus" position={[0, 0, 0]} scale={1.6} color="#7dd3fc" speed={0.5} />,
    wire: [
      { type: "octa", position: [2.8, 1.3, -1], color: "#fde047" },
      { type: "cone", position: [-2.8, -1, -1.5], color: "#38bdf8" },
      { type: "sphere", position: [0.4, 2.6, -2.5], color: "#fde047" },
    ],
    rings: [
      { radius: 2.4, speed: 0.32, tilt: 1.1, color: "#fde047" },
      { radius: 3.1, speed: -0.2, tilt: 0.5, color: "#7dd3fc" },
    ],
  },
  courses: {
    main: <WireObject type="octa" position={[0, 0, 0]} scale={1.7} color="#fde047" speed={0.5} />,
    wire: [
      { type: "cube", position: [3, 1.2, -1], color: "#7dd3fc" },
      { type: "torus", position: [-3, -1.2, -1.5], color: "#38bdf8" },
      { type: "icosa", position: [0.5, 2.6, -2.5], color: "#7dd3fc" },
    ],
    rings: [
      { radius: 2.4, speed: 0.35, tilt: 1.3, color: "#fde047" },
      { radius: 3.1, speed: -0.24, tilt: 0.7, color: "#7dd3fc" },
    ],
  },
  books: {
    main: (
      <Float speed={2} rotationIntensity={0.4} floatIntensity={1.2}>
        <mesh position={[0, 0, 0]} rotation={[0.3, 0.5, 0]}>
          <boxGeometry args={[1.8, 1.2, 0.3]} />
          <meshBasicMaterial color="#fde047" wireframe transparent opacity={0.5} />
        </mesh>
      </Float>
    ),
    wire: [
      { type: "cube", position: [2.8, 1.4, -1], color: "#7dd3fc" },
      { type: "sphere", position: [-2.8, -1, -1.5], color: "#38bdf8" },
    ],
    rings: [
      { radius: 2.3, speed: 0.3, tilt: 1, color: "#fde047" },
      { radius: 3, speed: -0.2, tilt: 0.4, color: "#7dd3fc" },
    ],
  },
  videos: {
    main: <WireObject type="sphere" position={[0, 0, 0]} scale={1.7} color="#7dd3fc" speed={0.4} />,
    wire: [
      { type: "torus", position: [2.8, 1.4, -1], color: "#fde047" },
      { type: "octa", position: [-2.8, -1.2, -1.5], color: "#38bdf8" },
    ],
    rings: [
      { radius: 2.4, speed: 0.3, tilt: 1.2, color: "#fde047" },
      { radius: 3.1, speed: -0.2, tilt: 0.6, color: "#7dd3fc" },
    ],
  },
  contact: {
    main: <WireObject type="cone" position={[0, 0, 0]} scale={1.7} color="#38bdf8" speed={0.5} />,
    wire: [
      { type: "icosa", position: [2.8, 1.3, -1], color: "#fde047" },
      { type: "cube", position: [-2.8, -1.1, -1.5], color: "#7dd3fc" },
    ],
    rings: [
      { radius: 2.3, speed: 0.33, tilt: 0.8, color: "#fde047" },
      { radius: 3, speed: -0.22, tilt: 1.5, color: "#7dd3fc" },
    ],
  },
};

function Scene({ variant = "home" }) {
  const cfg = SCENES[variant] || SCENES.home;

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 4]} intensity={40} color="#fde047" />
      <pointLight position={[-4, -2, -3]} intensity={25} color="#38bdf8" />
      <Stars radius={60} depth={40} count={2600} factor={3} saturation={0} fade speed={0.6} />
      <MatrixRain />
      {cfg.rings.map((r, i) => (
        <Ring key={i} {...r} />
      ))}
      {cfg.wire.map((w, i) => (
        <WireObject key={i} {...w} />
      ))}
      {cfg.main}
    </>
  );
}

export default function Scene3D({ variant = "home" }) {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 6.5], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Scene variant={variant} />
    </Canvas>
  );
}
