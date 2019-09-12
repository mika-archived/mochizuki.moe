import React from "react";

import { ExtractProps } from "../../../types/type-helpers";
import ExternalLink from "../../atoms/ExternalLink";
import FontAwesome from "../../atoms/FontAwesome";

type Props = ExtractProps<typeof ExternalLink> & ExtractProps<typeof FontAwesome>;

const IconLink: React.FC<Props> = ({ animateTo, className, href, fixed, icon, prefix }) => {
  return (
    <ExternalLink animateTo={animateTo} href={href} className={className}>
      <FontAwesome icon={icon} fixed={fixed} prefix={prefix} />
    </ExternalLink>
  );
};

export default IconLink;
