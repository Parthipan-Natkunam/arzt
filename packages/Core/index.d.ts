declare module "@arzt/core" {
  export type Space = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  export type Size =  "xs" | "sm" | "md" | "lg";
  export type Weight = "light" | "normal" | "medium" | "bold";
  export type Variant = "primary" | "secondary" | "tertiary" | "success" | "danger" | "warning" | "info" ;
  export type Headings = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  export type TextTags = Headings | "p" | "span";
  export type Theme = {
    spacing: {[key in Space]: string},
    fontSize: {[key in Size]: string},
    fontWeight: {[key in Weight]: number},
    colors: {[key in Variant]: string},
    default: {
      textColor: string,
      textColorInverted: string,
      backgroundColor: string,
      fontSize: string,
    },
    headings:{
      [key in Headings]: {
        fontSize: string,
      }
    }
  }
}
