import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { motion } from "@animated";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import { data } from "../../constants/constants";

const Acomplishments = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      gsap.to(".animated-box", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.2,
        stagger: 0.2,
      });
    }
  }, [inView]);

  return (
    <Section>
      <SectionTitle>Personal Accomplishments</SectionTitle>
      <Boxes ref={ref}>
        {data.map((card, index) => (
          <motion.div
            className="animated-box"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <BoxNum>{card.number}+</BoxNum>
            <BoxText>{card.text}</BoxText>
          </motion.div>
        ))}
      </Boxes>
    </Section>
  );
};

export default Acomplishments;
