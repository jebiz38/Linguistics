"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to auth provider
  }

  return (
    <main className="flex min-h-dvh items-center justify-center bg-navy px-4 py-16 sm:px-6">
      <div className="w-full max-w-md">
        <div className="text-center">
          <Link
            href="/"
            className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold sm:text-xs"
          >
            Scientific Language Academy
          </Link>
          <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-white/70">
            Sign in to continue your learning.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5 rounded-2xl border border-white/10 bg-navy-deep p-6 sm:p-8"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-wider text-gold"
            >
              Email
            </label>
            <div className="relative mt-2">
              <Mail
                className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-white/40"
                aria-hidden
              />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-12 w-full rounded-full border border-white/10 bg-white/5 pl-11 pr-4 text-sm text-white placeholder:text-white/40 transition focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-xs font-semibold uppercase tracking-wider text-gold"
              >
                Password
              </label>
              <Link
                href="#"
                className="text-xs text-white/60 transition hover:text-gold"
              >
                Forgot?
              </Link>
            </div>
            <div className="relative mt-2">
              <Lock
                className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-white/40"
                aria-hidden
              />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="h-12 w-full rounded-full border border-white/10 bg-white/5 pl-11 pr-12 text-sm text-white placeholder:text-white/40 transition focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 transition hover:text-white"
              >
                {showPassword ? (
                  <EyeOff className="size-5" aria-hidden />
                ) : (
                  <Eye className="size-5" aria-hidden />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-gold px-8 text-sm font-semibold text-navy transition hover:bg-gold/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-white/70">
          New here?{" "}
          <Link href="#" className="font-semibold text-gold hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </main>
  );
}
