import React, { lazy } from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { Text } from "./Text";
import { projects } from "../constants";
import { cn } from "../helpers";
import { ProjectsCanvas } from "./ProjectsCanvas";

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
      {selectedProject && <ProjectsCanvas selectedProject={selectedProject} />}
    </Container>
  );
};
