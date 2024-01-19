import React, { useRef } from "react";
import { Center, useGLTF } from "@react-three/drei";

export const WallstreetersLogo = () => {
  const ref = useRef();

  const { scene } = useGLTF("static/models/wallstreeters.gltf");

  return (
    scene && (
      <Center>
        <primitive
          ref={ref}
          object={scene}
          dispose={null}
          position={[0, 0, 0]}
          onClick={() => window.open("https://wallstreeters.io/", "_blank")}
        />
      </Center>
    )
  );
};
