import * as React from "react";
import {Headings} from "@arzt/core";
import { Text, TextProps } from "@arzt/core/Text";

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
