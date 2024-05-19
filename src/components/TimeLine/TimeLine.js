import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Hey there! I've had an exciting journey so far. I've worn many hats,
        from managerial positions in various companies to being an exhibited
        photographer, a model, art curator and writer. In 2021, I made the leap
        from Nigeria to Sweden. It was during this transition that I stumbled
        upon computer programming and fell head over heels for it after taking
        an introductory online course by SheCodes. The magic of coding captured
        my heart and sparked a new passion within me. Driven by my curiosity, I
        joined Hyper Island's Frontend Developer course. The immersive learning
        experience at Hyper Island has been incredible, and I have completed my internship as a Creative Developer at <a href="https://www.bannerboy.com/" target="_blank" rel="noopener noreferrer">Bannerboy AB</a> where I learned invaluable skills. When I'm not
        coding, you can find me lifting twice my bodyweight at the gym, gliding
        on roller skates, or traveling. {" "}
      </SectionText>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
