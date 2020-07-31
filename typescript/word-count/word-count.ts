class Words {
  count(words: string): Map<string, number> {
    const trimmedWords = words.toLowerCase().match(/p{L}+/g) as string[];
    return trimmedWords.reduce((acc: Map<string, number>, curr: string) => {
      if (!acc.has(curr)) {
        acc.set(curr, 1);
      } else {
        acc.set(curr, (acc.get(curr) as number) + 1);
      }

      return acc;
    }, new Map());
  }
}

export default Words;
