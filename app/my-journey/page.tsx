import Image from "next/image";
import Link from "next/link";

const completedLessons = [
  {
    title: "Neura the Brainy Explorer",
    topic: "Neural Networks of the Brain",
    subject: "Science",
    duration: "45 mins",
    icon: "/icons/cap.svg",
    bg: "bg-purple-200",
  },
  {
    title: "Countsy the Number Wizard",
    topic: "Solving Linear Equations",
    subject: "Maths",
    duration: "20 mins",
    icon: "/icons/maths.svg",
    bg: "bg-yellow-200",
  },
  {
    title: "Luna, Your Grammar Guide",
    topic: "Mastering Tenses in English",
    subject: "Language",
    duration: "32 mins",
    icon: "/icons/language.svg",
    bg: "bg-sky-200",
  },
  {
    title: "Codey, the Logic Hacker",
    topic: "Intro to If-Else Statements",
    subject: "Coding",
    duration: "30 mins",
    icon: "/icons/coding.svg",
    bg: "bg-pink-200",
  },
  {
    title: "Memo, the Memory Keeper",
    topic: "World Wars: Causes & Effects",
    subject: "History",
    duration: "15 mins",
    icon: "/icons/history.svg",
    bg: "bg-amber-100",
  },
];

const stats = [
  {
    value: "23",
    label: "Lessons Completed",
    className: "bg-purple-100",
  },
  {
    value: "10",
    label: "Companions Created",
    className: "bg-yellow-100",
  },
  {
    value: "18.5",
    label: "Learning Hours",
    className: "bg-blue-100",
  },
  {
    value: "7",
    label: "Day Streak",
    className: "bg-orange-100",
  },
];

export default function MyJourneyPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-8 sm:px-6 sm:py-12">
      <section className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-black text-3xl font-bold text-white">
              U
            </div>

            <div>
              <p className="text-sm font-semibold text-orange-500">
                Your progress
              </p>

              <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
                My Learning Journey
              </h1>

              <p className="mt-2 text-gray-500">
                Keep learning, keep growing.
              </p>
            </div>
          </div>

          <Link
            href="/companions"
            className="rounded-xl bg-orange-500 px-6 py-3 text-center font-semibold text-white hover:bg-orange-600"
          >
            Continue Learning
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`rounded-2xl p-6 ${stat.className}`}
            >
              <p className="text-3xl font-bold">{stat.value}</p>

              <p className="mt-1 text-sm text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Completed lessons */}
        <section className="mt-10 overflow-hidden rounded-3xl border-2 border-black">
          <div className="border-b px-6 py-6 sm:px-8">
            <h2 className="text-2xl font-bold">
              Completed Lessons
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Review what you've already learned.
            </p>
          </div>

          {/* Desktop headings */}
          <div className="hidden grid-cols-[1fr_130px_100px] gap-4 px-8 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500 md:grid">
            <span>Lesson</span>
            <span className="text-center">Subject</span>
            <span className="text-right">Duration</span>
          </div>

          <div className="divide-y">
            {completedLessons.map((lesson) => (
              <div
                key={lesson.title}
                className="px-6 py-5 sm:px-8 md:grid md:grid-cols-[1fr_130px_100px] md:items-center md:gap-4"
              >
                {/* Lesson */}
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${lesson.bg}`}
                  >
                    <Image
                      src={lesson.icon}
                      alt=""
                      width={28}
                      height={28}
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-semibold">
                      {lesson.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-600">
                      {lesson.topic}
                    </p>
                  </div>
                </div>

                {/* Mobile metadata */}
                <div className="mt-4 flex items-center gap-3 md:mt-0">
                  <span className="rounded-full bg-black px-3 py-1.5 text-xs font-medium text-white md:w-full md:text-center">
                    {lesson.subject}
                  </span>

                  <span className="text-sm font-medium text-gray-600 md:w-full md:text-right">
                    {lesson.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t bg-gray-50 px-6 py-6 text-center sm:px-8">
            <Link
              href="/session-history"
              className="font-semibold hover:underline"
            >
              View complete session history →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}