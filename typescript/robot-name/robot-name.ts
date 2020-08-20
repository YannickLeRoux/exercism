class NameRepository {
  names = new Set<string>();

  assignUniqueName(): string {
    let newName: string;
    do {
      newName = this.generateName();
    } while (!newName || this.isNameUsed(newName));
    this.addNameToDB(newName);
    return newName;
  }

  generateName(): string {
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

  isNameUsed(name: string): boolean {
    return this.names.has(name);
  }

  addNameToDB(name: string): void {
    this.names.add(name);
  }
}

const NAME_REPO = new NameRepository();

class Robot {
  private _name = NAME_REPO.assignUniqueName();

  get name(): string {
    if (this._name) return this._name;
    this._name = NAME_REPO.assignUniqueName();
    return this._name;
  }

  reset(): void {
    this._name = '';
  }
}

export default Robot;
