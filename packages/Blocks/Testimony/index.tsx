import * as React from "react";
import styled from "styled-components";

import { Text, Image } from "@arzt/core";

export type TestimonyProps = {
  heading: string;
  subHeading?: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
};

const TestimonyContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  border-radius: 10px;
  user-select: none;
  padding: ${(props) => props.theme.spacing.sm};
  border: 1px solid ${(props) => props.theme.colors.info};
  div {
    display: flex;
    flex-direction: column;
    h5 {
      margin-bottom: ${(props) => props.theme.spacing.sm};
      font-size: ${(props) => props.theme.fontSize.md};
    }
    h6 {
      margin-bottom: ${(props) => props.theme.spacing.sm};
      font-size: ${(props) => props.theme.fontSize.sm};
    }
  }
`;

export const Testimony: React.FC<TestimonyProps> = ({
  heading,
  subHeading,
  imageSrc,
  imageAlt,
  description,
}) => (
  <TestimonyContainer>
    <Image src={imageSrc} alt={imageAlt} width={50} rounded margin="md" />
    <div>
      <Text as="h5" variant="primary">
        {heading}
      </Text>
      {subHeading ? (
        <Text as="h6" variant="secondary">
          {subHeading}
        </Text>
      ) : null}
      <Text as="p" size="sm">
        {description}
      </Text>
    </div>
  </TestimonyContainer>
);
