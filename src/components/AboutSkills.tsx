import React from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { Button } from "./Button";

export const AboutSkills = () => {
  return (
    <Container
      direction="column"
      justify="end"
      align="end"
      className="gap-[14px] mt-[64px] xl:mt-[84px] 2xl:mt-[94px] w-full relative"
    >
      <Container justify="end" align="end" className="gap-[14px]">
        <motion.div
          initial={{ opacity: 0, translateX: 100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 * 0.5 }}
        >
          <Button
            text="BANCHELOR’S DEGREE"
            variant="solid"
            color="secondary"
            textColor="white"
            className="shadow-md"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: 100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 * 0.5 }}
        >
          <Button
            text="WEB DEVELOPMENT"
            variant="outline"
            className="shadow-md"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: 100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 * 0.5 }}
        >
          <Button
            text="WORKED AT A MARKETING STARTUP"
            variant="solid"
            color="secondary"
            textColor="white"
            className="shadow-md"
          />
        </motion.div>
      </Container>
      <Container justify="end" align="end" className="gap-[14px]">
        <motion.div
          initial={{ opacity: 0, translateX: 100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8 * 0.5 }}
        >
          <Button
            text="WORKED AT A FINTECH STARTUP"
            variant="outline"
            className="shadow-md"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: 100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.9 * 0.5 }}
        >
          <Button
            text="MOBILE DEVELOPMENT"
            variant="solid"
            color="secondary"
            textColor="white"
            className="shadow-md"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: 100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2 * 0.5 }}
        >
          <Button text="FREELANCE" variant="outline" className="shadow-md" />
        </motion.div>
      </Container>
      <Container justify="end" align="end" className="gap-[14px]">
        <motion.div
          initial={{ opacity: 0, translateX: 100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.1 * 0.5 }}
        >
          <Button
            text="AUTOMATION APPLICATIONS"
            variant="solid"
            color="secondary"
            textColor="white"
            className="shadow-md"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: 100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.2 * 0.5 }}
        >
          <Button text="WEB APPS" variant="outline" className="shadow-md" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: 100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.4 * 0.5 }}
        >
          <Button
            text="CUSTOM SOFTWARE"
            variant="solid"
            color="secondary"
            textColor="white"
            className="shadow-md"
          />
        </motion.div>
      </Container>
    </Container>
  );
};
