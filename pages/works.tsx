import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import ArticleHeader from "../components/article-header";
import Container from "../components/container";
import ExternalLink from "../components/external-link";
import Section from "../components/section";
import SectionHeader from "../components/section-header";

library.add(faGithubAlt);

const WorksPage = () => (
  <div>
    <Container>
      <Section>
        <SectionHeader title="works" />

        <div>
          <ArticleHeader title="UdonRabbit Analyzer" />

          <div className="mt-4 grid grid-cols-1 lg:grid-cols-3">
            <div className="col-span-2">
              <p>
                VR SNS である VRChat で使うことが出来るプログラミング言語 UdonSharp (U#) を快適に書くために作られた、
                .NET コンパイラー拡張機能です。
              </p>
              <p>
                一般的な C# とは異なる部分が多く、コンパイル時になって躓くことが多い U#
                のエラーを、エディターレベルで事前にエラー通知を行うことで、 U#
                での開発スピードを加速させることが出来ます。
              </p>
              <p>
                Visual Studio や Visual Studio Code、 Rider などの一般的な C#
                エディターであれば、使用することが出来ます。
              </p>

              <p className="text-4xl mt-4">
                <ExternalLink href="https://github.com/mika-f/UdonRabbit.Analyzer">
                  <FontAwesomeIcon icon={["fab", "github-alt"]} />
                </ExternalLink>
              </p>
            </div>
            <div className="text-center mt-4">
              <Image className="rounded" src="/analyzer.png" height={282} width={250} />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <ArticleHeader title="Sakura Alice Hairband" />

          <div className="mt-4 grid grid-cols-1 lg:grid-cols-3">
            <div className="col-span-2">
              <p>VR アバター向けに作ったヘアアクセサリーです。</p>
              <p>
                頭に大きなリボンのようなものを載せたいと思い、デザインからモデリング、 Unity
                でのセットアップまでを行いました。
              </p>
            </div>
            <div className="text-center mt-4">
              <Image className="rounded" src="/hairband.png" height={152} width={250} />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <ArticleHeader title="Monochrome Particle Ring" />

          <div className="mt-4 grid grid-cols-1 lg:grid-cols-3">
            <div className="col-span-2">
              <p>VR アバター向けに作った、 Unity のパーティクルシステムで作られたリング状のアクセサリーです。</p>
              <p>テクスチャーやアニメーションは一切使わず、パーティクルシステムのパラメータのみで表現しています。</p>
            </div>
            <div className="text-center mt-4">
              <Image className="rounded" src="/monochrome-ring.png" height={164} width={250} />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <ArticleHeader title="UdonRabbit Object Fitter" />

          <div className="mt-4 grid grid-cols-1 lg:grid-cols-3">
            <div className="col-span-2">
              <p>
                VRChat 上でのアバターのお着替えを行えるようにするためのワールド (VRChat 上の世界) 設置型のギミックです。
              </p>
              <p>
                このワールドギミックを使うことで、衣装を販売している人たちが、販売前に試着会などを行うことが可能になります。
              </p>

              <p className="text-4xl mt-4">
                <ExternalLink href="https://natsuneko.booth.pm/items/2540555">
                  <Image src="/booth.png" height={42} width={120} />
                </ExternalLink>
              </p>
            </div>
            <div className="text-center mt-4">
              <Image className="rounded" src="/object-fitter.png" height={191} width={250} />
            </div>
          </div>
        </div>
      </Section>
    </Container>
  </div>
);

export default WorksPage;
