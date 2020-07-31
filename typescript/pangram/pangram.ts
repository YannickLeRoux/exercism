const ALPHABET_LENGTH = 26;

class Pangram {
  constructor(public sentence: string) {}

  isPangram(): boolean {
    const set = new Set(this.sentence.toLowerCase().match(/[a-z]/g));
    return set.size === ALPHABET_LENGTH;
  }
}

export default Pangram;
