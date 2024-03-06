"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

import { useSectionInView } from "@/lib/hooks";
export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-5 leading-7">
        개발에 관심을 갖기 전, 저 또한 한 명의 사용자로서 기술에 대한 궁금증을
        가지고 있었던 경험이 여전히 생생하게 남아있습니다. 현재는 프론트엔드 웹
        개발자로서, 웹 사이트의 본질은 사용자와의 상호작용에 있다는 인식을
        기반으로 항상 사용자의 만족을 최우선으로 고려하며 개발하고 있습니다.
      </p>
      {/* <p className="mb-5 leading-7">
        끊임없는 호기심과 새로운 기술, 도구에 대한 열린 마음을 가지고 있어 최신
        웹 개발 트렌드를 주시하고 이를 적극적으로 도입하는 것에서 큰 즐거움을
        느낍니다.
      </p> */}
      <p className="mb-5 leading-7">
        {" "}
        다양한 프로젝트를 통해, 개발 도중 마주치는 문제 상황을 또다른 성장의
        기회로 여기는 법을 깨닫게 되었습니다. 문제를 해결함으로써 내가 부족했던
        부분을 인지하고, 새로운 개념을 이해하며 결국 더 나은 코드를 작성하는
        과정에서 크게 성장할 수 있었습니다.{" "}
      </p>
      <p className="mb-5 leading-7">
        {/* 마지막으로,  */}
        문제 상황을 성장의 기회로 여기는 마인드셋은 제게 있어 항상 앞으로
        나아가는 원동력이 되어왔습니다. 어떤 어려움도 두려워하지 않고, 그것을
        극복하면서 더 나은 개발자로 성장하고자 합니다. 🚀
      </p>
    </motion.section>
  );
}
