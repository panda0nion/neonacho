// app/api/posts/route.js
import { supabase } from "@/lib/supabase";

// Utility to clean up slugs from titles
function cleanSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')         // Replace spaces with dashes
    .replace(/^-+|-+$/g, '');     // Trim leading/trailing dashes
}

export async function POST(request) {
  const body = await request.json();
  const { title, content } = body;

  const slug = cleanSlug(title);

  const { error } = await supabase.from("posts").insert([{ title, slug, content }]);

  if (error) {
    console.error("❌ Supabase insert error:", error);
    return new Response("Failed to save post", { status: 500 });
  }

  return new Response(JSON.stringify({ status: "ok", slug }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
