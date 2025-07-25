// app/posts/[slug]/page.tsx
export const dynamic = 'force-dynamic';

import { createClient } from '@supabase/supabase-js';
import { notFound } from 'next/navigation';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', params.slug)
    .single();

  if (!post || error || !post.content) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-purple-950 text-white px-4 py-10">
      <article className="prose prose-invert max-w-3xl mx-auto">
        <h1>{post.title}</h1>
        <p className="text-sm text-zinc-400 mb-4">
          {new Date(post.created_at).toLocaleDateString()}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </main>
  );
}
