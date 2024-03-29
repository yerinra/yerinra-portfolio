import { projectsData } from "@/lib/data";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Link1Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ReadMe } from "./readme";

type ProjectProp = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  siteUrl,
}: ProjectProp) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      className="mb-3 sm:mb-8 last:mb-0"
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      <section className="group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden rounded-lg sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
          <Link href={siteUrl} className="flex hover:underline">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <Link1Icon className="mt-auto ml-1" />
          </Link>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ReadMe project={title} />
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="project image"
          width={300}
          height={200}
          quality={95}
          className="hidden sm:block absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] "
        />
      </section>
    </motion.div>
  );
}
