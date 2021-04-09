import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithubAlt, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Head from "next/head";

import Container from "../components/container";
import ExternalLink from "../components/external-link";
import FontAwesome from "../components/font-awesome";
import Jumbotron from "../components/jumbotron";
import Logo from "../components/logo";
import Section from "../components/section";
import SectionHeader from "../components/section-header";

library.add(faGithubAlt, faTwitter);

const IndexPage = () => (
  <div>
    <Head>
      <title>Home | Natsuneko Laboratory</title>
    </Head>
    <div className="w-full relative" style={{ height: "724px" }}>
      <Jumbotron />
      <div className="absolute left-2/4 top-1/3">
        <Logo height={260} width={568} />
      </div>
    </div>
    <Container>
      <Section>
        <SectionHeader title="about" />
        <p>都内にてソーシャルゲームの開発・運営を行っている、 Web 系の IT エンジニアです。</p>
        <p>
          日々の業務では、仕事中に発生している繰り返し作業の自動化を行ったり、レガシーを置き換えていくなど、日々の不便の解決や、「あったらいいな」といった気持ちを実現することを行っています。
        </p>
        <p>
          これまでの経験と、幅広い知識を活用して、あなたの不便や、こういうものがあったらいいな、といったものを解決します！
        </p>
        <p className="mt-4">
          Windows アプリケーションから Unity 用のツール開発、 3D モデルまで、なつねこらぼらとりーにお任せください！
        </p>
      </Section>
      <Section>
        <SectionHeader title="links" />
        <ul className="text-2xl">
          <li>
            <div className="h-8 inline-block">
              <FontAwesome prefix="fab" name="github-alt" /> GitHub :{" "}
            </div>
            <ExternalLink href="https://github.com/mika-f">@mika-f</ExternalLink>
          </li>
          <li>
            <div className="h-8 inline-block">
              <FontAwesome prefix="fab" name="twitter" /> Twitter :{" "}
            </div>
            <ExternalLink href="https://twitter.com/6jz">@6jz</ExternalLink>
          </li>
        </ul>
      </Section>
    </Container>
  </div>
);

export default IndexPage;
