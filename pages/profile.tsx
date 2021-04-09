import React from "react";

import Head from "next/head";
import Image from "next/image";

import Container from "../components/container";
import Section from "../components/section";
import SectionHeader from "../components/section-header";

const ProfilePage = () => (
  <div>
    <Head>
      <title>Profile | Natsuneko Laboratory</title>
    </Head>
    <Container>
      <h2 className="text-6xl mt-16 mb-16">
        日々のちょっとした「欲しいな」を
        <br />
        アイデアとコードの力で「便利」に！
      </h2>
      <Section>
        <SectionHeader title="about me" />

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-3">
          <div className="col-span-2 mt-8 lg:-mt-0">
            <p>夏猫 (Natsuneko) と言います。</p>
            <p>
              普段は、都内で AppStore や Google Play Store
              にて配信しているスマートフォン向けソーシャルゲームアプリケーションの開発、運営を行う IT
              エンジニアをしています。
            </p>
            <p className="mt-2">
              プログラミングで日常のちょっとした「欲しい」や「不便」を解決するのを得意としており、業務においてもディレクターや他のエンジニアの業務量削減などを行っています。
            </p>
            <p>
              作成したものは、公開できるものは GitHub にて OSS (Open Source Software) として公開したり、 BOOTH
              にて無償もしくは有償で配布を行ったりしています。
            </p>
            <p>
              最近はロゴや Web サイトのデザインを行ったり、 Blender などのツールを使って、 VR
              アバター向けの小物やアクセサリー、お洋服などの 3D モデルを、デザインから Unity
              でのセットアップまでを行ったりもしています。
            </p>
          </div>
          <div className="text-center mt-8">
            <Image className="rounded-full" src="/icon.png" height={256} width={256} alt="icon" />
          </div>
        </div>
      </Section>
      <Section>
        <SectionHeader title="skills" />

        <p>私夏猫は、下記の事などに対応することが可能です。</p>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="mt-4">
            <p>ソフトウェア開発</p>
            <ul className="list-disc list-inside">
              <li>Windows 向けのデスクトップアプリケーションの開発 (C# および WPF)</li>
              <li>クロスプラットフォームなコマンドラインアプリケーションの開発 (Rust)</li>
              <li>Unity 向けエディター拡張機能の開発 (C#)</li>
              <li>Visual Studio 向け拡張機能の開発 (C#)</li>
              <li>Visual Studio Code 向け拡張機能の開発 (TypeScript)</li>
              <li>Google Chrome 向けブラウザー拡張機能の開発 (TypeScript)</li>
              <li>サーバーを必要としない Web アプリケーションの開発・運用 (TypeScript, React, Vue)</li>
              <li>AWS を用いたサーバーサイドでの処理を要する Web アプリケーションの開発・運用 (Ruby, Rust, Perl)</li>
            </ul>
          </div>
          <div className="mt-4">
            <p>3D</p>
            <ul className="list-disc list-inside">
              <li>Blender での 3D モデル (小物、アクセサリーなど) の制作</li>
              <li>リギング、スキニング</li>
              <li>簡易的なテクスチャー制作</li>
              <li>Unity で扱えるデータ化</li>
              <li>シェーダー開発</li>
              <li>シェーダーセットアップ</li>
              <li>揺れ物セットアップ</li>
            </ul>
          </div>
          <div className="mt-4">
            <p>2D</p>
            <ul className="list-disc list-inside">
              <li>簡易的な Web デザイン</li>
              <li>簡易的なロゴデザイン</li>
              <li>簡易的なアバター向けの小物などのデザイン</li>
            </ul>
          </div>
        </div>
      </Section>
      <Section>
        <SectionHeader title="software" />
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="mt-4">
            <p>開発ツール</p>
            <ul className="list-disc list-inside">
              <li>Microsoft Visual Studio 2019</li>
              <li>Visual Studio Code</li>
              <li>JetBrains dotUltimate</li>
              <li>Unity 2018, 2019, 2020</li>
              <li>Visual Studio Code 向け拡張機能の開発 (TypeScript)</li>
              <li>Google Chrome</li>
            </ul>
          </div>
          <div className="mt-4">
            <p>3D</p>
            <ul className="list-disc list-inside">
              <li>Blender</li>
              <li>Unity 2018, 2019, 2020</li>
            </ul>
          </div>
          <div className="mt-4">
            <p>2D</p>
            <ul className="list-disc list-inside">
              <li>Adobe Illustrator</li>
              <li>Adobe XD</li>
              <li>CLIP STUDIO PAINT</li>
              <li>Substance Painter</li>
            </ul>
          </div>
        </div>
      </Section>
    </Container>
  </div>
);

export default ProfilePage;
