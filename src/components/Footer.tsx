import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "./Container";
import { Text } from "./Text";
import { Divider } from "./Divider";
import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="flex gap-4 p-4 justify-evenly content-center bg-gray-50 shadow border border-[rgba(28, 25, 23, 0.09)]">
      <Container direction="column">
        <Text size="xs" weight="medium">
          CONTACTS
        </Text>
        <Container className="flex-wrap">
          <Text size="xs">(+351) 928 146 081</Text>
          <Divider height="h-4" />
          <Text size="xs">DIMIHTSK@GMAIL.COM</Text>
        </Container>
      </Container>
      <Divider height="h-auto" />
      <Container direction="column">
        <Text size="xs" weight="medium">
          NAVIGATION
        </Text>
        <Container className="flex-wrap">
          <a href="#home">
            <Text size="xs" className="hover:text-green-500">
              HOME
            </Text>
          </a>
          <Divider height="h-4" />
          <a href="#about">
            <Text size="xs" className="hover:text-green-500">
              ABOUT
            </Text>
          </a>
          <Divider height="h-4" />
          <a href="#projects">
            <Text size="xs" className="hover:text-green-500">
              PROJECTS
            </Text>
          </a>
          <Divider height="h-4" />
          <a href="#skills">
            <Text size="xs" className="hover:text-green-500">
              SKILLS & PATH
            </Text>
          </a>
        </Container>
      </Container>
      <Divider height="h-auto" />
      <Container direction="column">
        <Text size="xs" weight="medium">
          SOCIALS
        </Text>
        <Container>
          <a href="https://www.instagram.com/dimi_hk/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} color="black" size="lg" />
          </a>
          <a href="https://www.linkedin.com/in/dimihk/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} color="black" size="lg" />
          </a>
          <a href="https://twitter.com/dimihk" target="_blank">
            <FontAwesomeIcon icon={faXTwitter} color="black" size="lg" />
          </a>
          <a href="https://wa.me/928146081" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} color="black" size="lg" />
          </a>
        </Container>
      </Container>
    </div>
  );
};
