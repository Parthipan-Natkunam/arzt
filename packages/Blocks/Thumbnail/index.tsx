import * as React from "react";
import styled from "styled-components";

import { Text } from "@arzt/core/Text";
import { Image } from "@arzt/core/Image";

export type ThumbnailProps = {
  heading?: string;
  subHeading?: string;
  imageSrc: string;
  imageAlt: string;
  description?: string;
};

const ThumbnailContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  padding: ${(props) => props.theme.spacing.sm} ;
  border: 1px solid ${(props) => props.theme.colors.info};
  div {
    display: flex;
    flex-direction: column;
    h5 {
      margin-bottom: ${(props) => props.theme.spacing.sm};
      font-size: ${(props) => props.theme.fontSize.sm};
    }
    h6 {
      margin-bottom: ${(props) => props.theme.spacing.sm};
      font-size: ${(props) => props.theme.fontSize.xs};
    }
  }
`;

export const Thumbnail: React.FC<ThumbnailProps> = ({
  heading,
  subHeading,
  imageSrc,
  imageAlt,
  description,
}) => (
  <ThumbnailContainer>
    <Image src={imageSrc} alt={imageAlt} width={50} rounded margin="md"/>
    <div>
      <Text as="h5" variant="primary">
        {heading}
      </Text>
      <Text as="h6" variant="secondary">
        {subHeading}
      </Text>
      <Text as="p" variant="tertiary" size="xs">
        {description}
      </Text>
    </div>
  </ThumbnailContainer>
);
