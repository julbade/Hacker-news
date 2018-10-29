export class Author {
  id:number;
  constructor(public name: string) {
    this.id = count++;
  }
}
let count:number = 0;