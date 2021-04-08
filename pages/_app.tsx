// eslint-disable-next-line import/no-extraneous-dependencies
import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";

import React from "react";
import Head from "next/head";

import Copyright from "../components/copyright";
import Header from "../components/header";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Head>
    <div className="bg-wild-sand min-h-screen flex flex-col">
      <Header />
      <div className="mt-36 mb-4 h-full flex-grow">
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </div>
      <Copyright />
    </div>
  </>
);

export default App;
