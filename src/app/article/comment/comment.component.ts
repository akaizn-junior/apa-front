import { Component, OnInit } from '@angular/core';
// local
import { CommentsService } from './comment.service';
import { ArticleComponent } from '../article.component';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  comments: any;

  constructor(private commentsService: CommentsService,
    private article: ArticleComponent) { }

  ngOnInit() {
    this.getComments();
  }

  getComments() {
    this.comments = this.article.getComments();
  }

  addComment(form) {
    if(!form.valid) return;

    const body = {
      comment: form.value.comment,
      username: this.article.author,
      article: {
        topics: this.article.topics
      }
    };

    return this.commentsService
    .create(body)
    .subscribe(() => {
      this.article.refresh();
    }, err => {
      if(err) throw err;
    });
  }
}
