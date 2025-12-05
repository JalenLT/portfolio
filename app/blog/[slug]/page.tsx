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
    alternates: {
      canonical: `https://stefanseunarine.dev/blog/${params.slug}`,
    },
    keywords: post.tags?.join(", ") || "",
    author: "Stefan Seunarine",
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://stefanseunarine.dev/blog/${params.slug}`,
      type: "article",
      images: [
        {
          url: `https://stefanseunarine.dev/images/logo/lone_tree_logo_light.png`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`https://stefanseunarine.dev/images/logo/lone_tree_logo_light.png`],
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
        <Blog post={post} url={`https://stefanseunarine.dev/blog/${params.slug}`} />    
  );
}
