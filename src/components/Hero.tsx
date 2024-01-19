import React from "react";
import { faFileCircleInfo } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { skills, actions } from "../constants";
import { cn } from "../helpers";
import { Button } from "./Button";
import { Divider } from "./Divider";
import { Container } from "./Container";
import { Text } from "./Text";

export const Hero = () => {
  return (
    <Container
      direction="column"
      className="gap-[24px] my-[135px] xl:my-[220px]"
    >
      <Container direction="column" className="gap-[12px] w-full" align="start">
        <motion.div
          initial={{ opacity: 0, translateX: -500 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
        >
          <Text size="3xl" className="xl:text-4xl">
            HI THERE 👋,
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: -500 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Text size="3xl" className="xl:text-4xl" weight="bold">
            I’M ALEXANDRE HTSK
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: -500 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Text size="3xl" className="xl:text-4xl">
            I’M HERE TO DEVELOP FOR YOU!
          </Text>
        </motion.div>
        <Container align="start" justify="center">
          {skills.map((skill, index) => (
            <React.Fragment>
              <motion.div
                initial={{ opacity: 0, translateX: 500 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: (index + 1) * 0.5 }}
              >
                <Text
                  key={skill}
                  size="3xl"
                  weight="bold"
                  className={cn(
                    index !== 0 ? "px-[14px]" : "pr-[14px]",
                    "xl:text-4xl"
                  )}
                >
                  {skill.toLocaleUpperCase()}
                </Text>
              </motion.div>
              {skill !== "GEEK" && <Divider height="h-8" />}
            </React.Fragment>
          ))}
        </Container>
      </Container>

      <Container justify="start" className="gap-[28px] w-full">
        {actions.map((action, index) => (
          <React.Fragment key={action.link}>
            <motion.div
              initial={{ opacity: 0, translateX: 500 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: (index + 1) * 0.5 }}
            >
              <a
                href={action.link}
                download={action.title === "DOWNLOAD CV" ? true : false}
              >
                <Button
                  key={action.link}
                  text={action.title.toLocaleUpperCase()}
                  variant={action.title === "DOWNLOAD CV" ? "solid" : "outline"}
                  color={
                    action.title === "DOWNLOAD CV" ? "secondary" : "primary"
                  }
                  textColor={
                    action.title === "DOWNLOAD CV" ? "white" : "primary"
                  }
                  className={"shadow-md"}
                  iconRight={
                    action.title === "DOWNLOAD CV" ? (
                      <FontAwesomeIcon
                        icon={faFileCircleInfo}
                        color="inherit"
                      />
                    ) : undefined
                  }
                />
              </a>
            </motion.div>
            {action.title !== "DOWNLOAD CV" && <Divider height="h-10" />}
          </React.Fragment>
        ))}
      </Container>
    </Container>
  );
};
