import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// local
import { ArticlesService } from '../article/article.service';
import ProjectsService from '../project/project.service';
import DiscussionsService from '../discussion/discussion.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  articles: any;
  discussions: any;
  projects: any;

  constructor(private http: HttpClient,
    private articlesService: ArticlesService) {}

  ngOnInit() {
    this.getArticles();
    this.getDiscussions();
    this.getProjects();
  }

  getArticles() {
    this.articlesService
    .getChunk(0, 10)
    .subscribe(data => {
      this.articles = data;
    });
  }

  getProjects() {
    ProjectsService(this.http)
    .getChunk(0, 10)
    .subscribe(data => {
      this.projects = data;
    });
  }

  getDiscussions() {
    DiscussionsService(this.http)
    .getChunk(0, 10)
    .subscribe(data => {
      this.discussions = data;
    });
  }
}
