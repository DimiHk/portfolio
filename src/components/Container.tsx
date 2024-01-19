import React from "react";
import { cn } from "../helpers";

type ContainerProps = JSX.IntrinsicElements["div"] & {
  children: React.ReactNode;
  display?: "flex" | "grid";
  direction?: "row" | "column";
  align?: "center" | "start" | "end" | "between" | "around";
  justify?: "center" | "start" | "end" | "between" | "around";
  gap?:
    | "xs"
    | "2xs"
    | "sm"
    | "2sm"
    | "md"
    | "2md"
    | "lg"
    | "2lg"
    | "xl"
    | "2xl"
    | "none";
  grow?: boolean;
  className?: string;
};

export const Container = ({
  children,
  className,
  display = "flex",
  direction = "row",
  align = "center",
  justify = "center",
  gap = "md",
  grow = false,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={cn(
        handleGetDisplay(display),
        handleGetDirection(direction),
        handleGetAlign(align),
        handleGetJustify(justify),
        handleGetGap(gap),
        handleGetGrow(grow),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const handleGetDisplay = (display: ContainerProps["display"]) => {
  switch (display) {
    case "flex":
      return "flex";
    case "grid":
      return "grid";
  }
};

const handleGetDirection = (direction: ContainerProps["direction"]) => {
  switch (direction) {
    case "row":
      return "flex-row";
    case "column":
      return "flex-col";
  }
};

const handleGetAlign = (align: ContainerProps["align"]) => {
  switch (align) {
    case "center":
      return "items-center";
    case "start":
      return "items-start";
    case "end":
      return "items-end";
    case "between":
      return "items-between";
    case "around":
      return "items-around";
  }
};

const handleGetJustify = (justify: ContainerProps["justify"]) => {
  switch (justify) {
    case "center":
      return "justify-center";
    case "start":
      return "justify-start";
    case "end":
      return "justify-end";
    case "between":
      return "justify-between";
    case "around":
      return "justify-around";
  }
};

const handleGetGap = (gap: ContainerProps["gap"]) => {
  switch (gap) {
    case "xs":
      return "gap-1";
    case "2xs":
      return "gap-1.5";
    case "sm":
      return "gap-2";
    case "2sm":
      return "gap-2.5";
    case "md":
      return "gap-3";
    case "2md":
      return "gap-3.5";
    case "lg":
      return "gap-4";
    case "2lg":
      return "gap-4.5";
    case "xl":
      return "gap-5";
    case "2xl":
      return "gap-5.5";
    case "none":
      return "gap-0";
  }
};

const handleGetGrow = (grow: ContainerProps["grow"]) => {
  switch (grow) {
    case true:
      return "grow";
    case false:
      return "grow-0";
  }
};
