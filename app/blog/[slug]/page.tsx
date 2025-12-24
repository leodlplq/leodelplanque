import { getAllBlogPostSlugs } from "@/lib/articles";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/${slug}.mdx`);

  return (
    <>
      <Post />
    </>
  );
}

export async function generateStaticParams() {
  return getAllBlogPostSlugs();
}

export const dynamicParams = false;
