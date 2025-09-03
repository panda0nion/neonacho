// app/api/posts/route.js
import { supabase } from "@/lib/supabase";

const cleanSlug = s =>
  s.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");

export async function POST(request) {
  try {
    const body = await request.json(); // expects JSON
    const { title, content, excerpt, permalink, coverUrl, publishedAt, tags } = body;

    const payload = {
      title,
      slug: cleanSlug(title),
      content,
      excerpt: excerpt ?? null,
      permalink: permalink ?? null,        // 👈 now persisted
      published_at: publishedAt ?? new Date().toISOString(),
      tags: Array.isArray(tags) ? tags : []
    };

    if (typeof coverUrl !== "undefined") payload.cover_url = coverUrl; // 👈 conditional

    const { data, error } = await supabase
      .from("posts")
      .upsert(payload, { onConflict: "slug" })
      .select()
      .single();

    if (error) throw error;

    return new Response(JSON.stringify({ ok: true, post: data }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("POST /api/posts error:", err);
    return new Response(JSON.stringify({ ok: false, error: String(err.message || err) }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
