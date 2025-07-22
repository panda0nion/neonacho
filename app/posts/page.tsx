import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function BlogIndex() {
  const { data: posts, error } = await supabase
    .from("posts")
    .select("title, slug, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return <p className="p-4 text-red-500">Error loading posts.</p>;
  }

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-white">📝 Blog Posts</h1>
      <ul className="space-y-4">
        {posts?.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/posts/${post.slug}`}
              className="text-purple-300 hover:underline text-lg"
            >
              {post.title}
            </Link>
            <div className="text-sm text-zinc-400">{new Date(post.created_at).toLocaleDateString()}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
