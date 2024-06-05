import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <br />
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
            <div className="project-links-container">
                {Array.isArray(visit) ? visit.map((item, index) => {
                  if (typeof item === 'string') {
                    // Old format: `visit` is an array of strings
                    return (
                      <ExternalLinks key={index} href={item} target="_blank">
                       {title === "Internship Projects" ? "Visit " + (index + 1) : "Visit"}
                      </ExternalLinks>
                    );
                  } else if (typeof item === 'object') {
                    // New format: `visit` is an array of objects
                    return (
                      <ExternalLinks noWrap key={index} href={item.url} target="_blank">
                        {title === "Internship Training Projects" ? index + 1 : "Visit"}
                      </ExternalLinks>
                    );
                  }
                }) : console.error('visit is not an array')}
                {source && source !== "" && (
                    <ExternalLinks href={source} target="_blank">
                        Code
                    </ExternalLinks>
                )}
            </div>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;