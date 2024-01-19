import React, { useEffect, useRef, useState } from "react";
import { Center, useGLTF, useVideoTexture } from "@react-three/drei";
import { MeshBasicMaterial } from "three";

type Props = {
  selectedProject: string;
};

export const Mac = ({ selectedProject }: Props) => {
  const ref = useRef();

  const { scene } = useGLTF("static/models/MacbookPro.gltf");

  const texture = useVideoTexture(handleSelectedProject(selectedProject));

  const [newScene, setNewScene] = useState();

  useEffect(() => {
    setNewScene(() => {
      const newScene = scene;

      const videoMaterial = new MeshBasicMaterial({
        map: texture,
      });

      const meshToApplyMaterial = newScene.children[7].children[0].children[3];

      meshToApplyMaterial.material = videoMaterial;

      meshToApplyMaterial.geometry.attributes.uv.array.forEach((uv, index) => {
        meshToApplyMaterial.geometry.attributes.uv.array[index] =
          index % 2 === 1 ? 1 - uv : uv;
      });

      meshToApplyMaterial.rotation.y = 6.28318531;

      meshToApplyMaterial.position.z = 0;

      meshToApplyMaterial.position.y = -0.02;

      return newScene;
    });
  }, [selectedProject]);

  return (
    newScene && (
      <Center>
        <primitive
          ref={ref}
          object={newScene}
          dispose={null}
          position={[0, 0, 0]}
        />
      </Center>
    )
  );
};

const handleSelectedProject = (selectedProject: string) => {
  switch (selectedProject) {
    case "INTERVIEWING APPLICATION":
      return "";
    case "THIRD PARTY ADS API INTEGRATION":
      return "";
    case "BOOMO":
      return "static/videos/boommo.mkv";
    case "OUTCLASS":
      return "static/videos/outclass.mkv";
    case "WALLSTREETERS":
      return "static/videos/wallstreeters.mkv";
    case "MSGENIUS":
      return "static/videos/msgenius.mkv";
    default:
      return "static/videos/boommo.mkv";
  }
};
