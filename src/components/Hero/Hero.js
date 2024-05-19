import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection, SectionImage } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! <br />I am Agnes-Cybil Atsuah
        </SectionTitle>
        <SectionImage>
          <img src="/images/profile.jpeg" />
        </SectionImage>
        <SectionText>
          I am a passionate frontend developer dedicated to creating
          engaging user experiences with clean and intuitive interfaces.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
