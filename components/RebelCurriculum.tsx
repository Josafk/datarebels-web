"use client";

import { CurriculumCard } from "@/components/ui/curriculum-card";

const curriculumCourses = [
  {
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600",
    title: "Data Translator with GenAI",
    description:
      "Master the art of translating complex business challenges into actionable GenAI use cases. You will learn to frame organizational problems in a way that data teams can solve, ensuring every project is aligned with strategic ROI.",
    badges: [
      { icon: "clock" as const, label: "8 Weeks" },
      { icon: "video" as const, label: "Live Remote" },
    ],
    themeColor: "270 50% 30%",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600",
    title: "Data Product Owner with GenAI",
    description:
      "Build a business-first mindset for AI development. This course teaches you to identify, prioritize, and manage the creation of data products that solve real operational bottlenecks and deliver measurable business value.",
    badges: [
      { icon: "clock" as const, label: "6 Weeks" },
      { icon: "eye" as const, label: "On demand" },
      { icon: "building" as const, label: "Hybrid" },
    ],
    themeColor: "270 50% 30%",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600",
    title: "Python for Data Analysis with GenAI",
    description:
      "Supercharge your data analysis skills. Learn Python fundamentals and visualization in Google Colab, leveraging Gemini AI to write cleaner code faster and master the art of technical prompting.",
    badges: [
      { icon: "clock" as const, label: "8 Weeks" },
      { icon: "video" as const, label: "Live Remote" },
    ],
    themeColor: "270 50% 30%",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600",
    title: "Advanced Data Translator (Level 2) with GenAI",
    description:
      "Elevate your strategic impact. Use advanced frameworks to justify Machine Learning models, master complex data storytelling, and ensure sophisticated AI solutions meet the specific needs of executive-level analysis.",
    badges: [
      { icon: "clock" as const, label: "18 Weeks" },
      { icon: "video" as const, label: "Live Remote" },
    ],
    themeColor: "270 50% 30%",
  },
];

export function RebelCurriculum() {
  return (
    <section
      id="programs"
      className="relative z-10 py-10 md:py-12 lg:py-16 bg-slate-50 scroll-mt-20"
      aria-label="The Rebel Curriculum"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-8 mb-8 lg:mb-10">
          <div>
            <h2 className="font-title text-slate-900 text-[26px] md:text-[28px] lg:text-[32px] font-semibold leading-tight">
              The Rebel Curriculum:
              <br />
              Master your future
            </h2>
            <p className="font-sans text-slate-600 text-[14px] leading-[20px] mt-3 max-w-lg">
              We offer custom-engineered programs designed to close the GenAI
              talent gap and accelerate your career. Every course is
              project-based and anchored in real-world industry demands
            </p>
          </div>
          <div className="lg:pt-1 lg:shrink-0">
            
              href="#contact"
              className="font-sans inline-flex w-full lg:w-auto items-center justify-center gap-2 px-6 py-3 rounded-full border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-colors text-[13px]"
            >
              Secure your spot now! →
            </a>
          </div>
        </div>

        {/* Grid */}
        {/*
          Mobile: 1 col, cards altura natural
          Tablet: 2 col
          Desktop: 4 col, todos igual altura via aspect-ratio
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {curriculumCourses.map((course, index) => (
            <div
              key={index}
              className="aspect-[3/4] md:aspect-[3/4] lg:aspect-auto lg:min-h-[480px]"
            >
              <CurriculumCard
                imageUrl={course.imageUrl}
                title={course.title}
                description={course.description}
                badges={course.badges}
                href="#contact"
                themeColor={course.themeColor}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}