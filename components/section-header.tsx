import React from "react";

type Props = {
  title: string;
};

const SectionHeader = ({ title }: Props) => (
  <h2 className="first-letter:text-lilac text-5xl border-b-2 pt-4 pb-2 mb-4 border-lilac">{title}</h2>
);

export default SectionHeader;
