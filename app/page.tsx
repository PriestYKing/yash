import { MapPin, Briefcase, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const blogPosts = [
    {
      title: "Getting Productive with Spring Boot: Practical Guide",
      slug: "intro-to-springboot",
      date: "Mar 11, 2025",
      excerpt:
        "A concise, practical guide to structuring Spring Boot apps for speed and maintainability.",
    },
    {
      title: "Advanced Go Concurrency Patterns",
      slug: "advanced-go-concurrency",
      date: "Sep 15, 2024",
      excerpt:
        "Real-world concurrency patterns and pitfalls when building high-throughput Go services.",
    },
    {
      title: "Next.js Performance: From Good to Great",
      slug: "nextjs-performance",
      date: "Aug 25, 2024",
      excerpt:
        "Tactics to squeeze milliseconds out of your Next.js apps — image, cache, and render strategies.",
    },
  ];

  const projects = [
    {
      name: "blitzcache",
      stars: null,
      description:
        "BlitzCache is a blazingly fast in-memory cache built in Go that drops straight into your stack as a Redis replacement, delivering 10M+ operations per second with sub-millisecond latency. With 256-way sharding and zero dependencies, it's production-ready out of the box as both a library and standalone server.",
      link: "https://github.com/PriestYKing/blitzcache",
    },
    {
      name: "osmosis",
      stars: null,
      description:
        "Osmosis transforms your GitHub commit history into digestible summaries using a modern T3 Stack architecture with Next.js and TypeScript. Built with type-safety in mind through tRPC and Prisma, it streamlines code review and project documentation workflows.",
      link: "https://github.com/PriestYKing/osmosis",
    },
    {
      name: "url-shortener",
      stars: null,
      description:
        "URL_Shortener combines the speed of Go with the elegance of Next.js to create lightning-fast short links with sub-200ms response times and beautiful real-time analytics. Fully containerized and mobile-responsive, it offers customizable URLs, expiration controls, and a sleek modern interface powered by Redis for optimal performance.",
      link: "https://github.com/PriestYKing/URL_Shortener",
    },
    {
      name: "coil",
      stars: null,
      description:
        "Coil Inc is a beautiful, modern alternative to Postman built with Tauri and Next.js that brings API testing to the desktop with blazing-fast performance and a stunning shadcn UI. It features intelligent JSON beautification, collection management, multi-tab workflows, and complete request/response handling in a lightweight, cross-platform package.",
      link: "https://github.com/PriestYKing/coilinc",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-2xl font-semibold">Yash</h1>
          <div className="flex items-center gap-4">
            <Link href="https://x.com/https_200">
              {" "}
              <Image src="/xxx.png" width={20} height={20} alt="X.com" />
            </Link>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mb-12">
          <p className="text-gray-300 text-lg mb-6">
            Hey, I'm Yash—a software engineer building refined experiences on
            the web.
          </p>

          <div className="space-y-2 text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span className="italic">Indore, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase size={16} />
              <span className="italic">Currently @Infosys</span>
            </div>
          </div>

          <p className="text-gray-300 mt-6">
            I'm a Java Springboot, Typescript, Go enthusiast. I love building
            tools for developers and generally care too much about attention to
            detail.
          </p>
        </div>

        {/* Blog Section */}
        <div className="mb-12">
          <h2 className="text-xl font-medium mb-6">Blog</h2>
          <div className="space-y-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="block p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-gray-100 font-medium">{post.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{post.excerpt}</p>
                  </div>
                  <div className="flex items-center text-right ml-4">
                    <ExternalLink size={16} className="text-gray-500 mt-1" />
                    <div className="text-gray-500 text-sm mt-2">
                      {post.date}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-12">
          <h2 className="text-xl font-medium mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-medium text-white">
                    <Link
                      className="hover:transition-all pb-1 border-b-2 border-transparent hover:border-b-white"
                      href={project.link}
                    >
                      {project.name}
                    </Link>
                  </h3>
                  {project.stars && (
                    <div className="flex items-center gap-1 text-yellow-400">
                      <span className="text-xs">★</span>
                      <span className="text-xs">{project.stars}</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center gap-8 pt-8 border-t border-gray-800">
          <a
            href="https://github.com/PriestYKing"
            className="text-gray-500 hover:text-gray-300 transition-colors"
          >
            Github
          </a>
          <a
            href="https://in.linkedin.com/in/yash-patidar-161185184"
            className="text-gray-500 hover:text-gray-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="yash.patidar12@gmail.com"
            className="text-gray-500 hover:text-gray-300 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
