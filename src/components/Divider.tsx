import React from "react";
import { cn } from "../helpers";

type DividerProps = JSX.IntrinsicElements["div"] & {
  height?: string;
};

export const Divider = ({ height = "h-6" }: DividerProps) => {
  return <div className={cn("w-[1px] bg-black/10", height)} />;
};
