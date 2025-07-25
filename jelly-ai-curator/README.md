# 🧠 Jelly AI Curator

**#ForTheLoveOfCode**  
An AI‑powered content curator built with n8n, GPT, and Reddit—designed to power neonacho.com with the *top‑3* daily highlight stories: one each for **Curiosity**, **Practical**, and **Future** themes (with solid fallback logic).

---

## 🚀 Project Overview

This system is built as part of GitHub’s *For the Love of Code* summer hackathon—a global, summer‑long celebration of joyful, ridiculous, and wildly creative coding projects 🎉  
Running from **July 16 to September 22, 2025**, the event invites developers at all levels to build something simply because it sparks joy and creativity on GitHub :contentReference[oaicite:1]{index=1}

Our project visualizes that spirit:
1. Fetch top posts from subreddits like `technology`, `ArtificialIntelligence`, `Futurology`
2. Use ChatGPT to tag each post with a **theme** (curiosity, practical, or future) and compute a **score** based on engagement + freshness
3. Choose 3 highlights—ideally one per theme, with fallback logic to ensure always‑on content
4. Output cards for the Neonacho front page or blog

This curator captures the playful and experimental vibe of *For the Love of Code*: simple, clever, and built just for the fun of building.

---

## 🧩 Structure & Files

| File | Purpose |
|------|---------|
| `workflows/reddit‑highlight.n8n.json` | The complete n8n workflow export |
| `prompts/tag‑and‑score‑prompt.md` | ChatGPT prompt template for filtering and scoring posts |
| `code‑snippets/pick‑top‑3‑with‑fallback.js` | The function code that selects your final three highlight posts |

---

## 🧠 Why It Fits the Hackathon Mission

- **Simple but smart**: all it does is fetch, score, and pick—it’s lightweight automation with a sense of discovery  
- **Innovative**: blends social media data with AI for storytelling—automated editorial content  
- **Joyful code**: you’re building something that curates joy, insight, and future-focus every time it runs  

---

**Built with ❤️ by [@panda0nion](https://github.com/panda0nion)  
#ForTheLoveOfCode**
