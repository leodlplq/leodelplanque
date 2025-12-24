import { getAllBlogPosts } from "@/lib/articles";
import Link from "next/link";

export default async function Home() {
  const blogPosts = await getAllBlogPosts();

  return (
    <div className="flex min-h-screen justify-center  font-sans bg-zinc-50 dark:bg-gray-950">
      <main className="flex h-full w-full max-w-3xl flex-col py-20 px-0">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-2xl font-black">Hello from Léo 🌸</h1>
          <span className="text-sm border border-blue-600/20 bg-blue-500/10 flex items-center justify-center px-2 py-1 rounded">
            🗼 Paris
          </span>
        </div>

        <p className="text-sm">
          Currently working at{" "}
          <a
            className="text-blue-300 hover:text-blue-400 underline"
            href="https://fentech.ai"
            target="_blank"
          >
            Fentech
          </a>{" "}
          as a Frontend Software Engineer
        </p>

        <br />
        <p>
          This is my personal website, hoping to share some thoughts with you.
        </p>

        <hr className="my-10" />

        <section className="space-x-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article
                key={post.slug}
                className="p-3 border border-white rounded"
              >
                <h2 className="text-xl">{post.title}</h2>
                <p>{post.description}</p>
                <div className="flex items-center justify-between">
                  <time className="text-xs" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  {post.author && <p className="text-xs">by {post.author}</p>}
                </div>
              </article>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
