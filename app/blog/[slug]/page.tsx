import { getPostBySlug, getPostSlugs } from "@/lib/utils/posts";
import Blog from "@/components/ui/blog";

type PageProps = {
  params: { slug: string };
};

export const dynamic = "error";

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  return (
        <Blog post={post} />    
  );
}
