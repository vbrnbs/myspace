import Link from "next/link";

export const revlidate = 420;

interface Post {
  title: string;
  slug: string;
  content: string;
}

interface Props {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: Props) {
  const posts: Post[] = await fetch("http://localhost:3000/api/content/").then(
    (res) => res.json()
  );
  const post = posts.find((post) => post.slug === params.slug)!;
  return (
    <div className="flex flex-col justify-center p-24">
      <Link href="/blog" className="hover:underline text-xs">back</Link>
      <div className="mt-4">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    </div>
  );
}
