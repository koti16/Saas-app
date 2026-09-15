"use client";

import Link from "next/link";
import { useState } from "react";

const categories = [
  "All",
  "Science",
  "Math",
  "Language",
  "Coding",
  "Computer Science",
];

const companions = [
  {
    id: "neura",
    name: "Neura the Brainy Explorer",
    subject: "Science",
    category: "Science",
    description:
      "Explore science concepts through interactive conversations.",
    color: "bg-purple-200",
    initials: "N",
  },
  {
    id: "countsy",
    name: "Countsy the Number Wizard",
    subject: "Math",
    category: "Math",
    description:
      "Make mathematics easier through guided explanations and practice.",
    color: "bg-yellow-200",
    initials: "C",
  },
  {
    id: "verba",
    name: "Verba the Vocabulary Builder",
    subject: "Language",
    category: "Language",
    description:
      "Improve vocabulary, grammar, and communication skills.",
    color: "bg-blue-200",
    initials: "V",
  },
  {
    id: "python",
    name: "Pyra the Python Mentor",
    subject: "Python",
    category: "Coding",
    description:
      "Learn Python from fundamentals to advanced programming.",
    color: "bg-green-200",
    initials: "P",
  },
  {
    id: "java",
    name: "Javon the Java Mentor",
    subject: "Java",
    category: "Coding",
    description:
      "Master Java, OOP, collections, and problem solving.",
    color: "bg-orange-200",
    initials: "J",
  },
  {
    id: "cpp",
    name: "Cody the C++ Hacker",
    subject: "C++",
    category: "Coding",
    description:
      "Learn C++, STL, OOP, and algorithmic problem solving.",
    color: "bg-indigo-200",
    initials: "C++",
  },
  {
    id: "javascript",
    name: "Juno the JavaScript Guide",
    subject: "JavaScript",
    category: "Coding",
    description:
      "Build strong JavaScript skills for modern development.",
    color: "bg-yellow-300",
    initials: "JS",
  },
  {
    id: "typescript",
    name: "Typeon the TypeScript Mentor",
    subject: "TypeScript",
    category: "Coding",
    description:
      "Learn TypeScript and build safer modern applications.",
    color: "bg-blue-300",
    initials: "TS",
  },
  {
    id: "sql",
    name: "Quanta the SQL Analyst",
    subject: "SQL",
    category: "Coding",
    description:
      "Learn SQL queries, joins, aggregation, and databases.",
    color: "bg-cyan-200",
    initials: "SQL",
  },
  {
    id: "dsa",
    name: "Algo the Problem Solver",
    subject: "DSA",
    category: "Computer Science",
    description:
      "Master data structures and algorithms through practice.",
    color: "bg-red-200",
    initials: "A",
  },
  {
    id: "ai-ml",
    name: "Astra the AI Mentor",
    subject: "AI & ML",
    category: "Computer Science",
    description:
      "Learn AI and machine learning from fundamentals to advanced topics.",
    color: "bg-violet-200",
    initials: "AI",
  },
  {
    id: "dbms",
    name: "Data the Database Mentor",
    subject: "DBMS",
    category: "Computer Science",
    description:
      "Understand databases, normalization, transactions, and indexing.",
    color: "bg-emerald-200",
    initials: "DB",
  },
  {
    id: "os",
    name: "Kernel the OS Mentor",
    subject: "Operating Systems",
    category: "Computer Science",
    description:
      "Learn processes, memory, storage, and operating system concepts.",
    color: "bg-pink-200",
    initials: "OS",
  },
];

export default function CompanionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCompanions =
    selectedCategory === "All"
      ? companions
      : companions.filter(
          (companion) => companion.category === selectedCategory
        );

  return (
    <main className="min-h-screen bg-white px-4 py-10 sm:px-6 sm:py-12">
      <section className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold text-orange-500">
              Learn with AI
            </p>

            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Learning Companions
            </h1>

            <p className="mt-4 max-w-2xl text-gray-600">
              Choose an AI companion and learn through interactive,
              personalized conversations.
            </p>
          </div>

          <Link
            href="/companions/new"
            className="rounded-xl bg-orange-500 px-6 py-3 text-center font-semibold text-white hover:bg-orange-600"
          >
            + Create Companion
          </Link>
        </div>

        {/* Categories */}
        <div className="mt-10 overflow-x-auto pb-2">
          <div className="flex min-w-max gap-3">
            {categories.map((category) => {
              const isActive = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                    isActive
                      ? "bg-black text-white"
                      : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Result count */}
        <div className="mt-8">
          <p className="text-sm text-gray-500">
            Showing {filteredCompanions.length} companion
            {filteredCompanions.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCompanions.map((companion) => (
            <article
              key={companion.id}
              className={`group rounded-3xl border-2 border-black p-6 transition hover:-translate-y-1 hover:shadow-md ${companion.color}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-black bg-white font-bold">
                  {companion.initials}
                </div>

                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold">
                  {companion.subject}
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-bold leading-tight">
                {companion.name}
              </h2>

              <p className="mt-3 min-h-12 text-sm leading-6 text-gray-700">
                {companion.description}
              </p>

              <Link
                href={`/companions/${companion.id}`}
                className="mt-6 block rounded-xl bg-orange-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-orange-600"
              >
                Start Learning
              </Link>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredCompanions.length === 0 && (
          <div className="rounded-3xl border-2 border-dashed p-12 text-center">
            <h2 className="text-xl font-bold">
              No companions found
            </h2>

            <p className="mt-2 text-gray-500">
              Try another category.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}