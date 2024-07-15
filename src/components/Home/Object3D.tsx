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
    console.log("-theme", theme);
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
      dark: "", // Assuming there is no model for the dark theme
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

    camera.position.z = objToRender[theme] === "plane" ? 1.1 : 18;

    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(500, 500, 500);
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
