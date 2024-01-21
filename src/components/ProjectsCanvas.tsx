import React from "react";
import { CameraControls, Center, Text3D } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import { Mac } from "./Mac";
import font from "../fonts/opensans.json";

type Props = {
  selectedProject: string;
};

export const ProjectsCanvas = ({ selectedProject }: Props) => {
  return (
    <Canvas
      shadows
      style={{
        height: 540,
        marginTop: 42,
        backgroundColor: "#F9F9F9",
        borderRadius: 8,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.10)",
      }}
      camera={{ fov: 80, position: [0, 0.1, 0.35] }}
    >
      <ambientLight intensity={15} position={[0, 0, 100]} />
      <CameraControls makeDefault />
      <Center>
        {selectedProject === "INTERVIEWING APPLICATION" ||
        selectedProject === "THIRD PARTY ADS API INTEGRATION" ? (
          <React.Suspense
            key={selectedProject + "_unavailable"}
            fallback={null}
          >
            <Center position={[0, 0.18, 0]}>
              <Text3D font={font} size={0.05} height={0.01}>
                {selectedProject}
                <meshBasicMaterial attach="material" color="black" />
              </Text3D>
            </Center>
            <Center position={[0, 0.08, 0]}>
              <Text3D font={font} size={0.05} height={0.01}>
                UNAVAILABLE PROJECT FOR DEMO
                <meshBasicMaterial attach="material" color="black" />
              </Text3D>
            </Center>
          </React.Suspense>
        ) : (
          <React.Suspense fallback={null}>
            <Center key={selectedProject} position={[0, 0.18, 0]}>
              <Text3D font={font} size={0.05} height={0.01}>
                {selectedProject}
                <meshBasicMaterial attach="material" color="black" />
              </Text3D>
            </Center>
            <Center position={[0, 0.125, 0]}>
              <Text3D font={font} size={0.02} height={0.01}>
                * ZOOM IN *
                <meshBasicMaterial attach="material" color="black" />
              </Text3D>
            </Center>
            <Mac selectedProject={selectedProject} />
          </React.Suspense>
        )}
      </Center>
    </Canvas>
  );
};
