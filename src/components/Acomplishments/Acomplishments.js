import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxText } from "./AcomplishmentsStyles";

const data = [
  { text: "Hyper Island Frontend Developer Diploma" },
  { text: "Hyper Island Scrum Master" },
  { text: "Hyper Island Process and Design Facilitation Certificate" },
  { text: "SheCodes Plus Certificate" },
  { text: "Volvo Sprint Certificate" },
  { text: "LinkedIn's SEO Foundations Certificate" },
  { text: "Microsoft Azure Fundamentals AZ-900 - July, 2024" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
