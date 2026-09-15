import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "₹0",
    description: "Everything you need to start learning.",
    features: [
      "Access to learning companions",
      "Basic AI conversations",
      "Session history",
      "Bookmarks",
    ],
    button: "Current Plan",
    featured: false,
  },
  {
    name: "Pro",
    price: "₹499",
    description: "For learners who want more from Converso.",
    features: [
      "Unlimited AI conversations",
      "Advanced learning companions",
      "Detailed learning progress",
      "Priority AI responses",
      "Custom companion creation",
    ],
    button: "Upgrade",
    featured: true,
  },
];

export default function SubscriptionPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <section className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-medium text-orange-500">
            Plans
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            Choose your learning plan
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Start learning for free or upgrade when you need
            more powerful learning features.
          </p>
        </div>

        {/* Plans */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border-2 p-8 ${
                plan.featured
                  ? "border-black bg-orange-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              {plan.featured && (
                <span className="inline-block rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                  Recommended
                </span>
              )}

              <h2 className="mt-4 text-2xl font-bold">
                {plan.name}
              </h2>

              <p className="mt-2 text-sm text-gray-600">
                {plan.description}
              </p>

              <div className="mt-6">
                <span className="text-4xl font-bold">
                  {plan.price}
                </span>

                {plan.name !== "Free" && (
                  <span className="ml-2 text-sm text-gray-500">
                    / month
                  </span>
                )}
              </div>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-sm text-green-700">
                      ✓
                    </span>

                    <span className="text-sm text-gray-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className={`mt-8 w-full rounded-xl px-6 py-3 font-semibold ${
                  plan.featured
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "border border-gray-300 bg-white hover:bg-gray-50"
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>

        {/* Back */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/dashboard"
            className="font-semibold hover:underline"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}