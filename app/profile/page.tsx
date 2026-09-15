import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <section className="mx-auto max-w-4xl">
        <div className="rounded-3xl border-2 border-black bg-white p-8 md:p-10">
          {/* Profile Header */}
          <div className="flex flex-col items-center text-center">
            <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gray-100">
              <span className="text-3xl font-bold text-gray-700">
                U
              </span>
            </div>

            <h1 className="mt-5 text-3xl font-bold">
              Your Profile
            </h1>

            <p className="mt-2 text-gray-500">
              Manage your learning profile and preferences.
            </p>
          </div>

          {/* Profile Information */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border p-5">
              <p className="text-sm text-gray-500">
                Full Name
              </p>

              <p className="mt-2 font-semibold">
                Student User
              </p>
            </div>

            <div className="rounded-2xl border p-5">
              <p className="text-sm text-gray-500">
                Email Address
              </p>

              <p className="mt-2 font-semibold">
                student@example.com
              </p>
            </div>

            <div className="rounded-2xl border p-5">
              <p className="text-sm text-gray-500">
                Learning Goal
              </p>

              <p className="mt-2 font-semibold">
                Learn programming and AI
              </p>
            </div>

            <div className="rounded-2xl border p-5">
              <p className="text-sm text-gray-500">
                Favorite Subject
              </p>

              <p className="mt-2 font-semibold">
                Computer Science
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-purple-100 p-5 text-center">
              <p className="text-2xl font-bold">23</p>
              <p className="mt-1 text-sm text-gray-600">
                Lessons
              </p>
            </div>

            <div className="rounded-2xl bg-yellow-100 p-5 text-center">
              <p className="text-2xl font-bold">10</p>
              <p className="mt-1 text-sm text-gray-600">
                Companions
              </p>
            </div>

            <div className="rounded-2xl bg-blue-100 p-5 text-center">
              <p className="text-2xl font-bold">7</p>
              <p className="mt-1 text-sm text-gray-600">
                Day Streak
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/my-journey"
              className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
            >
              My Journey
            </Link>

            <Link
              href="/companions"
              className="rounded-xl border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50"
            >
              Explore Companions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}