import React, { FC } from "react";

interface Props {
  type: string;
  // All other props
  [x: string]: any;
}

const Svg: FC<Props> = ({ type, ...props }) => {
  const TheSvgFile = require(`./${type}`).default;

  return <TheSvgFile {...props} />;
};

export default Svg;
