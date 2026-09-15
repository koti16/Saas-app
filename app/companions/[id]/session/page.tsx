"use client";

import { useState } from "react";
import Link from "next/link";

export default function SessionPage() {
  const [isListening, setIsListening] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <main className="min-h-screen bg-white px-4 py-6 sm:px-6 sm:py-8">
      <section className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="flex items-center justify-between">
          <Link
            href="/companions"
            className="text-sm font-medium text-gray-500 transition hover:text-black"
          >
            ← Back to companions
          </Link>

          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

            <span className="rounded-full bg-green-50 px-4 py-2 text-xs font-semibold text-green-700">
              Session Active
            </span>
          </div>
        </header>

        {/* Session Card */}
        <div className="mt-6 overflow-hidden rounded-3xl border-2 border-black bg-white">
          {/* Companion header */}
          <div className="border-b px-6 py-8 sm:px-10">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-purple-200 text-3xl font-bold">
                AI
              </div>

              <p className="mt-5 text-sm font-semibold text-orange-500">
                Science Companion
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Neura the Brainy Explorer
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
                Your AI learning companion is ready. Ask questions,
                discuss concepts, or use voice mode to learn naturally.
              </p>
            </div>
          </div>

          {/* Conversation */}
          <div className="min-h-[360px] space-y-5 bg-gray-50 px-5 py-6 sm:px-10 sm:py-8">
            {/* AI message */}
            <div className="flex justify-start">
              <div className="max-w-2xl rounded-2xl rounded-tl-md bg-white px-5 py-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-orange-500">
                  Neura
                </p>

                <p className="mt-2 leading-6 text-gray-700">
                  Welcome! What would you like to learn today?
                </p>
              </div>
            </div>

            {/* User message */}
            <div className="flex justify-end">
              <div className="max-w-2xl rounded-2xl rounded-tr-md bg-purple-100 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-purple-700">
                  You
                </p>

                <p className="mt-2 leading-6 text-gray-700">
                  I want to learn about neural networks.
                </p>
              </div>
            </div>

            {/* Helpful prompt */}
            <div className="flex justify-start">
              <div className="max-w-2xl rounded-2xl rounded-tl-md bg-white px-5 py-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-orange-500">
                  Neura
                </p>

                <p className="mt-2 leading-6 text-gray-700">
                  Great choice. Let's start with the basic idea:
                  a neural network learns patterns from examples.
                  Would you like to understand neurons first or
                  jump directly into how layers work?
                </p>
              </div>
            </div>
          </div>

          {/* Composer */}
          <div className="border-t bg-white p-5 sm:p-8">
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Ask your AI companion something..."
              rows={3}
              className="w-full resize-none rounded-2xl border border-gray-300 px-5 py-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-black"
            />

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={() => setIsListening(!isListening)}
                className={`rounded-xl border px-5 py-3 text-sm font-semibold transition ${
                  isListening
                    ? "border-black bg-black text-white"
                    : "border-gray-300 bg-white hover:bg-gray-50"
                }`}
              >
                {isListening ? "Stop Voice" : "Start Voice"}
              </button>

              <button
                type="button"
                className="rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* Session actions */}
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/session-history"
            className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold transition hover:bg-gray-50"
          >
            View Session History
          </Link>

          <Link
            href="/companions"
            className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold transition hover:bg-gray-50"
          >
            End Session
          </Link>
        </div>
      </section>
    </main>
  );
}