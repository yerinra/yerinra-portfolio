import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  FileTextIcon,
  GitHubLogoIcon,
  Link1Icon,
  Pencil1Icon,
  QuoteIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

type ReadMeProps = {
  project: "bookshelf" | "yerin-blog";
};

export function ReadMe({ project }: ReadMeProps) {
  let title,
    intro,
    date,
    githubUrl,
    blogUrl,
    deploymentUrl,
    functions,
    details,
    backgrounds,
    skills;

  switch (project) {
    case "bookshelf":
      title = "bookshelf";
      intro = `책 읽는 사람들을 위한 온라인 책장 사이트입니다. 읽은 책에 해시태그를 달아서 분류하고 모든 책을 한 눈에 볼 수 있는 편리한 사이트를 만들고 싶었습니다.`;
      githubUrl = "https://github.com/yerinra/bookshelf";
      blogUrl = "https://tistory.com";
      deploymentUrl = "https://bookshelf-bay.vercel.app";
      functions =
        "책 제목 검색하기, 내 책장에 책 추가하기, 책에 해시태그 달기, 책에 별점 주기, 제목/저자/별점에 따라 분류하기";
      details = `처음으로 TypeScript를 사용하여 type safe한 프로젝트를 완성할 수 있었습니다. API로는 알라딘의 오픈 API를 사용하여 책 데이터를 받아왔고 그 과정에서 CORS 에러를 해결하면서 CORS의 개념에 대해서 제대로 정리할 수 있었습니다. 무한 스크롤을 구현하기 위해 Intersection Observer API와 @tanstack/react-query의 useInfiniteQuery를 사용하였습니다. 
      백엔드 없이 혼자서 하는 프로젝트였기 때문에 firebase의 Authentication과 Firestore DB를 활용하였습니다. 
      회원가입 form의 경우 React-Hook-Form과 Zod를 사용하여 견고한 form validation을 할 수 있었습니다. 
      Tailwindcss를 사용하여 스타일링했으며 tailwindcss를 기반으로 다크모드를 구현하고 아토믹 디자인 패턴을 적용하여 컴포넌트들을 분류했습니다.
      `;
      date = "(2024.01-02, 개인 프로젝트)";
      backgrounds = `저는 책 읽는 것을 좋아합니다. 예전에는 종이책만 읽었었는데, 종이책과 전자책을 모두 읽게 되면서 효율적인 독서기록 방법을 고민하게 되었습니다. 기존의 온라인 서점들에서도 책장 관리 기능을 제공하지만, 내가 구매한 전자책만을 관리할 수 있어서 아쉬운 점이 많았습니다.
그렇게 책장 사이트를 기획하게 되었습니다. 
해시태그 형식으로 책을 정리하면 좀 더 읽은 책을 쉽게 파악할 수 있을 것이라는 생각에 해시태그 기능은 꼭 넣기로 했습니다. 그리고 별점 기능도 추가해서 내가 읽은 책에 대한 평가를 기록하고 나중에 다시 찾아볼 수 있게 하기로 결정했습니다. `;
      skills = {
        front: [
          "React",
          "TypeScript",
          "Recoil",
          "@tanstack/react-query",
          "TailwindCSS",
        ],
        auth: "Firebase Authentication",
        database: "Firebase Firestore",
        deployment: "Vercel",
      };
      break;
    case "yerin-blog":
      title = "yerin-blog";
      intro = ``;
      githubUrl = "https://github.com/yerinra/bookshelf";
      blogUrl = "https://tistory.com";
      deploymentUrl = "https://bookshelf-bay.vercel.app";
      functions =
        "책 제목 검색하기, 내 책장에 책 추가하기, 책에 해시태그 달기, 책에 별점 주기, 제목/저자/별점에 따라 분류하기";
      details = `
    `;
      date = "(2024.01-02, 개인 프로젝트)";
      backgrounds = ``;
      skills = {
        front: [
          "React",
          "TypeScript",
          "Recoil",
          "@tanstack/react-query",
          "TailwindCSS",
        ],
        auth: "Firebase Authentication",
        database: "Firebase Firestore",
        deployment: "Vercel",
      };
      break;
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center justify-center my-4 gap-2 h-[2rem] w-[8rem] bg-gray-900 text-white text-sm rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10">
          README
          <FileTextIcon />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-[720px] overflow-auto max-h-[600px]">
        <DialogHeader>
          <QuoteIcon className="h-4 w-4" />
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription>
            <div className="mb-1">{date}</div>
            <div>{intro}</div>
          </DialogDescription>
        </DialogHeader>
        <DialogTitle>Links</DialogTitle>
        <DialogDescription className="space-y-3">
          <div>
            <div className="flex items-center gap-2">
              <Link1Icon />
              배포 링크
            </div>
            <Link
              href={deploymentUrl as string}
              className="flex gap-2 items-center hover:underline"
            >
              {deploymentUrl}
            </Link>
            <p className="text-sm">
              (테스트용 이메일 test@test.com 비밀번호 test1234)
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <GitHubLogoIcon />
              깃허브 레포지토리
            </div>
            <Link
              href={githubUrl as string}
              className="flex gap-2 items-center hover:underline"
            >
              {githubUrl}
            </Link>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Pencil1Icon />
              블로그 회고
            </div>
            <Link
              href={blogUrl as string}
              className="flex gap-2 items-center hover:underline"
            >
              {blogUrl}
            </Link>
          </div>
        </DialogDescription>
        <DialogTitle>사용한 기술</DialogTitle>
        {project === "bookshelf" && (
          <DialogDescription>
            <section className="mb-2">
              <h2 className="font-bold">Frontend</h2>
              {skills?.front.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </section>
            <section className="mb-2">
              <h2 className="font-bold">Authentication</h2>
              <li>{skills?.auth}</li>
            </section>
            <section className="mb-2">
              <h2 className="font-bold">Database</h2>
              <li>{skills?.database}</li>
            </section>
            <section className="mb-2">
              <h2 className="font-bold">Deployment</h2>
              <li>{skills?.deployment}</li>
            </section>
            <section className="mb-2">
              <h2 className="font-bold">ETC</h2>
              <li>
                React-Hook-Form, Zod, React-Select, sonner, react-helmet-async,
                aladin API{" "}
              </li>
            </section>
          </DialogDescription>
        )}
        <DialogTitle>주요 기능</DialogTitle>
        <DialogDescription>
          {project === "bookshelf" && <p>{functions}</p>}
        </DialogDescription>
        <DialogTitle>프로젝트 기획 상세 설명</DialogTitle>
        <DialogDescription>
          {project === "bookshelf" && (
            <article>
              <p>
                저는 책 읽는 것을 좋아합니다. 예전에는 종이책만 읽었었는데,
                종이책과 전자책을 모두 읽게 되면서 효율적인 독서기록 방법을
                고민하게 되었습니다. 기존의 온라인 서점들에서도 책장 관리 기능을
                제공하지만, 내가 구매한 전자책만을 관리할 수 있어서 아쉬운 점이
                많았습니다.
              </p>
              <p className="mt-2">
                그렇게 책장 사이트를 기획하게 되었습니다. 해시태그 형식으로 책을
                정리하면 좀 더 읽은 책을 쉽게 파악할 수 있을 것이라는 생각에
                해시태그 기능은 꼭 넣기로 했습니다. 그리고 별점 기능도 추가해서
                내가 읽은 책에 대한 평가를 기록하고 나중에 다시 찾아볼 수 있게
                하기로 결정했습니다.
              </p>
            </article>
          )}
        </DialogDescription>
        <DialogTitle>프로젝트 요약</DialogTitle>
        <DialogDescription>
          {project === "bookshelf" && (
            <article>
              <p>
                처음으로 TypeScript를 사용하여 type safe한 프로젝트를 완성할 수
                있었습니다. API로는 알라딘의 오픈 API를 사용하여 책 데이터를
                받아왔고 그 과정에서 CORS 에러를 해결하면서 CORS의 개념에 대해서
                제대로 정리할 수 있었습니다. 무한 스크롤을 구현하기 위해
                Intersection Observer API와 @tanstack/react-query의
                useInfiniteQuery를 사용하였습니다.{" "}
              </p>
              <p className="mt-2">
                백엔드 없이 혼자서 하는 프로젝트였기 때문에 firebase의
                Authentication과 Firestore DB를 활용하였습니다. 회원가입 form의
                경우 React-Hook-Form과 Zod를 사용하여 견고한 form validation을
                할 수 있었습니다. TailwindCSS를 사용하여 스타일링 및 다크모드를
                구현하고 아토믹 디자인 패턴을 적용하여 컴포넌트들을
                분류했습니다.
              </p>
            </article>
          )}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
