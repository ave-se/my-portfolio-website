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
      As a frontend developer graduate of Hyper Island, I've gained proficiency in programming
      languages while developing essential soft skills in communication,
      collaboration, user-centered design, adaptability, problem-solving, and
      human-centered thinking.
  During my 6-month internship at Bannerboy AB, I contributed to building user interfaces, managing back-end tasks, and creating interactive 3D graphics. This experience enhanced my technical skills and design proficiency. With valuable mentorship, I overcame performance and project management challenges, driving my passion for creative and immersive web development.
     
    </SectionText>
    <List>
      <ListItem>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <DiReact size="3rem" />
        </a>
        <ListContainer>
          <ListTitle> Front-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML3 <br />
            CSS <br />
            SASS/LESS <br />
            Javascript <br />
            React
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
            Express.js <br />
            MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <RxFigmaLogo size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Adobe Photoshop <br />
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
