import Link from "next/link";
import Image from "next/image";

export default function IntroToSpringBoot() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <Image
          src="/images/springboot-hero.svg"
          width={800}
          height={200}
          alt="Spring Boot"
          className="rounded-md mb-6"
        />

        <h1 className="text-2xl font-semibold mb-4">
          Getting Productive with Spring Boot
        </h1>
        <p className="text-gray-400 mb-4">Mar 11, 2025 • Java • Spring Boot</p>

        <article className="prose prose-invert text-gray-200">
          <p>
            Spring Boot helps you ship services quickly while keeping the
            codebase maintainable. Below are a few practical tips I use
            day-to-day to improve developer productivity without sacrificing
            reliability.
          </p>

          <h2>Opinionated Project Structure</h2>
          <p>
            Organize code by feature, not just layer. For example: `user`
            contains `UserController`, `UserService`, `UserRepository` and
            related DTOs. This makes it easier to reason about changes and
            onboard new team members.
          </p>

          <h3>Example Controller</h3>
          <pre className="bg-gray-900 p-4 rounded text-sm overflow-auto">
            <code>{`@RestController
@RequestMapping("/api/users")
public class UserController {
  private final UserService service;

  public UserController(UserService service) { this.service = service; }

  @GetMapping("/{id}")
  public ResponseEntity&lt;UserDto&gt; get(@PathVariable Long id) {
    return ResponseEntity.ok(service.getUser(id));
  }
}`}</code>
          </pre>

          <h2>Configuration & Profiles</h2>
          <p>
            Keep environment-specific values in{" "}
            <code>application-&lt;profile&gt;.yml</code> and bind them to typed
            `@ConfigurationProperties` classes for safer refactors and
            autocompletion.
          </p>

          <h3>Sample properties</h3>
          <pre className="bg-gray-900 p-4 rounded text-sm overflow-auto">
            <code>{`server:
  port: 8080
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/app`}</code>
          </pre>

          <h2>Testing Strategy</h2>
          <p>
            Prefer fast slice tests for controllers and repositories, and a
            small set of full integration tests for critical flows. Mock
            external systems and use Testcontainers when you need realistic
            dependencies.
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
