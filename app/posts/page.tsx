// app/posts/page.tsx
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
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-purple-900 text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-white text-center">📝 Blog Posts</h1>
      <ul className="space-y-6 max-w-3xl mx-auto">
        {posts?.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/posts/${post.slug}`}
              className="block bg-zinc-800 hover:bg-zinc-700 transition rounded-xl p-5"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-sm text-zinc-400 mt-1">
                {new Date(post.created_at).toLocaleDateString()}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
