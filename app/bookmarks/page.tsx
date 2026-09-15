"use client";

import Link from "next/link";
import { useState } from "react";

const initialBookmarks = [
  {
    id: "python-functions",
    title: "Python Functions",
    companion: "Pyra the Python Mentor",
    subject: "Python",
    topic: "Functions and Parameters",
    saved: "Today",
    color: "bg-green-200",
    avatar: "P",
    href: "/companions/python",
  },
  {
    id: "java-oop",
    title: "Java OOP",
    companion: "Javon the Java Mentor",
    subject: "Java",
    topic: "Inheritance and Polymorphism",
    saved: "Yesterday",
    color: "bg-orange-200",
    avatar: "J",
    href: "/companions/java",
  },
  {
    id: "sql-joins",
    title: "SQL Joins",
    companion: "Quanta the SQL Analyst",
    subject: "SQL",
    topic: "INNER JOIN and LEFT JOIN",
    saved: "3 days ago",
    color: "bg-cyan-200",
    avatar: "Q",
    href: "/companions/sql",
  },
  {
    id: "dsa-arrays",
    title: "Array Algorithms",
    companion: "Algo the Problem Solver",
    subject: "DSA",
    topic: "Two Sum and Kadane's Algorithm",
    saved: "5 days ago",
    color: "bg-red-200",
    avatar: "A",
    href: "/companions/dsa",
  },
];

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState(initialBookmarks);

  function removeBookmark(id: string) {
    setBookmarks((current) =>
      current.filter((bookmark) => bookmark.id !== id)
    );
  }

  return (
    <main className="min-h-screen bg-white px-4 py-8 sm:px-6 sm:py-12">
      <section className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-orange-500">
              Saved learning
            </p>

            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Bookmarks
            </h1>

            <p className="mt-3 max-w-2xl text-gray-600">
              Keep important lessons and topics saved for quick
              revision later.
            </p>
          </div>

          <Link
            href="/companions"
            className="rounded-xl bg-orange-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-orange-600"
          >
            Explore Companions
          </Link>
        </div>

        {/* Count */}
        <div className="mt-8">
          <p className="text-sm text-gray-500">
            {bookmarks.length} saved topic
            {bookmarks.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Bookmarks */}
        {bookmarks.length > 0 ? (
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {bookmarks.map((bookmark) => (
              <article
                key={bookmark.id}
                className="rounded-3xl border-2 border-black bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-black ${bookmark.color} font-bold`}
                    >
                      {bookmark.avatar}
                    </div>

                    <div className="min-w-0">
                      <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                        {bookmark.subject}
                      </span>

                      <h2 className="mt-3 text-xl font-bold">
                        {bookmark.title}
                      </h2>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeBookmark(bookmark.id)}
                    aria-label={`Remove ${bookmark.title} bookmark`}
                    className="shrink-0 text-2xl text-orange-500 transition hover:scale-110 hover:text-black"
                  >
                    ★
                  </button>
                </div>

                <p className="mt-5 text-sm font-medium text-gray-700">
                  {bookmark.companion}
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {bookmark.topic}
                </p>

                <div className="mt-6 flex flex-col gap-4 border-t pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-xs text-gray-500">
                    Saved {bookmark.saved}
                  </span>

                  <Link
                    href={bookmark.href}
                    className="text-sm font-semibold hover:underline"
                  >
                    Review topic →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="mt-8 rounded-3xl border-2 border-dashed border-gray-300 px-6 py-16 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
              ★
            </div>

            <h2 className="mt-5 text-2xl font-bold">
              No bookmarks yet
            </h2>

            <p className="mx-auto mt-2 max-w-md text-gray-500">
              Save lessons you want to revisit and they'll appear
              here.
            </p>

            <Link
              href="/companions"
              className="mt-6 inline-block rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
            >
              Find Something to Learn
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}