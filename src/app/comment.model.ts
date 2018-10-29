import { Author } from './author.model';
import { Article} from './article.model';

export class Comment {
  constructor(public author: Author, public content: string, public time: Date, public article: Article) {}
}