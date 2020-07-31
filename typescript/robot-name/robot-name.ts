class NameDB {
  static names = new Set<string>();

  add(name: string): void {
    NameDB.names.add(name);
  }

  newName(): string {
    const newName = this.generateRandomLetter(2) + this.generateRandomDigit(3);
    return newName;
  }

  generateRandomLetter(count: number): string {
    let letters = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < count; i++) {
      const randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length));
      letters += randomCharacter;
    }
    return letters;
  }

  generateRandomDigit(count: number): string {
    let digits = '';
    const numbers = '0123456789';
    for (let i = 0; i < count; i++) {
      const randomNumber = numbers.charAt(Math.floor(Math.random() * numbers.length));
      digits += randomNumber;
    }
    return digits;
  }
}

class Robot {
  private _name = '';

  get name(): string {
    if (this._name) return this._name;

    let newName = nameFactory.newName();
    while (NameRepository.names.has(newName)) {
      newName = nameFactory.newName();
    }
    this._name = newName;
    NameRepository.names.add(newName);
    return newName;
  }

  resetName(): void {
    this._name = '';
  }
}

export default Robot;
