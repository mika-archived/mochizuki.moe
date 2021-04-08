import React from "react";

import Image from "next/image";

type Props = {
  height: number;
  width: number;
  fixed?: boolean;
};

const Logo = ({ height, width, fixed }: Props) => (
  <div className="relative">
    <Image src="/logo.png" height={height} width={width} layout={fixed ? "fixed" : "intrinsic"} loading="eager" />
  </div>
);

export default Logo;
