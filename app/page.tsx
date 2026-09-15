import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center">
        <p className="mb-4 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-600">
          Real-time AI Teaching Platform
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
          Learn Smarter with
          <span className="text-purple-600"> AI Companions</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Learn through real-time conversations with AI-powered teaching
          companions designed to make every lesson interactive.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <Link
            href="/companions"
            className="rounded-md bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
          >
            Get Started
          </Link>

          <Link
            href="/sign-in"
            className="rounded-md border border-black px-6 py-3 font-semibold"
          >
            Sign In
          </Link>
        </div>

        <div className="mt-16 w-full max-w-5xl overflow-hidden rounded-2xl border">
         <Image
         src="/readme/hero.png"
        alt="Converso AI teaching platform"
        width={3600}
        height={1040}
        className="h-auto w-full"
        priority
         />
        </div>
      </section>
    </main>
  );
}