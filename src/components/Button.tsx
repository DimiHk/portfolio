import React from "react";
import { cn } from "../helpers";
import { Text, TextProps } from "./Text";

type ButtonProps = JSX.IntrinsicElements["button"] & {
  text: string;
  variant?: "solid" | "outline";
  color?: "primary" | "secondary";
  borderRadius?: "sm" | "md" | "lg" | "xl" | "none";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  textColor?: TextProps["color"];
  href?: string;
};

export const Button = ({
  text,
  variant = "outline",
  color = "primary",
  borderRadius = "md",
  textColor = "primary",
  iconLeft,
  iconRight,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "py-[10px] px-[12px] xl:py-[12px] xl:px-[16px] text-xs xl:text-base",
        handleGetButtonStyle(variant),
        handleGetColor(color),
        handleGetBorderRadius(borderRadius),
        className
      )}
      {...props}
    >
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      <span style={{ lineHeight: "normal" }}>{text}</span>
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
};

const handleGetButtonStyle = (variant: ButtonProps["variant"]) => {
  switch (variant) {
    case "solid":
      return "text-white hover:text-[#1C1917] tracking-[2.56px] hover:bg-white hover:transition-all hover:duration-500 hover:ease-in-out border";
    case "outline":
      return "text-[#1C1917] hover:text-white tracking-[2.56px] hover:bg-black border border-[#1C1917] hover:transition-all hover:duration-500 hover:ease-in-out";
  }
};

const handleGetColor = (color: ButtonProps["color"]) => {
  switch (color) {
    case "primary":
      return "bg-white";
    case "secondary":
      return "bg-[#1C1917]";
  }
};

const handleGetBorderRadius = (borderRadius: ButtonProps["borderRadius"]) => {
  switch (borderRadius) {
    case "sm":
      return "rounded-sm";
    case "md":
      return "rounded-md";
    case "lg":
      return "rounded-lg";
    case "xl":
      return "rounded-xl";
    case "none":
      return "rounded-none";
  }
};
