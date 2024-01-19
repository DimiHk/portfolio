import React from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { Text } from "./Text";
import PersonalPhoto from "../images/me.jpeg";

export const About = () => {
  return (
    <Container
      direction="column"
      align="start"
      className="gap-[32px] relative w-full"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.25 }}
        style={{ all: "inherit" }}
      >
        <Text
          letterSpacing="title"
          size="3xl"
          className="xl:text-4xl"
          weight="medium"
        >
          ABOUT ME
        </Text>
        <Text
          className="w-[620px] xl:w-[720px]"
          style={{ lineHeight: "28px" }}
          letterSpacing="secondary"
        >
          HI AGAIN, AND NOW LET ME INTRODUCE MYSELF 😂,
          <br /> <br />
          I'M ALEXANDRE HUTSULYAK, A 21 YEAR-OLD FRONTEND DEVELOPER BASED IN
          LAGOA,PORTUGAL.
          <br /> <br />
          I RECENTLY COMPLETED MY BACHELOR’S DEGREE IN COMPUTER SCIENCE.
          <br /> <br />
          WITH 3+ YEARS OF EXPERIENCE IN THE DEVELOPMENT FIELD AND BUILDING
          CUSTOM SOFTWARE, I’VE ALREADY DONE FREELANCE WORK, CREATED AUTOMATION
          APPLICATIONS, WEB APPS, MOBILE APP AND MORE...
        </Text>
        <img
          src={PersonalPhoto}
          alt=""
          className="
          rounded-full
          border-4
          border-white
          shadow-xl
          w-[420px]
          h-[420px]
          2xl:w-[440px]
          2xl:h-[440px]
          object-cover
          object-center
          absolute
          right-[-140px]
          2xl:right-[-220px]
          "
        />
      </motion.div>
    </Container>
  );
};
