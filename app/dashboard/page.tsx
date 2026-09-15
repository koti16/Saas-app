import Link from "next/link";

const companions = [
  {
    id: "neura",
    name: "Neura the Brainy Explorer",
    subject: "Science",
    topic: "Neural Networks of the Brain",
    duration: "45 mins",
    color: "bg-purple-200",
  },
  {
    id: "countsy",
    name: "Countsy the Number Wizard",
    subject: "Maths",
    topic: "Solving Linear Equations",
    duration: "20 mins",
    color: "bg-yellow-200",
  },
  {
    id: "verba",
    name: "Verba the Vocabulary Builder",
    subject: "Language",
    topic: "Mastering Tenses in English",
    duration: "32 mins",
    color: "bg-sky-200",
  },
];

const completedLessons = [
  {
    title: "Neura the Brainy Explorer",
    subject: "Science",
    duration: "45 mins",
  },
  {
    title: "Countsy the Number Wizard",
    subject: "Maths",
    duration: "20 mins",
  },
  {
    title: "Verba the Vocabulary Builder",
    subject: "Language",
    duration: "32 mins",
  },
  {
    title: "Pyra the Python Mentor",
    subject: "Python",
    duration: "38 mins",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <section className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium text-orange-500">
              Welcome back
            </p>

            <h1 className="mt-2 text-4xl font-bold tracking-tight">
              Your Learning Dashboard
            </h1>

            <p className="mt-3 max-w-2xl text-gray-600">
              Continue learning with your AI companions or discover
              something new.
            </p>
          </div>

          <Link
            href="/companions/new"
            className="rounded-xl bg-orange-500 px-5 py-3 text-center font-semibold text-white hover:bg-orange-600"
          >
            Create Companion
          </Link>
        </div>

        {/* Companion Cards */}
        <section className="mt-12">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                Continue Learning
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Pick up where you left off.
              </p>
            </div>

            <Link
              href="/companions"
              className="text-sm font-semibold hover:underline"
            >
              View all →
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {companions.map((companion) => (
              <div
                key={companion.id}
                className={`rounded-2xl border-2 border-black p-6 ${companion.color}`}
              >
                <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold">
                  {companion.subject}
                </span>

                <h3 className="mt-5 text-2xl font-bold">
                  {companion.name}
                </h3>

                <p className="mt-3 text-sm text-gray-700">
                  Topic: {companion.topic}
                </p>

                <p className="mt-3 text-sm text-gray-600">
                  {companion.duration}
                </p>

                <Link
                  href={`/companions/${companion.id}/session`}
                  className="mt-6 inline-block rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600"
                >
                  Launch Lesson
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Lessons */}
        <section className="mt-12 rounded-3xl border-2 border-black p-6 md:p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                Recently completed lessons
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Your latest learning activity.
              </p>
            </div>

            <Link
              href="/session-history"
              className="text-sm font-semibold hover:underline"
            >
              View history →
            </Link>
          </div>

          <div className="mt-8 space-y-4">
            {completedLessons.map((lesson) => (
              <div
                key={lesson.title}
                className="flex flex-col gap-3 rounded-2xl border p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-semibold">
                    {lesson.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {lesson.subject}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
                    {lesson.subject}
                  </span>

                  <span className="text-sm font-medium">
                    {lesson.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-purple-100 p-6">
            <p className="text-sm text-gray-600">Lessons Completed</p>
            <p className="mt-2 text-3xl font-bold">23</p>
          </div>

          <div className="rounded-2xl bg-yellow-100 p-6">
            <p className="text-sm text-gray-600">Companions Created</p>
            <p className="mt-2 text-3xl font-bold">10</p>
          </div>

          <div className="rounded-2xl bg-sky-100 p-6">
            <p className="text-sm text-gray-600">Learning Hours</p>
            <p className="mt-2 text-3xl font-bold">18.5</p>
          </div>

          <div className="rounded-2xl bg-orange-100 p-6">
            <p className="text-sm text-gray-600">Current Streak</p>
            <p className="mt-2 text-3xl font-bold">7 days</p>
          </div>
        </section>
      </section>
    </main>
  );
}