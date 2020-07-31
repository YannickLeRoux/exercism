import { lookup } from 'dns';

type DNA = 'G' | 'C' | 'T' | 'A';
type RNA = 'C' | 'G' | 'A' | 'U';

const nucleotidesMapping: Record<DNA, RNA> = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

class Transcriptor {
  // isDNA(dna: string): dna is DNA {
  //   const regEx = /^([G|C|T|A]*)$/g;
  //   return regEx.test(dna);
  // }

  isDNA(nucleo: string): nucleo is DNA {
    return nucleotidesMapping[(nucleo as DNA)] != undefined;
  }

  toRna(dna: string): string {
    if (dna.split('').some(!this.isDNA) {
      throw new Error('Invalid input DNA.');
    } else {
      return dna
        .split('')
        .map((char: DNA) => nucleotidesMapping[char])
        .join('');
    }
  }
}

export default Transcriptor;
