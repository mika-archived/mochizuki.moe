import React, { useEffect, useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";

import Logo from "./logo";
import Separator from "./separator";

library.add(faBars);

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onRouteChangeCompleted = () => {
      setIsVisible(false);
    };

    router.events.on("routeChangeComplete", onRouteChangeCompleted);

    return () => {
      router.events.on("routeChangeComplete", onRouteChangeCompleted);
    };
  });

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-10 w-full h-36 bg-wild-sand border-b border-gray-500 flex content-center items-center">
        <div className="flex-initial px-8 py-2">
          <Logo height={117} width={256} fixed />
        </div>
        <div className="hidden lg:flex flex-auto flex-row-reverse space-x-8 space-x-reverse pr-16">
          <div className="text-3xl uppercase">
            <Link href="/contact">Contact</Link>
          </div>
          <Separator />
          <div className="text-3xl uppercase">
            <Link href="/works">Works</Link>
          </div>
          <Separator />
          <div className="text-3xl uppercase">
            <Link href="/profile">Profile</Link>
          </div>
          <Separator />
          <div className="text-3xl uppercase">
            <Link href="/">Home</Link>
          </div>
        </div>
        <div className="flex lg:hidden flex-auto flex-row-reverse space-x-8 space-x-reverse pr-16">
          <FontAwesomeIcon className="text-2xl" icon={["far", "bars"]} onClick={toggleVisible} />
        </div>
      </div>
      {isVisible ? (
        <ul className="lg:hidden fixed top-36 left-0 right-0 z-10 bg-wild-sand">
          <li className="block px-8 py-2 border-b border-gray-500 uppercase">
            <Link href="/">HOME</Link>
          </li>
          <li className="block px-8 py-2 border-b border-gray-500 uppercase">
            <Link href="/profile">Profile</Link>
          </li>
          <li className="block px-8 py-2 border-b border-gray-500 uppercase">
            <Link href="/works">Works</Link>
          </li>
          <li className="block px-8 py-2 border-b border-gray-500 uppercase">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
