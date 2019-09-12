import styled from "styled-components";

type Props = {
  src: string;
};

const Background = styled.div<Props>`
  background: center / cover no-repeat url(${props => props.src});
`;

export default Background;
