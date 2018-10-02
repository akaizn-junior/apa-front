import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
// local
import { ArticlesService } from './article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: any;
  id: string;
  criado: string;
  comments: any;
  author: any;
  topics: any;

  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private router: Router) {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.getArticle();
  }

  getArticle() {
    return this.articlesService
    .getOne(this.id)
    .subscribe(data => {
      this.article = data;
      this.author = data['author'].username;
      this.topics = data['topics'];
    });
  }

  getComments() {
    return this.article.comments;
  }

  refresh() {
    this.router.onSameUrlNavigation = 'reload';
    return this.router.navigate(['article', this.id]);
  }
}
