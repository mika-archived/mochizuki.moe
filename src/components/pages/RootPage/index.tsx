import React from "react";

import { ExtractProps } from "../../../types/type-helpers";
import RootTemplate from "../../templates/RootTemplate";

const RootPage: React.FC = () => {
  const backgrounds = ["vrc_001.png", "vrc_002.png", "vrc_003.png"];
  const background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  const values: ExtractProps<typeof RootTemplate> = {
    background: `https://ik.imagekit.io/mikazuki/assets/${background}`,
    externals: [
      { animateTo: "#1DA1F2", href: "https://twitter.com/MikazukiFuyuno", prefix: "brands", icon: "twitter" },
      { animateTo: "#333333", href: "https://github.com/mika-f", prefix: "brands", icon: "github" },
      { animateTo: "#999999", href: "https://mikazuki.hatenablog.jp", prefix: "regular", icon: "blog" },
      { animateTo: "#5bbad5", href: "https://mochizuki.dev", prefix: "regular", icon: "browser" }
    ],
    icon: "https://ik.imagekit.io/mikazuki/assets/anna.png"
  };

  return <RootTemplate background={values.background} externals={values.externals} icon={values.icon} />;
};

export default RootPage;
