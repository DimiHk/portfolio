import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTurnDown } from "@fortawesome/pro-light-svg-icons";
import { Text } from "./Text";
import { motion } from "framer-motion";

type Props = {
  isBottom: boolean;
};

export const ScrollDown = ({ isBottom }: Props) => {
  return (
    <span className="sticky left-[90%] bottom-0 flex flex-col gap-2 h-[140px] w-[88px] justify-center items-center">
      <Text className="text-center">
        {isBottom ? "SCROLL UP" : "SCROLL DOWN"}
      </Text>
      <a href={isBottom ? "#home" : "#contact"}>
        <span className="relative inline-flex justify-center align-middle rounded-full h-[66px] w-[66px] bg-[#1C1917] cursor-pointer">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-20"></span>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isBottom ? 180 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <FontAwesomeIcon
              icon={faTurnDown}
              color="white"
              size="lg"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </motion.div>
        </span>
      </a>
    </span>
  );
};
