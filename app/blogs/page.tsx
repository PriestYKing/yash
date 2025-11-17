import Link from "next/link";

export default function BlogsPage() {
  const posts = [
    {
      title: "Getting Productive with Spring Boot: Practical Guide",
      href: "/blogs/intro-to-springboot",
      date: "Mar 11, 2025",
    },
    {
      title: "Advanced Go Concurrency Patterns",
      href: "/blogs/advanced-go-concurrency",
      date: "Sep 15, 2024",
    },
    {
      title: "Next.js Performance: From Good to Great",
      href: "/blogs/nextjs-performance",
      date: "Aug 25, 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold mb-6">Blog</h1>

        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="block p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium text-gray-100">
                  {post.title}
                </div>
                <div className="text-sm text-gray-500">{post.date}</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/" className="text-gray-400 hover:text-gray-200">
            ← Back
          </Link>
        </div>
      </div>
    </div>
  );
}
