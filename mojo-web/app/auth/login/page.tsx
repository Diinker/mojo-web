"use client";

import { useRouter } from "next/navigation";

export default function LogIn() {
  const router = useRouter();
  
  const signIn = () => {
    router.push('/dashboard');
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-10 shadow-xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-beyonders text-4xl tracking-tighter text-gray-900">
            MOJO
          </h2>
          <p className="font-nature mt-5 text-sm text-gray-600">
            Welcome back! Please enter your details.
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4 rounded-md">
            <div>
              <label htmlFor="email-address" className="font-nature-light block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="font-nature-light block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 font-nature-light">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-black hover:underline font-nature">
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="font-coolvetica relative flex w-full justify-center rounded-lg bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors"
              onClick={signIn}
            >
              Sign in
            </button>
          </div>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 font-nature-light">
          Don&apos;t have an account?{' '}
          <a href="/auth/register" className="font-semibold leading-6 text-black hover:underline">
            Sign up for free
          </a>
        </p>
      </div>
    </div>
  );
}