import React, { useEffect, useRef } from "react";
import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

type Obj3DProps = {
  theme: string;
};

const Object3D: React.FC<Obj3DProps> = ({ theme }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    // let controls: OrbitControls;
    let object: THREE.Group;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    const objToRender: Record<string, string> = {
      light: "plane",
      dark: "",
      jungle: "greenhouse",
    };

    const loader = new GLTFLoader();
    loader.load(
      `src/assets/models/${objToRender[theme]}/scene.gltf`,
      (gltf) => {
        object = gltf.scene;
        scene.add(object);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.error(error);
      }
    );

    renderer.setSize(
      containerRef.current!.clientWidth,
      containerRef.current!.clientHeight
    );
    containerRef.current?.appendChild(renderer.domElement);

    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(100, 100, 1000);
    topLight.castShadow = true;
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0x333333, 1);
    scene.add(ambientLight);

    // if (objToRender[theme] === "plane") {
    //   controls = new OrbitControls(camera, renderer.domElement);
    // }

    //
    const animate = () => {
      requestAnimationFrame(animate);

      type ConfigType = {
        [key in Obj3DProps["theme"]]: {
          rotationX: number;
          rotationY: number;
          rotationZ: number;
          positionZ: number;
          positionY: number;
          positionX: number;
        };
      };

      // Configuration based on theme
      const config: ConfigType = {
        light: {
          rotationX: 0.3,
          rotationY: -0.2,
          rotationZ: -0.4,
          positionZ: 1,
          positionY: 0.15,
          positionX: 0,
        },
        dark: {
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          positionZ: 18,
          positionY: 0,
          positionX: 0,
        },
        jungle: {
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          positionZ: 18,
          positionY: 1,
          positionX: 0,
        },
      };

      if (object) {
        // Reduce the effect of mouseX and mouseY
        const mouseXFactor = 0.03;
        const mouseYFactor = 0.008;

        object.rotation.y += (mouseX / window.innerWidth - 0.5) * mouseXFactor;
        object.rotation.x += (mouseY / window.innerHeight - 0.5) * mouseYFactor;

        // Limit rotation angles to avoid extreme values
        object.rotation.y = THREE.MathUtils.clamp(object.rotation.y, -0.5, 0.5);
        object.rotation.x = THREE.MathUtils.clamp(object.rotation.x, -0.3, 0.3);
      }

      if (object) {
        object.rotation.x = config[theme].rotationX;
        object.rotation.y = config[theme].rotationY;
        object.rotation.z = config[theme].rotationZ;
        camera.position.z = config[theme].positionZ;
        camera.position.y = config[theme].positionY;
        camera.position.x = config[theme].positionX;
      }

      renderer.render(scene, camera);
    };

    document.onmousemove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    animate();

    // Cleanup on unmount
    return () => {
      document.onmousemove = null;
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, [theme]);
  return <div ref={containerRef} id="container3D" />;
};

export default Object3D;
