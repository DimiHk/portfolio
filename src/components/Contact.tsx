import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { Text } from "./Text";
import { Button } from "./Button";
import Map from "../images/map.svg";
import emailjs from "@emailjs/browser";
import { cn } from "../helpers";

export const Contact = () => {
  const form = useRef();
  const [toastMessage, setToastMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qbq80w9",
        "template_lw7flus",
        form.current,
        "-pQaOZbhAyNntTPc1"
      )
      .then(
        () => {
          setToastMessage({
            message: "EMAIL SENT SUCCESSFULLY !",
            type: "success",
          });
        },
        (error) => {
          setToastMessage({ message: "FAILED TO SEND EMAIL !", type: "error" });
        }
      );
    form.current.reset();
  };

  useEffect(() => {
    if (toastMessage) {
      const timeoutId = setTimeout(() => {
        setToastMessage(null);
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [toastMessage]);

  return (
    <Container
      className="gap-[32px] mt-[120px] xl:mt-[140px] relative w-full"
      justify="start"
      id="contact"
    >
      <Container align="start" direction="column" className="gap-[42px] w-full">
        <motion.div
          initial={{ opacity: 0, translateX: -500 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 3 * 0.5 }}
        >
          <Text
            letterSpacing="title"
            size="3xl"
            className="xl:text-4xl"
            weight="medium"
          >
            LET'S GET IN TOUCH!
          </Text>
        </motion.div>
        <Container direction="column" className="w-[580px] gap-[18px] relative">
          <form ref={form} onSubmit={sendEmail} style={{ all: "inherit" }}>
            <input
              type="text"
              className="w-full px-[16px] py-[12px] tracking-[2.56px] text-[#1C1917] text-xs placeholder:text-[#1C1917] placeholder:text-xs rounded border-[1px] border-black/10 bg-gray-50 focus:outline-green-400/30"
              placeholder="Name"
              name="name"
              required
            />
            <input
              type="text"
              className="w-full px-[16px] py-[12px] tracking-[2.56px] text-[#1C1917] text-xs placeholder:text-[#1C1917] placeholder:text-xs rounded border-[1px] border-black/10 bg-gray-50 focus:outline-green-400/30"
              placeholder="Email"
              name="email"
              required
            />

            <textarea
              className="w-full px-[16px] py-[16px] tracking-[2.56px] text-[#1C1917] text-xs placeholder:text-[#1C1917] placeholder:text-xs rounded border-[1px] border-black/10 bg-gray-50 focus:outline-green-400/30"
              placeholder="Message"
              name="message"
              rows={8}
              required
            />
            <Button
              type="submit"
              text="SEND"
              variant="solid"
              color="secondary"
              textColor="white"
              className="shadow-md w-full"
              style={{ fontSize: "14px" }}
            />
          </form>
        </Container>
        <div className="absolute w-[800px] 3xl:w-[750px] left-[420px] 3xl:left-[820px] z-[-1] scale-150 -rotate-[11deg]">
          <span className="absolute flex bottom-[68px] 3xl:bottom-[64px] right-[510px] 3xl:right-[480px] h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3 * 0.5 }}
          >
            <Map />
          </motion.div>
        </div>
      </Container>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className={cn(
              "fixed top-4 right-0 mb-4 mr-4 text-white p-4 rounded-[8px] text-sm",
              toastMessage.type === "success" ? "bg-green-400" : "bg-red-400"
            )}
          >
            {toastMessage.message}
          </div>
        </motion.div>
      )}
    </Container>
  );
};
