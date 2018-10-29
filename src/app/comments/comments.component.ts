import { Component, OnInit } from '@angular/core';
import { Comment } from '../comment.model';
import { Article } from '../article.model';
import { Author } from '../author.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [ArticleService]
})
export class CommentsComponent implements OnInit {

  constructor(private articleService:ArticleService) { }
  articles: Article[];
  comments: Comment[] = [];

  ngOnInit() {
    this.articles = this.articleService.getArticles();
    this.comments.push(new Comment(new Author("boomboomsubban"), "Where's your proof that the documents definitely came from the Russians, and that Wikileaks knew who was providing it? If you manage those, do you think refusing to publish would have any meaningful impact?", new Date("2018-10-29T11:09:00"), this.articles[0]));
  }

}
