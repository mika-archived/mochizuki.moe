import React from "react";

import Image from "next/image";

const Jumbotron = () => (
  <div className="relative h-full">
    <Image src="/header.png" layout="fill" objectFit="cover" objectPosition="center top" />;
  </div>
);

export default Jumbotron;
