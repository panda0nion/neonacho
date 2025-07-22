// app/api/posts/route.js
import { supabase } from "@/lib/supabase";

export async function POST(request) {
  const body = await request.json();
  const { title, slug, content } = body;

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
