import React, { FC } from "react";
import { SpacerProps } from "./types";

const Spacer: FC<SpacerProps> = ({ block }) => {
  return <div style={{ width: "100%", height: `${block.height}px` }} />;
};

export default Spacer;
