// app/api/posts/route.js
import { supabase } from "@/lib/supabase";

// Utility to clean up slugs from titles
function cleanSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-")         // Replace spaces with dashes
    .replace(/^-+|-+$/g, "");     // Trim leading/trailing dashes
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { title, content, excerpt, tags, coverUrl, publishedAt } = body;

    const slug = cleanSlug(title);

    const { data, error } = await supabase
      .from("posts")
      .upsert(
        {
          title,
          slug,
          content,
          excerpt: excerpt ?? null,
          tags: tags ?? [],
          cover_url: coverUrl ?? null,
          published_at: publishedAt ?? new Date().toISOString()
        },
        { onConflict: "slug" } // 👈 important: use slug to avoid duplicate error
      )
      .select()
      .single();

    if (error) {
      console.error("❌ Supabase upsert error:", error);
      return new Response(JSON.stringify({ ok: false, error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({ ok: true, post: data }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("❌ Unexpected error in /api/posts:", err);
    return new Response(JSON.stringify({ ok: false, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
