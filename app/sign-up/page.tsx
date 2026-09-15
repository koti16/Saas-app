import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-white px-6 py-12">
      <div className="w-full max-w-md rounded-3xl border-2 border-black bg-white p-8 shadow-sm">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/logo.svg"
            alt="Converso"
            width={46}
            height={44}
          />

          <h1 className="mt-5 text-3xl font-bold">
            Create your Converso account
          </h1>

          <p className="mt-2 text-sm text-gray-600">
            Sign up to start learning with AI companions.
          </p>
        </div>

        <div className="mt-8">
          <button
            type="button"
            className="flex w-full items-center justify-center rounded-md border border-gray-300 px-4 py-3 text-sm font-medium hover:bg-gray-50"
          >
            Continue with Google
          </button>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs text-gray-500">or</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <label
            htmlFor="name"
            className="text-sm font-medium"
          >
            Full Name
          </label>

          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-black"
          />

          <label
            htmlFor="email"
            className="mt-4 block text-sm font-medium"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-black"
          />

          <button
            type="button"
            className="mt-4 w-full rounded-md bg-orange-500 px-4 py-3 font-semibold text-white hover:bg-orange-600"
          >
            Create Account
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="font-semibold text-orange-500 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}