"use client";

import { useState } from "react";
import Link from "next/link";

const subjects = [
  "Science",
  "Math",
  "Language",
  "Python",
  "Java",
  "C++",
  "JavaScript",
  "TypeScript",
  "SQL",
  "DSA",
  "AI & ML",
  "DBMS",
  "Operating Systems",
];

const teachingStyles = [
  "Friendly",
  "Professional",
  "Encouraging",
  "Socratic",
];

const difficulties = [
  "Beginner",
  "Intermediate",
  "Advanced",
];

export default function NewCompanionPage() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("Beginner");
  const [teachingStyle, setTeachingStyle] = useState("Friendly");
  const [description, setDescription] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log({
      name,
      subject,
      topic,
      difficulty,
      teachingStyle,
      description,
    });
  }

  return (
    <main className="min-h-screen bg-white px-4 py-10 sm:px-6">
      <section className="mx-auto max-w-6xl">
        <Link
          href="/companions"
          className="text-sm font-medium text-gray-500 hover:text-black"
        >
          ← Back to companions
        </Link>

        <div className="mt-8">
          <p className="text-sm font-semibold text-orange-500">
            Build your AI teacher
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Companion Builder
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600">
            Create a personalized AI learning companion for any
            subject, programming language, or topic.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border-2 border-black p-6 sm:p-8"
          >
            <h2 className="text-2xl font-bold">
              Companion details
            </h2>

            {/* Name */}
            <div className="mt-6">
              <label
                htmlFor="name"
                className="text-sm font-semibold"
              >
                Companion Name
              </label>

              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Example: Codey the Java Mentor"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                required
              />
            </div>

            {/* Subject */}
            <div className="mt-5">
              <label
                htmlFor="subject"
                className="text-sm font-semibold"
              >
                Subject
              </label>

              <select
                id="subject"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                required
              >
                <option value="">Select a subject</option>

                {subjects.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Topic */}
            <div className="mt-5">
              <label
                htmlFor="topic"
                className="text-sm font-semibold"
              >
                Main Topic
              </label>

              <input
                id="topic"
                type="text"
                value={topic}
                onChange={(event) => setTopic(event.target.value)}
                placeholder="Example: Java OOP"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                required
              />
            </div>

            {/* Difficulty */}
            <div className="mt-5">
              <label
                htmlFor="difficulty"
                className="text-sm font-semibold"
              >
                Difficulty
              </label>

              <select
                id="difficulty"
                value={difficulty}
                onChange={(event) =>
                  setDifficulty(event.target.value)
                }
                className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
              >
                {difficulties.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Teaching style */}
            <div className="mt-5">
              <label
                htmlFor="teachingStyle"
                className="text-sm font-semibold"
              >
                Teaching Style
              </label>

              <select
                id="teachingStyle"
                value={teachingStyle}
                onChange={(event) =>
                  setTeachingStyle(event.target.value)
                }
                className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
              >
                {teachingStyles.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div className="mt-5">
              <label
                htmlFor="description"
                className="text-sm font-semibold"
              >
                Learning Goal
              </label>

              <textarea
                id="description"
                value={description}
                onChange={(event) =>
                  setDescription(event.target.value)
                }
                placeholder="What should this companion teach?"
                rows={5}
                className="mt-2 w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-7 w-full rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
            >
              Create Companion
            </button>
          </form>

          {/* Preview */}
          <div className="rounded-3xl border-2 border-black bg-gray-50 p-6 sm:p-8">
            <p className="text-sm font-semibold text-orange-500">
              Live Preview
            </p>

            <div className="mt-6 rounded-3xl bg-purple-200 p-6">
              <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold">
                {subject || "Subject"}
              </span>

              <h2 className="mt-5 text-3xl font-bold">
                {name || "Your AI Companion"}
              </h2>

              <p className="mt-3 text-gray-700">
                {topic || "Your main topic"}
              </p>

              <p className="mt-5 text-sm leading-6 text-gray-700">
                {description ||
                  "Your companion's learning goal will appear here."}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium">
                  {difficulty}
                </span>

                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium">
                  {teachingStyle}
                </span>
              </div>

              <div className="mt-8 rounded-xl bg-orange-500 px-5 py-3 text-center font-semibold text-white">
                Start Learning
              </div>
            </div>

            <div className="mt-6 rounded-2xl border bg-white p-5">
              <p className="text-sm font-semibold">
                Companion settings
              </p>

              <div className="mt-4 space-y-3 text-sm text-gray-600">
                <p>
                  Subject:{" "}
                  <span className="font-medium text-black">
                    {subject || "Not selected"}
                  </span>
                </p>

                <p>
                  Level:{" "}
                  <span className="font-medium text-black">
                    {difficulty}
                  </span>
                </p>

                <p>
                  Style:{" "}
                  <span className="font-medium text-black">
                    {teachingStyle}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}