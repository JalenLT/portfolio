import { getPostBySlug, getPostSlugs } from "@/lib/utils/posts";
import Blog from "@/components/ui/blog";

type PageProps = {
  params: { slug: string };
};

export const dynamic = "error";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  return {
    title: `${post.title} | Stefan Seunarine`,
    description: post.description || "",
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://stefanseunarine.dev/blog/${params.slug}`,
      type: "article",
      images: [
        {
          url: `https://stefanseunarine.dev/og/${params.slug}.png`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`https://stefanseunarine.dev/og/${params.slug}.png`],
    },
  };
}

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
