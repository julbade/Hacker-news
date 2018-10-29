import { Author } from './author.model';

export class Article {
  id: number;
  constructor(public title: string, public url: string, public source: string, public author: Author, public time: Date) {
    this.id = count++;
  }
}

let count:number = 0;