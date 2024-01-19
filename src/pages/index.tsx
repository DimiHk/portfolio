import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Container } from "../components/Container";
import { Navigation } from "../components/Navigation";
import { ScrollDown } from "../components/ScrollDown";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { AboutSkills } from "../components/AboutSkills";
import { DevelopedProjects } from "../components/DevelopedProjects";
import { SkillsAndCarrerPath } from "../components/SkillsAndCarrerPath";
import { Contact } from "../components/Contact";

const IndexPage: React.FC<PageProps> = () => {
  const [isBottom, setIsBottom] = React.useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const target = e.currentTarget;

    const heightAwayFromBottom = 200;

    const heightDifference =
      Math.round(target.scrollHeight - target.scrollTop) - heightAwayFromBottom;

    const isBottom = heightDifference <= target.clientHeight;

    if (isBottom) {
      setIsBottom(true);
      return;
    }

    setIsBottom(false);
  };

  return (
    <div
      onScroll={handleScroll}
      className="relative h-screen overflow-x-hidden scroll-smooth"
      id="main-container"
    >
      <Navigation />
      <Container
        direction="column"
        className="ml-[32px] mr-[32px] 2xl:ml-[104px] 2xl:mr-[104px]"
      >
        <Hero />
        <About />
        <AboutSkills />
        <DevelopedProjects />
        <SkillsAndCarrerPath />
        <Contact />
      </Container>
      <ScrollDown isBottom={isBottom} />
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Alexandre Hutsulyak - Portfolio</title>
);
