import colors from "colors.css";
import styled from "styled-components";

type Props = {
  size?: string;
};

const CircularIcon = styled.img<Props>`
  width: ${props => props.size || "100%"};
  height: ${props => props.size || "100%"};
  border: 1px solid ${colors.silver};
  border-radius: 9999px;
`;

export default CircularIcon;
