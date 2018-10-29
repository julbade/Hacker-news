import { Injectable } from '@angular/core';
import { Author } from './author.model';
import { Article} from './article.model';
import { ARTICLES } from './mock-articles';


@Injectable()
export class ArticleService {

  constructor() { }

  getArticles() {
    return ARTICLES;
  }
}
