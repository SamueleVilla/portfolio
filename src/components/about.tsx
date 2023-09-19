'use client';

import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After I finished the secondary school, I enrolled in a coding bootcamp
        and meanwhile begun a university course in computer science in Milano. I
        always pursued my coding passion. My favorite part of programming are
        the problem-solving challenges. I really enjoy the feeling of the final
        solution of the challenge. My core stack is mostly backend technologies
        as Java and Node but recently I started some front-end projects with
        React (Next.js) which I liked to learn. I am also familiar with
        Typescript and Relational DBMS. I am always looking for different kind
        of projects and technologies. Currently I can provide IT consultancy for
        small projects and tutoring in computer science and mathematics.
      </p>
      <p>
        When I am not coding, I enjoy playing video games, watching movies,
        training at the gym, and traveling. I enjoy even documenting on new
        things as well. I am currently learning about History and Politics.
      </p>
    </motion.section>
  );
}
