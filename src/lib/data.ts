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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "bookshelf",
    description:
      "책 읽는 사람들을 위한, 온라인 책장 사이트입니다. 읽은 책에 해시태그를 달아서 분류하고 모든 책을 한 눈에 볼 수 있습니다.",
    tags: ["React", "TypeScript", "Tailwind", "Firebase"],
    siteUrl: "https://bookshelf-bay.vercel.app/",
    imageUrl: "/bookshelf-main.png",
  },
  {
    title: "yerin-blog",
    description: "Next.js를 활용한 정적 블로그입니다.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    githubUrl: "",
    siteUrl: "",
    imageUrl:
      "https://images.unsplash.com/photo-1708236361901-4b4e584a6baa?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
] as const;

export const miniProjectsData = [
  {
    title: "Vanilla JS SPA Project",
    description: "바닐라 자바스크립트로 SPA를 구현한 사이트입니다.",
    tags: ["JavaScript", "HTML", "CSS"],
    githubUrl: "",
    siteUrl: "",
    imageUrl:
      "https://images.unsplash.com/photo-1708236361901-4b4e584a6baa?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Photo Search",
    description: "바닐라 자바스크립트로 구현한 사진 검색 사이트입니다.",
    tags: ["JavaScript", "HTML", "CSS"],
    githubUrl: "",
    siteUrl: "",
    imageUrl:
      "https://images.unsplash.com/photo-1708236361901-4b4e584a6baa?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "React Shopping Mall",
    description: "리액트를 활용한 쇼핑몰 프로젝트입니다.",
    tags: ["React", "JavaScript", "Tailwind"],
    githubUrl: "",
    siteUrl: "",
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
  "React-Query",
  "Tailwindcss",
  "Framer Motion",
  "Recoil",
  "Zustand",
  "Git",
  "Github",
  "Prisma",
  "SQLite",
  "Firebase",
  "Vercel",
  "Notion",
  "Slack",
] as const;

export const experiencesData = [
  {
    title: "제로베이스 프론트엔드 부트캠프 수료",
    description: "제로베이스 웹 프론트엔드 과정 20기를 수료하였습니다.",
    icon: React.createElement(RocketIcon),
    date: "2023.06 - 2024.03",
  },
] as const;
