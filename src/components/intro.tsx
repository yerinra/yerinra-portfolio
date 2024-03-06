"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  DownloadIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  Pencil1Icon,
  FontBoldIcon,
} from "@radix-ui/react-icons";

import Link from "next/link";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      id="home"
      ref={ref}
      className="mb-20 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex justify-center items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/IMG_0036.jpeg"
              alt="profile image"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 object-cover rounded-full border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute text-3xl bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        안녕하세요! 사용자의 편안한 웹경험을 고민하는 프론트엔드 개발자
        <span className="font-bold"> 라예린</span>입니다. 웹을 통해 사용자와
        소통하는 순간을 기대하고 있어요.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4 text-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{" "}
          <ArrowRightIcon className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="#"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition borerBlack dark:bg-white/10 dark:text-white/60"
          download
        >
          이력서 다운로드{" "}
          <DownloadIcon className="opacity-70 group-hover:translate-y-1 transition focus:scale-110 hover:scale-110  active:scale-105 borerBlack" />
        </a>
        <a
          href="https://github.com/yerinra"
          target="_blank"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-[1.15] hover:text-gray-950  active:scale-[1.15] transition borerBlack dark:bg-white/10 dark:text-white/60"
          title="LinkedIn"
        >
          <LinkedInLogoIcon />
        </a>
        <a
          href="https://github.com/yerinra"
          target="_blank"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-[1.15] hover:text-gray-950  active:scale-[1.15] transition borerBlack dark:bg-white/10 dark:text-white/60"
          title="Github"
        >
          <GitHubLogoIcon />
        </a>
        <a
          href="https://yalef.tistory.com/"
          target="_blank"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-[1.15] hover:text-gray-950  active:scale-[1.15] transition borerBlack dark:bg-white/10 dark:text-white/60"
          title="Tistory Blog"
        >
          <Pencil1Icon />
        </a>
      </motion.div>
    </section>
  );
}
