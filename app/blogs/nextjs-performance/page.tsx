import Link from "next/link";
import Image from "next/image";

export default function NextjsPerformance() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <Image
          src="/images/nextjs-performance-hero.svg"
          width={800}
          height={200}
          alt="Next.js performance"
          className="rounded-md mb-6"
        />

        <h1 className="text-2xl font-semibold mb-4">
          Next.js Performance: From Good to Great
        </h1>
        <p className="text-gray-400 mb-4">
          Aug 25, 2024 • Next.js • Performance
        </p>

        <article className="prose prose-invert text-gray-200">
          <p>
            Improving a Next.js app is often about reducing work on the client,
            leveraging the edge/CDN, and caching smartly. Below are practical
            examples you can apply today.
          </p>

          <h2>Prefer Server Components & Static Render</h2>
          <p>
            Where possible, render on the server so the client receives HTML
            ready-to-paint. This reduces hydration cost and improves LCP.
          </p>

          <h3>Example: fetch with revalidate</h3>
          <pre className="bg-gray-900 p-4 rounded text-sm overflow-auto">
            <code>{`// server component (app route)
const res = await fetch('https://api.example.com/posts', { next: { revalidate: 60 } });
const posts = await res.json();`}</code>
          </pre>

          <h2>Cache-Control and CDN</h2>
          <p>
            Use long cache lifetimes for immutable assets and set appropriate
            cache headers for dynamic responses. When using ISR or revalidate,
            Next.js will handle background regeneration for you.
          </p>

          <h3>Small image optimization tip</h3>
          <p className="text-gray-300">
            Use Next/Image to serve optimized formats and sizes.
          </p>

          <h2>Measure and Iterate</h2>
          <p>
            Use Lighthouse, WebPageTest, and real-user metrics (RUM) to find the
            biggest wins. Focus on LCP, TTFB, and CLS when prioritizing work.
          </p>

          <p className="mt-6">
            <Link href="/blogs" className="text-gray-300">
              ← Back to posts
            </Link>
          </p>
        </article>
      </div>
    </div>
  );
}
