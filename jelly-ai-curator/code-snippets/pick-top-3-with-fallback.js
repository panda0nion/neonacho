# Create the pick-top-3-with-fallback.js file content
pick_top_3_code = """
const topByTheme = {
  curiosity: null,
  practical: null,
  future: null,
};

const usedIndexes = new Set();

// Step 1: Find top post per theme
for (let i = 0; i < items.length; i++) {
  const item = items[i];
  const { theme, score } = item.json;

  if (!topByTheme[theme] || score > topByTheme[theme].json.score) {
    topByTheme[theme] = item;
    usedIndexes.add(i);
  }
}

// Step 2: Add remaining highest-scoring posts as fallback (without duplicates)
const result = Object.values(topByTheme).filter(Boolean);

if (result.length < 3) {
  const fallbackItems = items
    .map((item, index) => ({ item, index }))
    .filter(({ index }) => !usedIndexes.has(index))
    .sort((a, b) => b.item.json.score - a.item.json.score);

  for (const { item } of fallbackItems) {
    if (result.length < 3) result.push(item);
    else break;
  }
}

return result;
"""

# Save the JS code to a file
file_path = "/mnt/data/pick-top-3-with-fallback.js"
with open(file_path, "w") as f:
    f.write(pick_top_3_code)

file_path  # Return path for download link in next step
