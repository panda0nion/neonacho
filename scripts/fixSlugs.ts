// scripts/fixSlugs.ts (or run inline in your dev environment)
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

function cleanSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function fixSlugs() {
  const { data: posts, error } = await supabase.from('posts').select('id, title, slug');

  if (error) {
    console.error('❌ Error fetching posts:', error);
    return;
  }

  for (const post of posts || []) {
    const fixedSlug = cleanSlug(post.title);

    if (fixedSlug !== post.slug) {
      const { error: updateError } = await supabase
        .from('posts')
        .update({ slug: fixedSlug })
        .eq('id', post.id);

      if (updateError) {
        console.error(`❌ Failed to update slug for post ID ${post.id}:`, updateError);
      } else {
        console.log(`✅ Updated slug for "${post.title}" to "${fixedSlug}"`);
      }
    }
  }

  console.log('🎉 Slug cleanup complete!');
}

fixSlugs();
