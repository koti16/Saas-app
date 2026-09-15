import Link from "next/link";

const companions = {
  neura: {
    name: "Neura the Brainy Explorer",
    subject: "Science",
    description:
      "Explore science concepts through interactive conversations and clear explanations.",
  },

  countsy: {
    name: "Countsy the Number Wizard",
    subject: "Math",
    description:
      "Master mathematics through guided explanations and problem solving.",
  },

  verba: {
    name: "Verba the Vocabulary Builder",
    subject: "Language",
    description:
      "Improve vocabulary, communication, and language skills through conversation.",
  },

  python: {
    name: "Pyra the Python Mentor",
    subject: "Python",
    description:
      "Learn Python programming from fundamentals to advanced concepts.",
  },

  java: {
    name: "Javon the Java Mentor",
    subject: "Java",
    description:
      "Learn Java, OOP, collections, and problem solving through practice.",
  },

  cpp: {
    name: "Cody the C++ Hacker",
    subject: "C++",
    description:
      "Learn C++, STL, OOP, and algorithmic problem solving.",
  },

  javascript: {
    name: "Juno the JavaScript Guide",
    subject: "JavaScript",
    description:
      "Learn JavaScript for modern web development and applications.",
  },

  typescript: {
    name: "Typeon the TypeScript Mentor",
    subject: "TypeScript",
    description:
      "Learn TypeScript and build safer modern web applications.",
  },

  sql: {
    name: "Quanta the SQL Analyst",
    subject: "SQL",
    description:
      "Learn SQL queries, joins, databases, and practical data analysis.",
  },

  dsa: {
    name: "Algo the Problem Solver",
    subject: "DSA",
    description:
      "Build strong data structures and algorithms skills through practice.",
  },

  "ai-ml": {
    name: "Astra the AI Mentor",
    subject: "AI & Machine Learning",
    description:
      "Learn artificial intelligence and machine learning from fundamentals to advanced topics.",
  },

  dbms: {
    name: "Data the Database Mentor",
    subject: "DBMS",
    description:
      "Understand databases, normalization, transactions, indexing, and SQL.",
  },

  os: {
    name: "Kernel the OS Mentor",
    subject: "Operating Systems",
    description:
      "Learn processes, memory management, storage, I/O, and operating system concepts.",
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
          <h1 className="text-3xl font-bold">
            Companion not found
          </h1>

          <Link
            href="/companions"
            className="mt-6 inline-block rounded-md bg-black px-6 py-3 text-white"
          >
            Back to Companions
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <section className="mx-auto max-w-5xl">
        <Link
          href="/companions"
          className="text-sm font-medium text-gray-500 hover:text-black"
        >
          ← Back to companions
        </Link>

        <div className="mt-10 rounded-3xl border bg-gray-50 p-8 md:p-12">
          <span className="inline-block rounded-full bg-white px-4 py-2 text-sm font-medium">
            {companion.subject}
          </span>

          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            {companion.name}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            {companion.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-md bg-orange-500 px-7 py-3 font-semibold text-white hover:bg-orange-600">
              Start Learning
            </button>

            <Link
              href="/companions"
              className="rounded-md border border-gray-300 bg-white px-7 py-3 font-semibold"
            >
              Explore More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}