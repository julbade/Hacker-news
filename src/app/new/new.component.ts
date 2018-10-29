import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Article } from '../article.model';
import { Author } from '../author.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  providers: [ArticleService]
})
export class NewComponent implements OnInit {

  constructor(private router: Router, private articleService: ArticleService) { }
  articles: Article[];
  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }
}
