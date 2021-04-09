import React from "react";

import type { IconLookup } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  prefix: IconLookup["prefix"];
  name: IconLookup["iconName"];
};

const FontAwesome: React.FC<Props> = ({ prefix, name }) => <FontAwesomeIcon icon={[prefix, name]} fixedWidth />;

export default FontAwesome;
