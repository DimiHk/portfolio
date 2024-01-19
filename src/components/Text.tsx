import React from "react";
import { cn } from "../helpers";

export type TextProps = JSX.IntrinsicElements["span"] & {
  text?: string;
  color?: "primary" | "secondary" | "white" | "black";
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
  weight?:
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
  children?: React.ReactNode;
  letterSpacing?: "primary" | "secondary" | "title";
};

export const Text = ({
  text,
  color = "primary",
  size = "sm",
  weight = "normal",
  className,
  letterSpacing = "primary",
  children,
  ...props
}: TextProps) => {
  return (
    <>
      <span
        className={cn(
          handleGetColor(color),
          handleGetSize(size),
          handleGetWeight(weight),
          handleGetLetterSpacing(letterSpacing),
          className
        )}
        style={{ lineHeight: "normal" }}
        {...props}
      >
        {text ? text : children ? children : ""}
      </span>
    </>
  );
};

const handleGetColor = (color: TextProps["color"]) => {
  switch (color) {
    case "primary":
      return "text-[#1C1917]";
    case "secondary":
      return "text-gray-600";
    case "white":
      return "text-white";
    case "black":
      return "text-[#1E1E1E]";
  }
};

const handleGetSize = (size: TextProps["size"]) => {
  switch (size) {
    /*XS = 12px */
    case "xs":
      return "text-xs";
    /*SM = 14px */
    case "sm":
      return "text-sm";
    /*MD = 16px */
    case "md":
      return "text-base";
    /*LG = 18px */
    case "lg":
      return "text-lg";
    /*XL = 20px */
    case "xl":
      return "text-xl";
    /*2XL = 24px */
    case "2xl":
      return "text-2xl";
    /*3XL = 30px */
    case "3xl":
      return "text-3xl";
    /*4XL = 36px */
    case "4xl":
      return "text-4xl";
    /*5XL = 48px */
    case "5xl":
      return "text-5xl";
    /*6XL = 60px */
    case "6xl":
      return "text-6xl";
    /*7XL = 72px */
    case "7xl":
      return "text-7xl";
    /*8XL = 96px */
    case "8xl":
      return "text-8xl";
    /*9XL = 128px */
    case "9xl":
      return "text-9xl";
  }
};

const handleGetWeight = (weight: TextProps["weight"]) => {
  switch (weight) {
    case "thin":
      return "font-thin";
    case "extralight":
      return "font-extralight";
    case "light":
      return "font-light";
    case "normal":
      return "font-normal";
    case "medium":
      return "font-medium";
    case "semibold":
      return "font-semibold";
    case "bold":
      return "font-bold";
    case "extrabold":
      return "font-extrabold";
    case "black":
      return "font-black";
  }
};

const handleGetLetterSpacing = (letterSpacing: TextProps["letterSpacing"]) => {
  switch (letterSpacing) {
    case "primary":
      return "tracking-[2.56px]";
    case "secondary":
      return "tracking-[1.92px]";
    case "title":
      return "tracking-[8.32px]";
  }
};
