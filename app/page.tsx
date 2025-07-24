'use client';
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import Link from "next/link";
import Badges from "./components/Badges";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, Linkedin, FileText } from "lucide-react";

type Post = {
  title: string;
  slug: string;
  created_at: string;
};

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Neonacho() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      // fetch posts from Supabase
      const { data } = await supabase
        .from("posts")
        .select("title, slug, created_at")
        .order("created_at", { ascending: false })
        .limit(3); // ← limit to 3
      setPosts(data || []);
    };
    fetchPosts(); // Fetch posts on component mount
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-purple-900 text-white p-6 flex flex-col items-center justify-center space-y-10">

      <motion.h1
        className="text-green-400 font-mono text-sm md:text-base leading-tight whitespace-pre-wrap text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
      {String.raw`
      █▄░█ █▀▀ █▀█ █▄░█ ▄▀█ █▀▀ █▄█ █▀█
      █░▀█ ██▄ █▄█ █░▀█ █▀█ █▄▄ █░█ █▄█
      `}
      </motion.h1>
      <motion.p
        className="text-xl text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Crunchy on the outside. Cloud-native on the inside.
      </motion.p>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button className="border border-white text-white border-white hover:bg-white hover:text-black">
            <FileText className="mr-2 h-4 w-4" /> Resume
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/fixguy" target="_blank" rel="noopener noreferrer">
          <Button className="border border-white text-white hover:bg-white hover:text-black transition-colors duration-300">
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </Button>
        </a>
        <a href="mailto:patricklee@neonacho.com">
          <Button className="border border-white text-white border-white hover:bg-white hover:text-black">
            <Mail className="mr-2 h-4 w-4" /> Email
          </Button>
        </a>
      </div>

      {/* Minimal Blog Previews */}
      <div className="mt-10 w-full flex flex-wrap justify-center gap-4 max-w-4xl">
        {posts.length === 0 ? (
          <div className="text-zinc-400 text-center italic w-full">No posts yet — check back soon 🍥</div>
        ) : (
          posts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="w-64 bg-zinc-800 hover:bg-zinc-700 transition rounded-xl p-4"
            >
              <h2 className="text-white font-semibold text-lg">{post.title}</h2>
              <p className="text-sm text-zinc-400 mt-1">
                {new Date(post.created_at).toLocaleDateString()}
              </p>
            </Link>
          ))
        )}
      </div>

      {/* View All Button */}
      <div className="mt-6 text-center">
        <Link href="/posts">
          <button className="text-white px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition">
            View All Posts →
          </button>
        </Link>
      </div>
    </div>
  );
}
