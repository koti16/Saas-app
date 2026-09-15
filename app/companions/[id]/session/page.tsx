"use client";

import { useState } from "react";
import Link from "next/link";

export default function SessionPage() {
  const [isListening, setIsListening] = useState(false);

  return (
    <main className="min-h-screen bg-white px-4 py-8 sm:px-6">
      <section className="mx-auto max-w-5xl">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <Link
            href="/companions"
            className="text-sm font-medium text-gray-500 hover:text-black"
          >
            ← Back
          </Link>

          <span className="rounded-full bg-green-100 px-4 py-2 text-xs font-semibold text-green-700">
            Session Active
          </span>
        </div>

        {/* Companion */}
        <div className="mt-8 rounded-3xl border-2 border-black bg-white p-6 sm:p-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-purple-200 text-3xl font-bold">
              AI
            </div>

            <p className="mt-5 text-sm font-medium text-orange-500">
              Science Companion
            </p>

            <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
              Neura the Brainy Explorer
            </h1>

            <p className="mt-3 max-w-2xl text-gray-600">
              I&apos;m ready to help you learn. Ask me a question or start
              speaking.
            </p>
          </div>

          {/* Conversation */}
          <div className="mt-10 space-y-4">
            <div className="flex justify-start">
              <div className="max-w-2xl rounded-2xl bg-gray-100 px-5 py-4">
                <p className="text-sm font-medium">Neura</p>
                <p className="mt-1 text-gray-700">
                  Welcome! What would you like to learn today?
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="max-w-2xl rounded-2xl bg-purple-100 px-5 py-4">
                <p className="text-sm font-medium">You</p>
                <p className="mt-1 text-gray-700">
                  I want to learn about neural networks.
                </p>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="mt-10">
            <textarea
              placeholder="Ask your AI companion something..."
              rows={3}
              className="w-full resize-none rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-black"
            />

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={() => setIsListening(!isListening)}
                className={`rounded-xl border px-5 py-3 font-semibold ${
                  isListening
                    ? "bg-black text-white"
                    : "bg-white"
                }`}
              >
                {isListening ? "Stop Listening" : "Start Voice"}
              </button>

              <button
                type="button"
                className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* Session controls */}
        <div className="mt-6 flex justify-center">
          <Link
            href="/companions"
            className="rounded-xl border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50"
          >
            End Session
          </Link>
        </div>
      </section>
    </main>
  );
}