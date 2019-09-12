import React from "react";
import styled from "styled-components";

import { ExtractProps, ReactClassName } from "../../../types/type-helpers";
import Background from "../../atoms/Background";

type Props = ExtractProps<typeof Background> & ReactClassName;

const BlurredBackground = styled(Background)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: -4px;
  filter: blur(4px);
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const BlurBackground: React.FC<Props> = ({ children, className, src }) => {
  return (
    <Wrapper className={className}>
      <BlurredBackground src={src} />
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default BlurBackground;
