"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "../../actions/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.div
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] scroll-mt-28 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-5">
        <a className="underline" href="mailto:yerinaleph@gmail.com">
          yerinaleph@gmail.com
        </a>{" "}
        또는, 아래의 폼으로 연락 주세요!
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          type="email"
          name="senderEmail"
          className="h-14 px-4 rounded-lg borderBlack"
          placeholder="보내시는 분의 이메일 주소"
          required
          maxLength={50}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          name="message"
          placeholder="Type anything..."
          required
          maxLength={1000}
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
        >
          Submit
          <PaperPlaneIcon className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.div>
  );
}
