type Response = "Calm down, I know what I'm doing!" | 'Whoa, chill out!' | 'Sure.' | 'Fine. Be that way!' | 'Whatever.';

class Bob {
  isQuestion(str: string): boolean {
    return str.endsWith('?');
  }

  isShouting(str: string): boolean {
    return /[A-Z]/.test(str) && str == str.toUpperCase();
  }

  isSilence(str: string): boolean {
    return !str || /^\s+$/.test(str);
  }

  hey(words: string): Response {
    words = words.trim();

    if (this.isShouting(words)) {
      if (this.isQuestion(words)) {
        return "Calm down, I know what I'm doing!";
      } else {
        return 'Whoa, chill out!';
      }
    } else if (this.isQuestion(words)) {
      return 'Sure.';
    } else if (this.isSilence(words)) {
      return 'Fine. Be that way!';
    } else {
      return 'Whatever.';
    }
  }
}

export default Bob;
