import Link from "next/link";

interface Titles {
    title: string;
    slug: string;
}

export default async function BlogPage() {
    const posts: Titles[] = await fetch('http://localhost:3000/api/content/').then((res) => res.json());

    return (
        <div className="flex flex-col justify-center p-24">
            <h1 className="bg-primary">Blog Posts</h1>
            {posts.map((post) => (
                <div className="hover:bg-blue-700 hover:border-2 border-white pl-2">
                    <Link href={`/blog/${post.slug}`} key={post.slug}>
                    {post.title}
                </Link>
                </div>
                
            ))}
        </div>
    );
}