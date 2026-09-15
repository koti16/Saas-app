import Image from "next/image";

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

export default function MyJourneyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <section className="mx-auto max-w-6xl">

        {/* Profile Header */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-100 text-3xl font-bold">
              U
            </div>

            <div>
              <h1 className="text-3xl font-bold">
                Your Learning Journey
              </h1>

              <p className="mt-1 text-gray-500">
                Keep learning, keep growing.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-4">
            <div className="rounded-xl border px-6 py-5">
              <p className="text-2xl font-bold text-orange-500">
                23
              </p>

              <p className="mt-1 text-sm text-gray-600">
                Lessons Completed
              </p>
            </div>

            <div className="rounded-xl border px-6 py-5">
              <p className="text-2xl font-bold text-orange-500">
                10
              </p>

              <p className="mt-1 text-sm text-gray-600">
                Companions Created
              </p>
            </div>
          </div>
        </div>

        {/* Completed Lessons */}
        <section className="mt-10 rounded-3xl border-2 border-black p-6 md:p-8">
          <h2 className="text-2xl font-bold">
            Completed lessons
          </h2>

          <div className="mt-8 grid grid-cols-[1fr_auto_auto] gap-4 px-2 text-sm font-medium text-gray-500">
            <span>Lessons</span>
            <span className="w-28 text-center">Subject</span>
            <span className="w-24 text-right">Duration</span>
          </div>

          <div className="mt-4 divide-y">
            {completedLessons.map((lesson) => (
              <div
                key={lesson.title}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-4 py-5"
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

                  <div>
                    <h3 className="font-semibold">
                      {lesson.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-600">
                      Topic: {lesson.topic}
                    </p>
                  </div>
                </div>

                {/* Subject */}
                <span className="w-28 rounded-full bg-black px-3 py-2 text-center text-xs font-medium text-white">
                  {lesson.subject}
                </span>

                {/* Duration */}
                <span className="w-24 text-right text-sm font-medium">
                  {lesson.duration}
                </span>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}