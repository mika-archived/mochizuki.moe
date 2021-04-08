import React from "react";

type Props = {
  title: string;
};

const ArticleHeader = ({ title }: Props) => (
  <h2 className="text-4xl border-b-2 border-dotted pt-4 pb-2 mb-4 border-lilac">{title}</h2>
);

export default ArticleHeader;
