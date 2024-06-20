import Image from "next/image";
import Navbar from "@/components/navbar";
import IconCloud from "@/components/iconCloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "sonarqube",
  "figma",
];

function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-screen items-center justify-center overflow-hidden rounded-lg-border bg-background px-20 pb-20 pt-8">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default function Home() {
  return (
    <main className="h-full max-w-full">
      <Navbar />

      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 mt-48 text-9xl font-semibold tracking-tight landing-none text-white lg:text-6xl md:text-5xl">We sell soap.</h1>
        <h2 className="mb-4 mt-10 text-2xl font-extrabold font-serif">A lot of it.</h2>
        <IconCloudDemo />
      </div>
    </main>
  );
}
