import { getAllBlogPostSlugs } from "@/lib/articles";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/${slug}.mdx`);

  return (
    <section className="p-4">
      <Post />
    </section>
  );
}

export async function generateStaticParams() {
  return getAllBlogPostSlugs();
}

export const dynamicParams = false;
