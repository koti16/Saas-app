import Link from "next/link";

const companions = {
  neura: {
    name: "Neura the Brainy Explorer",
    subject: "Science",
    level: "Beginner",
    description:
      "Explore science concepts through interactive conversations and clear explanations.",
    topics: ["Biology", "Physics", "Chemistry"],
    color: "bg-purple-200",
    initials: "N",
  },

  countsy: {
    name: "Countsy the Number Wizard",
    subject: "Math",
    level: "Beginner",
    description:
      "Master mathematics through guided explanations and problem solving.",
    topics: ["Algebra", "Geometry", "Arithmetic"],
    color: "bg-yellow-200",
    initials: "C",
  },

  verba: {
    name: "Verba the Vocabulary Builder",
    subject: "Language",
    level: "Beginner",
    description:
      "Improve vocabulary, communication, and language skills through conversation.",
    topics: ["Grammar", "Vocabulary", "Communication"],
    color: "bg-blue-200",
    initials: "V",
  },

  python: {
    name: "Pyra the Python Mentor",
    subject: "Python",
    level: "Beginner",
    description:
      "Learn Python programming from fundamentals to advanced concepts.",
    topics: ["Syntax", "OOP", "DSA"],
    color: "bg-green-200",
    initials: "P",
  },

  java: {
    name: "Javon the Java Mentor",
    subject: "Java",
    level: "Intermediate",
    description:
      "Learn Java, OOP, collections, and problem solving through practice.",
    topics: ["OOP", "Collections", "DSA"],
    color: "bg-orange-200",
    initials: "J",
  },

  cpp: {
    name: "Cody the C++ Hacker",
    subject: "C++",
    level: "Intermediate",
    description:
      "Learn C++, STL, OOP, and algorithmic problem solving.",
    topics: ["OOP", "STL", "DSA"],
    color: "bg-indigo-200",
    initials: "C++",
  },

  javascript: {
    name: "Juno the JavaScript Guide",
    subject: "JavaScript",
    level: "Beginner",
    description:
      "Learn JavaScript for modern web development and applications.",
    topics: ["JavaScript", "DOM", "Async"],
    color: "bg-yellow-300",
    initials: "JS",
  },

  typescript: {
    name: "Typeon the TypeScript Mentor",
    subject: "TypeScript",
    level: "Intermediate",
    description:
      "Learn TypeScript and build safer modern web applications.",
    topics: ["Types", "Interfaces", "Generics"],
    color: "bg-blue-300",
    initials: "TS",
  },

  sql: {
    name: "Quanta the SQL Analyst",
    subject: "SQL",
    level: "Beginner",
    description:
      "Learn SQL queries, joins, databases, and practical data analysis.",
    topics: ["Queries", "Joins", "Aggregation"],
    color: "bg-cyan-200",
    initials: "SQL",
  },

  dsa: {
    name: "Algo the Problem Solver",
    subject: "DSA",
    level: "Intermediate",
    description:
      "Build strong data structures and algorithms skills through practice.",
    topics: ["Arrays", "Trees", "Graphs"],
    color: "bg-red-200",
    initials: "A",
  },

  "ai-ml": {
    name: "Astra the AI Mentor",
    subject: "AI & Machine Learning",
    level: "Intermediate",
    description:
      "Learn artificial intelligence and machine learning from fundamentals to advanced topics.",
    topics: ["ML", "Neural Networks", "LLMs"],
    color: "bg-violet-200",
    initials: "AI",
  },

  dbms: {
    name: "Data the Database Mentor",
    subject: "DBMS",
    level: "Intermediate",
    description:
      "Understand databases, normalization, transactions, indexing, and SQL.",
    topics: ["SQL", "Normalization", "Transactions"],
    color: "bg-emerald-200",
    initials: "DB",
  },

  os: {
    name: "Kernel the OS Mentor",
    subject: "Operating Systems",
    level: "Intermediate",
    description:
      "Learn processes, memory management, storage, I/O, and operating system concepts.",
    topics: ["Processes", "Memory", "File Systems"],
    color: "bg-pink-200",
    initials: "OS",
  },
};

type CompanionPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CompanionPage({
  params,
}: CompanionPageProps) {
  const { id } = await params;

  const companion =
    companions[id as keyof typeof companions];

  if (!companion) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-2xl font-bold">
            ?
          </div>

          <h1 className="mt-6 text-3xl font-bold">
            Companion not found
          </h1>

          <p className="mt-3 text-gray-600">
            The companion you're looking for doesn't exist.
          </p>

          <Link
            href="/companions"
            className="mt-6 inline-block rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
          >
            Back to Companions
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-4 py-8 sm:px-6 sm:py-12">
      <section className="mx-auto max-w-6xl">
        {/* Back */}
        <Link
          href="/companions"
          className="text-sm font-medium text-gray-500 transition hover:text-black"
        >
          ← Back to companions
        </Link>

        {/* Main card */}
        <div className="mt-8 overflow-hidden rounded-3xl border-2 border-black bg-white">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* Visual panel */}
            <div
              className={`flex min-h-[320px] items-center justify-center ${companion.color} p-8 lg:min-h-[560px]`}
            >
              <div className="text-center">
                <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border-4 border-black bg-white text-4xl font-bold shadow-sm sm:h-44 sm:w-44 sm:text-5xl">
                  {companion.initials}
                </div>

                <p className="mt-6 text-sm font-semibold">
                  AI Learning Companion
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="p-6 sm:p-10 lg:p-12">
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold text-orange-700">
                  {companion.subject}
                </span>

                <span className="rounded-full bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-700">
                  {companion.level}
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                {companion.name}
              </h1>

              <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
                {companion.description}
              </p>

              {/* Topics */}
              <div className="mt-8">
                <h2 className="text-lg font-bold">
                  What you'll learn
                </h2>

                <div className="mt-4 flex flex-wrap gap-3">
                  {companion.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-gray-50 p-4">
                  <p className="text-xs text-gray-500">
                    Subject
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    {companion.subject}
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-4">
                  <p className="text-xs text-gray-500">
                    Level
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    {companion.level}
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-4">
                  <p className="text-xs text-gray-500">
                    Learning mode
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    Interactive
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/companions/${id}/session`}
                  className="rounded-xl bg-orange-500 px-7 py-3 text-center font-semibold text-white transition hover:bg-orange-600"
                >
                  Start Learning
                </Link>

                <Link
                  href="/companions"
                  className="rounded-xl border border-gray-300 px-7 py-3 text-center font-semibold transition hover:bg-gray-50"
                >
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}