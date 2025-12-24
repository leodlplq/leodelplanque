import { getAllBlogPosts } from "@/lib/articles";
import Link from "next/link";

export default async function Home() {
  const blogPosts = await getAllBlogPosts();

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold">Blog</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <article
              key={post.slug}
              className=" border border-gray-200 dark:border-gray-800 rounded min-h-50 flex flex-col justify-between"
            >
              <div className="p-3">
                <h2 className="text-xl">{post.title}</h2>
                <p>{post.description}</p>
              </div>
              <div className="p-3 flex items-center justify-between mt-auto border-t border-gray-200 dark:border-gray-800">
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
    </div>
  );
}
