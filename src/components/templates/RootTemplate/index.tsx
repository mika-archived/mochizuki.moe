import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ExtractProps } from "../../../types/type-helpers";
import CircularIcon from "../../atoms/CircularIcon";
import Heading from "../../atoms/Heading";
import BlurBackground from "../../molecules/BlurBackground";
import ExternalLinks from "../../organisms/ExternalLinks";

const BackgroundCover = styled(BlurBackground)`
  height: 100vh;
`;

const Centering = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: rgba(17, 17, 17, 0.25);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

const Links = styled(ExternalLinks)`
  align-self: stretch;
`;

type Props = {
  background: string;
  icon: string;
} & Omit<ExtractProps<typeof ExternalLinks>, "iconSize">;

const RootTemplate: React.FC<Props> = ({ background, externals, icon }) => {
  return (
    <BackgroundCover src={background}>
      <Centering>
        <Wrapper>
          <CircularIcon size="256px" src={icon} />
          <Heading>Fuyuno Mikazuki</Heading>
          <Links externals={externals} iconSize={36} />
        </Wrapper>
      </Centering>
    </BackgroundCover>
  );
};

RootTemplate.propTypes = {
  background: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default RootTemplate;
