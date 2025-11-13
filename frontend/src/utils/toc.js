// Simple markdown headings extractor (supports ##, ###)
export function extractHeadings(markdown) {
  const lines = markdown.split("\n");
  const headings = [];
  for (let line of lines) {
    const match = line.match(/^(#{2,4})\s+(.*)/); // h2-h4
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text.toLowerCase().replace(/[^\w ]+/g, "").replace(/\s+/g, "-");
      headings.push({ id, level, text });
    }
  }
  return headings;
}
