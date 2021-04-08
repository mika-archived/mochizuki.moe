import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Container from "../components/container";
import Section from "../components/section";
import SectionHeader from "../components/section-header";

library.add(faDiscord, faEnvelope);

const ContactPage = () => (
  <div>
    <Container>
      <Section>
        <SectionHeader title="contact" />

        <div>
          <p>
            制作についてや、販売商品のお問合せについては、下記メールアドレスもしくは Discord
            のダイレクトメッセージまでご連絡をお願いします。
          </p>
          <p>なお、メールについては、下記のアドレス以外から返信を行う可能性があります。あらかじめご了承ください。</p>
          <p>また、制作お問い合わせの場合、本業との兼ね合いの都合上、お時間を頂く可能性があります。</p>
        </div>

        <div className="mt-8 text-lg">
          <p>
            <FontAwesomeIcon icon={["fab", "discord"]} /> natsuneko#7225
          </p>
          <p>
            <FontAwesomeIcon icon={["far", "envelope"]} /> me@mochizuki.moe
          </p>
        </div>
      </Section>
    </Container>
  </div>
);

export default ContactPage;
