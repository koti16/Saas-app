import Link from "next/link";

const sessions = [
  {
    companion: "Neura the Brainy Explorer",
    subject: "Science",
    topic: "Neural Networks",
    date: "Today",
    duration: "45 mins",
    status: "Completed",
  },
  {
    companion: "Pyra the Python Mentor",
    subject: "Python",
    topic: "Functions and Recursion",
    date: "Yesterday",
    duration: "38 mins",
    status: "Completed",
  },
  {
    companion: "Javon the Java Mentor",
    subject: "Java",
    topic: "Object-Oriented Programming",
    date: "2 days ago",
    duration: "52 mins",
    status: "Completed",
  },
  {
    companion: "Quanta the SQL Analyst",
    subject: "SQL",
    topic: "Joins and Aggregations",
    date: "5 days ago",
    duration: "31 mins",
    status: "Completed",
  },
];

export default function SessionHistoryPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <section className="mx-auto max-w-6xl">
        {/* Header */}
        <div>
          <p className="text-sm font-medium text-orange-500">
            Learning activity
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Session History
          </h1>

          <p className="mt-3 text-gray-600">
            Review your previous AI learning sessions.
          </p>
        </div>

        {/* Sessions */}
        <div className="mt-10 space-y-4">
          {sessions.map((session, index) => (
            <div
              key={`${session.companion}-${index}`}
              className="rounded-2xl border p-5 transition hover:shadow-sm sm:p-6"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                {/* Main information */}
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-xl font-bold">
                      {session.companion}
                    </h2>

                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                      {session.subject}
                    </span>
                  </div>

                  <p className="mt-2 text-gray-600">
                    Topic: {session.topic}
                  </p>
                </div>

                {/* Details */}
                <div className="flex flex-wrap items-center gap-5 text-sm">
                  <div>
                    <p className="text-gray-500">Date</p>
                    <p className="mt-1 font-medium">
                      {session.date}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500">Duration</p>
                    <p className="mt-1 font-medium">
                      {session.duration}
                    </p>
                  </div>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    {session.status}
                  </span>

                  <Link
                    href="/companions"
                    className="font-semibold hover:underline"
                  >
                    Practice again →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty-state style footer / navigation */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/companions"
            className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
          >
            Explore Companions
          </Link>
        </div>
      </section>
    </main>
  );
}