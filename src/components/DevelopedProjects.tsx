import React from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { Text } from "./Text";
import { projects } from "../constants";
import { cn } from "../helpers";
import { CameraControls, Center, Text3D } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import { Mac } from "./Mac";
import font from "../fonts/opensans.json";

export const DevelopedProjects = () => {
  const [selectedProject, setSelectedProject] = React.useState(
    projects[0].name
  );

  return (
    <Container direction="column" id="projects">
      <Container
        direction="column"
        className="gap-[24px] mt-[120px] w-full"
        align="center"
      >
        <motion.div
          initial={{ opacity: 0, translateY: 100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 * 0.5 }}
        >
          <Text
            letterSpacing="title"
            size="3xl"
            className="xl:text-4xl"
            weight="medium"
          >
            DEVELOPED PROJECTS
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2 * 0.5 }}
        >
          <Text letterSpacing="title" color="secondary" weight="normal">
            {`CLICK ON THE PROJECTS & GET TO KNOW MORE!`}
          </Text>
        </motion.div>
      </Container>
      <div className="grid grid-cols-2 gap-4 w-full xl:grid-cols-3 mt-[42px]">
        {projects.map((project) => {
          return (
            <div
              className={cn(
                "w-full px-4 py-4 gap-[8px] border-[1px] border-[rgba(28, 25, 23, 0.09)] rounded-[8px] flex flex-col",
                "cursor-pointer border hover:border-[#1C1917] hover:transition-all hover:duration-500 hover:ease-in-out shadow",
                selectedProject === project.name
                  ? "border-[#1C1917]"
                  : undefined
              )}
              onClick={() => setSelectedProject(project.name)}
            >
              <Container justify="between" grow>
                <Text weight="medium" style={{ fontSize: "10px" }}>
                  {project.name}
                </Text>
                <Text
                  className="py-[2px] px-[12px] bg-[#1C1917] rounded-full text-white shadow-md"
                  style={{ fontSize: "8px" }}
                >
                  {project.type}
                </Text>
              </Container>
            </div>
          );
        })}
      </div>
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
    </Container>
  );
};
