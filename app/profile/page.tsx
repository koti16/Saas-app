import Link from "next/link";

const stats = [
  {
    value: "23",
    label: "Lessons Completed",
    className: "bg-purple-100",
  },
  {
    value: "10",
    label: "Companions Created",
    className: "bg-yellow-100",
  },
  {
    value: "18.5",
    label: "Learning Hours",
    className: "bg-blue-100",
  },
  {
    value: "7",
    label: "Day Streak",
    className: "bg-orange-100",
  },
];

const profileInfo = [
  {
    label: "Full Name",
    value: "Student User",
  },
  {
    label: "Email Address",
    value: "student@example.com",
  },
  {
    label: "Learning Goal",
    value: "Learn programming and AI",
  },
  {
    label: "Favorite Subject",
    value: "Computer Science",
  },
];

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-white px-4 py-8 sm:px-6 sm:py-12">
      <section className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-orange-500">
            Account
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Your Profile
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600">
            View your learning information, progress, and preferences.
          </p>
        </div>

        {/* Profile Card */}
        <div className="overflow-hidden rounded-3xl border-2 border-black bg-white">
          {/* Profile banner */}
          <div className="h-32 bg-purple-200 sm:h-40" />

          <div className="px-6 pb-8 sm:px-10 sm:pb-10">
            {/* Avatar + name */}
            <div className="-mt-12 flex flex-col items-start gap-5 sm:-mt-14 sm:flex-row sm:items-end">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-black text-3xl font-bold text-white shadow-sm sm:h-28 sm:w-28">
                U
              </div>

              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Student User
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Learner
                </p>
              </div>
            </div>

            {/* Information */}
            <div className="mt-10">
              <h3 className="text-xl font-bold">
                Profile Information
              </h3>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {profileInfo.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-gray-200 p-5"
                  >
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                      {item.label}
                    </p>

                    <p className="mt-2 font-semibold text-gray-900">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-10">
              <h3 className="text-xl font-bold">
                Learning Progress
              </h3>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className={`rounded-2xl p-5 ${stat.className}`}
                  >
                    <p className="text-3xl font-bold">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-sm text-gray-600">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/my-journey"
                className="rounded-xl bg-orange-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-orange-600"
              >
                View My Journey
              </Link>

              <Link
                href="/bookmarks"
                className="rounded-xl border border-gray-300 px-6 py-3 text-center font-semibold transition hover:bg-gray-50"
              >
                View Bookmarks
              </Link>

              <Link
                href="/companions"
                className="rounded-xl border border-gray-300 px-6 py-3 text-center font-semibold transition hover:bg-gray-50"
              >
                Explore Companions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}