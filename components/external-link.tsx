import React from "react";

type Props = {
  href: string;
};

const ExternalLink: React.FC<Props> = ({ children, href }) => (
  <a href={href} className="text-lilac" target="_blank" rel="noreferrer noopener">
    {children}
  </a>
);

export default ExternalLink;
