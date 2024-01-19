import React from "react";
import { headerTabs } from "../constants";
import { Divider } from "./Divider";
import { Container } from "./Container";
import { Text } from "./Text";

export const Navigation = () => {
  return (
    <nav
      className="flex content-center justify-between ml-[32px] mr-[32px] 2xl:ml-[104px] 2xl:mr-[104px]"
      id="home"
    >
      <Container className="gap-[6px]" direction="column" align="start">
        <Text>ALEXANDRE_HUTSULYAK</Text>
        <Container className="gap-[8px]">
          <Text size="xs" letterSpacing="secondary">
            ALWAYS HERE FOR YOU!
          </Text>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </Container>
      </Container>
      <Container className="pl-[12px] pr-[12px] pt-[32px] pb-[32px]">
        {headerTabs.map((tab) => (
          <React.Fragment>
            <Text
              key={tab.link}
              className="px-[12px] xl:px-[24px] hover:text-green-500"
            >
              <a href={tab.link}>{tab.title.toLocaleUpperCase()}</a>
            </Text>
            {tab.title !== "Contact Me" && <Divider />}
          </React.Fragment>
        ))}
      </Container>
    </nav>
  );
};
