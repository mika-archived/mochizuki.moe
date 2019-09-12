// Atom?
import React from "react";
import colors from "colors.css";
import styled from "styled-components";

const Anchor = styled.a<{ animateTo?: string }>`
  color: ${colors.gray};
  transition: color 0.1s linear;

  &:hover {
    color: ${props => props.animateTo || colors.gray};
  }
`;

type Props = {
  animateTo?: string;
  className?: string;
  href: string;
};

const ExternalLink: React.FC<Props> = ({ animateTo, children, className, href }) => {
  return (
    <Anchor animateTo={animateTo} href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </Anchor>
  );
};

export default ExternalLink;
