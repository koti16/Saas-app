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
  },
  {
    id: "countsy",
    name: "Countsy the Number Wizard",
    subject: "Math",
    category: "Math",
    description:
      "Make mathematics easier with step-by-step explanations.",
    color: "bg-yellow-200",
  },
  {
    id: "verba",
    name: "Verba the Vocabulary Builder",
    subject: "Language",
    category: "Language",
    description:
      "Improve vocabulary and communication skills.",
    color: "bg-blue-200",
  },

  // Coding
  {
    id: "python",
    name: "Pyra the Python Mentor",
    subject: "Python",
    category: "Coding",
    description:
      "Learn Python from fundamentals to advanced programming.",
    color: "bg-green-200",
  },
  {
    id: "java",
    name: "Javon the Java Mentor",
    subject: "Java",
    category: "Coding",
    description:
      "Master Java with practical examples and coding challenges.",
    color: "bg-orange-200",
  },
  {
    id: "cpp",
    name: "Cody the C++ Hacker",
    subject: "C++",
    category: "Coding",
    description:
      "Learn C++, OOP, STL, and problem-solving techniques.",
    color: "bg-indigo-200",
  },
  {
    id: "javascript",
    name: "Juno the JavaScript Guide",
    subject: "JavaScript",
    category: "Coding",
    description:
      "Build your JavaScript skills for modern web development.",
    color: "bg-yellow-300",
  },
  {
    id: "typescript",
    name: "Typeon the TypeScript Mentor",
    subject: "TypeScript",
    category: "Coding",
    description:
      "Learn TypeScript and write safer modern JavaScript applications.",
    color: "bg-blue-300",
  },
  {
    id: "sql",
    name: "Quanta the SQL Analyst",
    subject: "SQL",
    category: "Coding",
    description:
      "Learn SQL, queries, joins, databases, and data analysis.",
    color: "bg-cyan-200",
  },

  // Computer Science
  {
    id: "dsa",
    name: "Algo the Problem Solver",
    subject: "DSA",
    category: "Computer Science",
    description:
      "Practice data structures and algorithms from basics to advanced.",
    color: "bg-red-200",
  },
  {
    id: "ai-ml",
    name: "Astra the AI Mentor",
    subject: "AI & ML",
    category: "Computer Science",
    description:
      "Learn artificial intelligence and machine learning concepts.",
    color: "bg-violet-200",
  },
  {
    id: "dbms",
    name: "Data the Database Mentor",
    subject: "DBMS",
    category: "Computer Science",
    description:
      "Learn databases, normalization, transactions, indexing, and SQL.",
    color: "bg-emerald-200",
  },
  {
    id: "os",
    name: "Kernel the OS Mentor",
    subject: "Operating Systems",
    category: "Computer Science",
    description:
      "Understand processes, memory, storage, I/O, and operating systems.",
    color: "bg-pink-200",
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
    <main className="min-h-screen bg-white px-6 py-12">
      <section className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Learning Companions
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600">
            Choose an AI companion and start learning through
            real-time conversations.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
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

        {/* Companion Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCompanions.map((companion) => (
            <div
              key={companion.id}
              className={`rounded-2xl border p-6 ${companion.color}`}
            >
              <p className="mb-3 inline-block rounded-full bg-white px-3 py-1 text-xs font-medium">
                {companion.subject}
              </p>

              <h2 className="text-2xl font-bold">
                {companion.name}
              </h2>

              <p className="mt-3 text-sm text-gray-700">
                {companion.description}
              </p>

              <Link
                href={`/companions/${companion.id}`}
                className="mt-6 inline-block rounded-md bg-orange-500 px-5 py-2 font-semibold text-white hover:bg-orange-600"
              >
                Start Learning
              </Link>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCompanions.length === 0 && (
          <div className="py-20 text-center">
            <h2 className="text-xl font-semibold">
              No companions found
            </h2>

            <p className="mt-2 text-gray-500">
              Try selecting another category.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}