import React from "react";

type Prefix = "brands" | "duotone" | "light" | "regular" | "solid";

type Props = {
  className?: string;
  fixed?: boolean;
  icon: string;
  prefix: Prefix;
};

const FontAwesome: React.FC<Props> = ({ className, fixed, icon, prefix }) => {
  const prefixToClass = { brands: "fab", duotone: "fad", light: "fal", regular: "far", solid: "fas" };
  const cls = [prefixToClass[prefix], `fa-${icon}`];
  if (className) cls.push(className);
  if (fixed) cls.push("fa-fw");

  return <i className={cls.join(" ")} />;
};

export default FontAwesome;
