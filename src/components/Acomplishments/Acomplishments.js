import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import { data } from "../../constants/constants";

const AnimatedBox = motion(Box);

const Acomplishments = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Section>
      <SectionTitle>Personal Accomplishments</SectionTitle>
      <Boxes ref={ref}>
        {data.map((card, index) => (
          <AnimatedBox
            key={index}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
          >
            <BoxNum>{card.number}+</BoxNum>
            <BoxText>{card.text}</BoxText>
          </AnimatedBox>
        ))}
      </Boxes>
    </Section>
  );
};

export default Acomplishments;
