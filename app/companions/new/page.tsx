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
  "Other",
];

export default function NewCompanionPage() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log({
      name,
      subject,
      topic,
      description,
    });
  }

  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <section className="mx-auto max-w-4xl">
        <Link
          href="/companions"
          className="text-sm font-medium text-gray-500 hover:text-black"
        >
          ← Back to companions
        </Link>

        <div className="mt-8">
          <p className="text-sm font-medium text-orange-500">
            Create your own AI teacher
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Companion Builder
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600">
            Create a personalized AI learning companion for any
            subject or programming language.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-3xl border-2 border-black bg-white p-6 md:p-8"
        >
          {/* Name */}
          <div>
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
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
              required
            />
          </div>

          {/* Subject */}
          <div className="mt-6">
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
          <div className="mt-6">
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

          {/* Description */}
          <div className="mt-6">
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
              placeholder="Describe what this AI companion should teach..."
              rows={5}
              className="mt-2 w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
              required
            />
          </div>

          {/* Preview */}
          <div className="mt-8 rounded-2xl bg-gray-50 p-6">
            <p className="text-sm font-medium text-gray-500">
              Preview
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              {name || "Your AI Companion"}
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              {subject || "Subject"} · {topic || "Topic"}
            </p>

            <p className="mt-4 text-sm text-gray-600">
              {description ||
                "Your companion description will appear here."}
            </p>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="submit"
              className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
            >
              Create Companion
            </button>

            <Link
              href="/companions"
              className="rounded-xl border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50"
            >
              Cancel
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}