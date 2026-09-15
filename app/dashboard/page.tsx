import Link from "next/link";

const recentCompanions = [
  {
    id: "python",
    name: "Pyra the Python Mentor",
    subject: "Python",
    progress: 65,
    description: "Continue your Python programming journey.",
  },
  {
    id: "java",
    name: "Javon the Java Mentor",
    subject: "Java",
    progress: 40,
    description: "Practice Java and object-oriented programming.",
  },
  {
    id: "sql",
    name: "Quanta the SQL Analyst",
    subject: "SQL",
    progress: 80,
    description: "Continue learning queries and databases.",
  },
];

const subjects = [
  "Python",
  "Java",
  "C++",
  "JavaScript",
  "SQL",
  "DSA",
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <section className="mx-auto max-w-7xl">
        {/* Header */}
        <div>
          <p className="text-sm font-medium text-orange-500">
            Welcome back
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Continue your learning journey
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600">
            Pick up where you left off or explore a new AI learning
            companion.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/companions"
            className="rounded-md bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
          >
            Explore Companions
          </Link>

          <Link
            href="/profile"
            className="rounded-md border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50"
          >
            View Profile
          </Link>
        </div>

        {/* Recent Learning */}
        <section className="mt-14">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                Continue Learning
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Your recent learning companions
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentCompanions.map((companion) => (
              <div
                key={companion.id}
                className="rounded-2xl border p-6"
              >
                <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                  {companion.subject}
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  {companion.name}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  {companion.description}
                </p>

                <div className="mt-6">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium">
                      Progress
                    </span>

                    <span className="text-gray-500">
                      {companion.progress}%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-orange-500"
                      style={{
                        width: `${companion.progress}%`,
                      }}
                    />
                  </div>
                </div>

                <Link
                  href={`/companions/${companion.id}`}
                  className="mt-6 inline-block font-semibold hover:underline"
                >
                  Continue →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Subjects */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold">
            Your Subjects
          </h2>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {subjects.map((subject) => (
              <Link
                key={subject}
                href="/companions"
                className="rounded-xl border p-5 text-center font-semibold transition hover:-translate-y-1 hover:shadow-sm"
              >
                {subject}
              </Link>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-gray-50 p-6">
            <p className="text-sm text-gray-500">
              Learning Sessions
            </p>

            <p className="mt-2 text-3xl font-bold">
              24
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6">
            <p className="text-sm text-gray-500">
              Hours Learned
            </p>

            <p className="mt-2 text-3xl font-bold">
              18.5
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6">
            <p className="text-sm text-gray-500">
              Subjects
            </p>

            <p className="mt-2 text-3xl font-bold">
              6
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6">
            <p className="text-sm text-gray-500">
              Current Streak
            </p>

            <p className="mt-2 text-3xl font-bold">
              7 days
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}