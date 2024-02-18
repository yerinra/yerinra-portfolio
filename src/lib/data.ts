import React from "react";

import { RocketIcon } from "@radix-ui/react-icons";
import { CodeIcon } from "@radix-ui/react-icons";
import { BackpackIcon } from "@radix-ui/react-icons";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "제로베이스 프론트엔드 부트캠프 수료",
    description: "제로베이스 웹 프론트엔드 과정 20기를 수료하였습니다.",
    icon: React.createElement(RocketIcon),
    date: "2023.06 - 2024.03",
  },
] as const;

export const projectsData = [
  {
    title: "BookShelf",
    description:
      "태그 별로 책들을 분류할 수 있는 온라인 책장 사이트입니다. 개인 프로젝트로 진행하였습니다.",
    tags: ["React", "TypsScript", "Tailwind", "Firebase"],
    imageUrl:
      "https://images.unsplash.com/photo-1708236361901-4b4e584a6baa?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Github",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Recoil",
  "Framer Motion",
  "Firebase",
] as const;
