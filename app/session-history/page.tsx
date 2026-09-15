import Link from "next/link";

const sessions = [
  {
    id: "neura-science",
    companion: "Neura the Brainy Explorer",
    subject: "Science",
    topic: "Neural Networks",
    date: "Today",
    duration: "45 mins",
    status: "Completed",
    avatar: "N",
    bg: "bg-purple-200",
    href: "/companions/neura/session",
  },
  {
    id: "pyra-python",
    companion: "Pyra the Python Mentor",
    subject: "Python",
    topic: "Functions and Recursion",
    date: "Yesterday",
    duration: "38 mins",
    status: "Completed",
    avatar: "P",
    bg: "bg-green-200",
    href: "/companions/python/session",
  },
  {
    id: "javon-java",
    companion: "Javon the Java Mentor",
    subject: "Java",
    topic: "Object-Oriented Programming",
    date: "2 days ago",
    duration: "52 mins",
    status: "Completed",
    avatar: "J",
    bg: "bg-orange-200",
    href: "/companions/java/session",
  },
  {
    id: "quanta-sql",
    companion: "Quanta the SQL Analyst",
    subject: "SQL",
    topic: "Joins and Aggregations",
    date: "5 days ago",
    duration: "31 mins",
    status: "Completed",
    avatar: "Q",
    bg: "bg-cyan-200",
    href: "/companions/sql/session",
  },
];

export default function SessionHistoryPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-8 sm:px-6 sm:py-12">
      <section className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-orange-500">
              Learning activity
            </p>

            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Session History
            </h1>

            <p className="mt-3 max-w-2xl text-gray-600">
              Review your previous AI learning sessions and
              continue practicing.
            </p>
          </div>

          <Link
            href="/companions"
            className="rounded-xl bg-orange-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-orange-600"
          >
            Start New Session
          </Link>
        </div>

        {/* Summary */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-purple-100 p-5">
            <p className="text-sm text-gray-600">
              Total Sessions
            </p>

            <p className="mt-2 text-3xl font-bold">
              24
            </p>
          </div>

          <div className="rounded-2xl bg-yellow-100 p-5">
            <p className="text-sm text-gray-600">
              Total Learning Time
            </p>

            <p className="mt-2 text-3xl font-bold">
              18.5h
            </p>
          </div>

          <div className="rounded-2xl bg-blue-100 p-5">
            <p className="text-sm text-gray-600">
              Completed
            </p>

            <p className="mt-2 text-3xl font-bold">
              23
            </p>
          </div>
        </div>

        {/* Session list */}
        <div className="mt-10 overflow-hidden rounded-3xl border-2 border-black">
          <div className="border-b px-6 py-6 sm:px-8">
            <h2 className="text-2xl font-bold">
              Recent Sessions
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Your most recent conversations with AI companions.
            </p>
          </div>

          <div className="divide-y">
            {sessions.map((session) => (
              <article
                key={session.id}
                className="p-6 transition hover:bg-gray-50 sm:p-8"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  {/* Companion */}
                  <div className="flex min-w-0 items-center gap-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-black ${session.bg} text-lg font-bold`}
                    >
                      {session.avatar}
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-bold">
                          {session.companion}
                        </h3>

                        <span className="rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
                          {session.subject}
                        </span>
                      </div>

                      <p className="mt-2 text-sm text-gray-600">
                        Topic: {session.topic}
                      </p>
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:min-w-[500px]">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                        Date
                      </p>

                      <p className="mt-1 text-sm font-semibold">
                        {session.date}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                        Duration
                      </p>

                      <p className="mt-1 text-sm font-semibold">
                        {session.duration}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                        Status
                      </p>

                      <span className="mt-1 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                        {session.status}
                      </span>
                    </div>

                    <div className="flex items-end">
                      <Link
                        href={session.href}
                        className="text-sm font-semibold hover:underline"
                      >
                        Practice again →
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t bg-gray-50 px-6 py-6 text-center sm:px-8">
            <Link
              href="/companions"
              className="font-semibold hover:underline"
            >
              Explore more companions →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}