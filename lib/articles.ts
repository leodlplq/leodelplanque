import fs from "fs";
import path from "path";
import { read } from "to-vfile";
import { matter } from "vfile-matter";

const postsDirectory = path.join(process.cwd(), "content");

export interface PostMetadata {
  title: string;
  description: string;
  date: string;
  author?: string;
  image?: string;
  slug: string;
}

export const getAllBlogPosts = async (): Promise<PostMetadata[]> => {
  const fileNames = fs.readdirSync(postsDirectory);

  console.log(fileNames);

  const allPostsPromises = fileNames
    .filter((file) => {
      return file.endsWith(".mdx") || file.endsWith(".md");
    })
    .map(async (fileName) => {
      const slug = fileName.replace(/\.mdx?$/, ""); // Handle both .md and .mdx
      const fullPath = path.join(postsDirectory, fileName);

      const file = await read(fullPath);
      matter(file);

      const matterInformation: PostMetadata = file.data.matter as PostMetadata;

      return {
        slug,
        title: matterInformation?.title,
        description: matterInformation?.description,
        date: matterInformation?.date,
        author: matterInformation?.author,
        image: matterInformation?.image,
      } as PostMetadata;
    });

  // Wait for all promises to resolve
  const allPosts = await Promise.all(allPostsPromises);

  return allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

export const getAllBlogPostSlugs = async (): Promise<{ slug: string }[]> => {
  const allPosts = await getAllBlogPosts();
  return allPosts.map((post) => ({ slug: post.slug }));
};
