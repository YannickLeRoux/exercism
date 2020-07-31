type OldData = { [key: string]: string[] };
type ProcessedData = { [key: string]: number };

const transform = (oldData: OldData): ProcessedData => {
  const processedData: ProcessedData = {};

  Object.entries(oldData).forEach(([score, letters]) => {
    letters.forEach((letter) => {
      processedData[letter.toLowerCase()] = Number(score);
    });
  });
  return processedData;
};

export default transform;
