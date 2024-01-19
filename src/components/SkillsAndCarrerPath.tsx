import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { Text } from "./Text";
import { cn } from "../helpers";
import { carrerPath } from "../constants";
import { LogriseLogo } from "./LogriseLogo";
import { AlgardataLogo } from "./AlgardataLogo";
import { WallstreetersLogo } from "./WallstreetersLogo";
import { CameraControls, Center, Text3D } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import font from "../fonts/opensans.json";

export const SkillsAndCarrerPath = () => {
  return (
    <Container
      direction="column"
      className="gap-[120px] mt-[60px] relative w-full"
      justify="start"
      id="skills"
    >
      <Container justify="start" direction="column" className="gap-[32px] ">
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
            HARD & SOFT SKILLS
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 * 0.5 }}
        >
          <div
            className="overflow-hidden bg-gray-50 py-[48px] shadow-md"
            style={{ whiteSpace: "nowrap" }}
          >
            {Array.from({ length: 3 }).map((_, index) => {
              return (
                <div key={index} className="marquee inline-block">
                  <Text size="5xl">REACT.JS</Text>
                  <Text size="5xl">ADAPTABILITY</Text>
                  <Text size="5xl">NEXT.JS</Text>
                  <Text size="5xl">TEAMWORK</Text>
                  <Text size="5xl">TYPESCRIPT</Text>
                  <Text size="5xl">CSS</Text>
                </div>
              );
            })}
          </div>
        </motion.div>
      </Container>
      <Container
        direction="column"
        align="end"
        className="gap-[48px] mt-[120px] xl:mt-[40px] 2xl:mt-[18px] w-full"
      >
        <Container align="end" direction="column" className="gap-[24px]">
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
              MY CAREER PATH
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateX: 100 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 3 * 0.5 }}
          >
            <Text letterSpacing="title" color="secondary" weight="normal">
              {`HOVER OVER & CLICK ON THE LOGO TO KNOW MORE ABOUT THE COMPANY!`}
            </Text>
          </motion.div>
        </Container>
        <Container
          direction="column"
          className="gap-[32px] w-full xl:w-[80%] 3xl:w-[60%]"
          justify="start"
          align="start"
          grow
        >
          {carrerPath.map((project, index) => (
            <ProjectCard key={project.type} project={project} index={index} />
          ))}
        </Container>
      </Container>
    </Container>
  );
};

const ProjectCard = ({
  project,
  index,
}: {
  project: { name: string; type: string };
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "w-[640px] gap-[32px] py-[24px] px-[24px] border-[1px] border-[rgba(28, 25, 23, 0.09)] rounded-[8px] flex justify-between relative",
        index % 2 ? "bg-gray-50" : undefined,
        index % 2 === 0 ? "shadow-xl shadow-green-400/10" : undefined,
        "cursor-pointer",
        index % 2 ? "self-start" : "self-end"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <Text size="sm" color="secondary">
        {project.type}
      </Text>
      <Text weight="medium">
        {project.name} - {index + 1}#
      </Text>

      {isHovered && (
        <motion.div
          initial={{ opacity: 0, translateX: index % 2 === 0 ? -500 : 500 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            translateX: isHovered ? 0 : index % 2 === 0 ? -500 : 500,
          }}
          transition={{ duration: 1 }}
          className={cn(
            "absolute top-0 w-[640px] h-[420px] py-[24px] px-[24px] border-[1px] border-[rgba(28, 25, 23, 0.09)] rounded-[8px] bg-gray-50/[95%] shadow-xl shadow-green-400/10",
            index % 2 === 0 ? "self-start" : "self-end",
            index % 2 === 0 ? "left-0" : "right-0",
            "z-50"
          )}
        >
          <Canvas shadows camera={{ fov: 80, position: [0, 5, 1] }}>
            <ambientLight intensity={15} position={[0, 0, 100]} />
            <CameraControls makeDefault />
            <Center>
              <React.Suspense
                key={project.name + "_unavailable"}
                fallback={null}
              >
                <Center position={[0, 1.5, -3]}>
                  <Text3D
                    font={font}
                    size={0.5}
                    height={0.01}
                    rotation={[-1.5, 0, 0]}
                  >
                    CLICK ON THE LOGO!!
                    <meshBasicMaterial attach="material" color="black" />
                  </Text3D>
                </Center>
                {handleSelectProject(project.name)}
              </React.Suspense>
            </Center>
          </Canvas>
        </motion.div>
      )}
    </div>
  );
};

const handleSelectProject = (projectName: string) => {
  switch (projectName) {
    case "LOGRISE":
      return <LogriseLogo />;
    case "ALGARDATA":
      return <AlgardataLogo />;
    case "WALLSTREETERS":
      return <WallstreetersLogo />;
    default:
      return null;
  }
};
