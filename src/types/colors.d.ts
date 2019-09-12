declare module "colors.css" {
  type ColorTypes =
    | "aqua"
    | "blue"
    | "lime"
    | "navy"
    | "teal"
    | "olive"
    | "green"
    | "red"
    | "maroon"
    | "orange"
    | "purple"
    | "yellow"
    | "fuchsia"
    | "gray"
    | "white"
    | "black"
    | "silver";

  type Colors = { [T in ColorTypes]: string };
  const colors: Colors;

  export default colors;
}
