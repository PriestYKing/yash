import Link from "next/link";
import Image from "next/image";

export default function AdvancedGoConcurrency() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <Image
          src="/images/go-concurrency-hero.svg"
          width={800}
          height={200}
          alt="Go Concurrency"
          className="rounded-md mb-6"
        />

        <h1 className="text-2xl font-semibold mb-4">
          Advanced Go Concurrency Patterns
        </h1>
        <p className="text-gray-400 mb-4">Sep 15, 2024 • Go • Concurrency</p>

        <article className="prose prose-invert text-gray-200">
          <p>
            Go's concurrency primitives are lightweight, but building robust,
            observable systems requires a few patterns: worker pools, explicit
            cancellation, and clear error handling.
          </p>

          <h2>Worker Pools</h2>
          <p>
            Worker pools limit concurrency and make resource usage predictable.
            Below is a simple example showing a bounded worker pool and a jobs
            channel.
          </p>

          <pre className="bg-gray-900 p-4 rounded text-sm overflow-auto">
            <code>{`func startWorkers(ctx context.Context, n int, jobs <-chan Job) {
  var wg sync.WaitGroup
  wg.Add(n)
  for i := 0; i < n; i++ {
    go func() {
      defer wg.Done()
      for {
        select {
        case <-ctx.Done():
          return
        case job, ok := <-jobs:
          if !ok { return }
          process(job)
        }
      }
    }()
  }
  wg.Wait()
}`}</code>
          </pre>

          <h2>Context and Cancellation</h2>
          <p>
            Always accept `context.Context` in public functions and respect
            cancellation. That prevents goroutine leaks and makes shutdowns
            deterministic.
          </p>

          <pre className="bg-gray-900 p-4 rounded text-sm overflow-auto">
            <code>{`func fetch(ctx context.Context, url string) ([]byte, error) {
  req, _ := http.NewRequestWithContext(ctx, "GET", url, nil)
  resp, err := http.DefaultClient.Do(req)
  if err != nil { return nil, err }
  defer resp.Body.Close()
  return io.ReadAll(resp.Body)
}`}</code>
          </pre>

          <h2>Observability</h2>
          <p>
            Instrument long-running workers with metrics (task duration, queue
            length) and add structured logs around start/finish/error to make
            issues obvious in production.
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
