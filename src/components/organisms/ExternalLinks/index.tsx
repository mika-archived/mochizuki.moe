import React from "react";
import styled from "styled-components";

import { ExtractProps, ReactClassName } from "../../../types/type-helpers";
import IconLink from "../../molecules/IconLink";

const HorizontalLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: space-between;
  justify-content: space-between;
`;

const FontSize = styled.span<{ size: number }>`
  font-size: ${props => props.size || 32}px;
`;

type Props = {
  externals: Omit<ExtractProps<typeof IconLink>, "className">[];
  iconSize: number;
} & ReactClassName;

const ExternalLinks: React.FC<Props> = ({ className, externals, iconSize }) => {
  return (
    <HorizontalLayout className={className}>
      {externals.map(w => (
        <FontSize key={w.href} size={iconSize}>
          <IconLink animateTo={w.animateTo} icon={w.icon} fixed href={w.href} prefix={w.prefix} />
        </FontSize>
      ))}
    </HorizontalLayout>
  );
};

export default ExternalLinks;
