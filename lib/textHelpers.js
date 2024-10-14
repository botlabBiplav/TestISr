export const renderTextWithColor = (text) => {
  const parts = text.split(/("([^"]+)")/g); // Split by quotes

  const seenWords = new Set(); // To track duplicates
  const renderedParts = parts.map((part, index) => {
    // If part is a quoted string, add the Tailwind class
    if (part.startsWith('"') && part.endsWith('"')) {
      const word = part.replace(/"/g, ""); // Remove quotes
      if (!seenWords.has(word)) {
        seenWords.add(word); // Mark this word as seen
        part = part.replace(/"/g, "");

        return (
          <span
            key={index}
            className="font-golden-hopes text-8xl align-middle text-[#8409FF]"
          >
            {part}
          </span>
        );
      }
      return null; // Skip rendering if it's a duplicate
    }

    // Handle non-quoted parts, check for duplicates
    if (!seenWords.has(part.trim()) && part.trim() !== "") {
      seenWords.add(part.trim()); // Mark this part as seen
      return part; // Return the rest of the text as is
    }

    return null; // Skip rendering if it's a duplicate or empty
  });

  return renderedParts.filter(Boolean); // Remove null entries
};
