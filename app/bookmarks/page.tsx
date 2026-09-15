import Link from "next/link";

const bookmarks = [
  {
    id: "python-functions",
    title: "Python Functions",
    companion: "Pyra the Python Mentor",
    subject: "Python",
    topic: "Functions and Parameters",
    saved: "Today",
  },
  {
    id: "java-oop",
    title: "Java OOP",
    companion: "Javon the Java Mentor",
    subject: "Java",
    topic: "Inheritance and Polymorphism",
    saved: "Yesterday",
  },
  {
    id: "sql-joins",
    title: "SQL Joins",
    companion: "Quanta the SQL Analyst",
    subject: "SQL",
    topic: "INNER JOIN and LEFT JOIN",
    saved: "3 days ago",
  },
  {
    id: "dsa-arrays",
    title: "Array Algorithms",
    companion: "Algo the Problem Solver",
    subject: "DSA",
    topic: "Two Sum and Kadane's Algorithm",
    saved: "5 days ago",
  },
];

export default function BookmarksPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <section className="mx-auto max-w-6xl">
        {/* Header */}
        <div>
          <p className="text-sm font-medium text-orange-500">
            Saved learning
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Bookmarks
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600">
            Quickly return to lessons and topics you want to
            review later.
          </p>
        </div>

        {/* Bookmarks */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {bookmarks.map((bookmark) => (
            <div
              key={bookmark.id}
              className="rounded-2xl border p-6 transition hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                    {bookmark.subject}
                  </span>

                  <h2 className="mt-4 text-xl font-bold">
                    {bookmark.title}
                  </h2>

                  <p className="mt-2 text-sm font-medium text-gray-700">
                    {bookmark.companion}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {bookmark.topic}
                  </p>
                </div>

                <button
                  type="button"
                  aria-label={`Remove ${bookmark.title} bookmark`}
                  className="text-xl text-orange-500 hover:text-black"
                >
                  ★
                </button>
              </div>

              <div className="mt-6 flex items-center justify-between border-t pt-4">
                <span className="text-xs text-gray-500">
                  Saved {bookmark.saved}
                </span>

                <Link
                  href="/companions"
                  className="text-sm font-semibold hover:underline"
                >
                  Review topic →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Explore */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/companions"
            className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
          >
            Explore Companions
          </Link>
        </div>
      </section>
    </main>
  );
}