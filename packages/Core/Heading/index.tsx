import * as React from "react";
import { Headings, Text, TextProps } from "@arzt/core";

export type HeadingProps = Omit<TextProps, "size" | "weight"> & {as: Headings };

export const Heading: React.FC<HeadingProps> = ({
  as,
  variant,
  margin,
  padding,
  children,
}) => {
  return (
    <Text as={as} variant={variant} margin={margin} padding={padding}>
      {children}
    </Text>
  );
};
