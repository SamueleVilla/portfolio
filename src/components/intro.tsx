'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center scroll-mt-[100rem] sm:mb-0"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src="https://samuele-portfolio-images.s3.eu-central-1.amazonaws.com/IMG_2169.JPG"
              alt="Samuiele portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            ></Image>
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            💻
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Samuele</span>. I'm an italian{' '}
        <span className="font-bold">Junior Developer</span> and{' '}
        <span className="font-bold">Computer Science student</span>. I enjoy
        building
        <span className="italic"> sites & apps</span>. My focuses are{' '}
        <span className="underline">NodeJS</span> and{' '}
        <span className="underline">Java</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 items-center justify-center text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
          outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me!{' '}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="https://samuele-portfolio-images.s3.eu-central-1.amazonaws.com/cv/cv-samuele-villa.pdf"
          download
          target="_blank"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full
          outline-none focus:scale-110 hover:scale-110 active:scale-105 transition
          borderBlack"
        >
          Download my CV{' '}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/samuele-villa-b5a67a267/"
          target="_blank"
          className=" bg-white p-4 text-blue-500 flex items-center gap-2 rounded-full
          focus:scale-[1.15] hover:scale-[1.15] active:scale-[1.15] transition
          borderBlack hover:text-blue-700"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/SamueleVilla"
          target="_blank"
          className=" bg-white p-4 text-gray-900 flex items-center gap-2 rounded-full
          focus:scale-[1.15] hover:scale-[1.15] active:scale-[1.15] transition
          borderBlack hover:text-gray-950"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
