import React from "react";
import { DiFirebase, DiReact, DiScrum } from "react-icons/di";
import { RxFigmaLogo } from "react-icons/rx";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle> Technologies</SectionTitle>
    <SectionText>
      As a student at Hyper Island, I've gained proficiency in programming
      languages while developing essential soft skills in communication,
      collaboration, user-centered design, adaptability, problem-solving, and
      human-centered thinking.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle> Front-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML <br />
            CSS <br />
            Javascript <br />
            React <br />
            Three.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js <br />
            MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <RxFigmaLogo size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Figma <br />
            Miro
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiScrum size="3rem" />
        <ListContainer>
          <ListTitle>Others</ListTitle>
          <ListParagraph>
            Scrum <br />
            Notion <br />
            Slack <br />
            Soft Skills
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
