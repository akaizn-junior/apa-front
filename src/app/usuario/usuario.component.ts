import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
// local
import { UsersService } from './usuario.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  usuario: any;
  username: string;
  letra: string;
  discussions: any;
  projects: any;
  articles: any;
  loggedUser: any;
  interests: any;

  constructor(private usersService: UsersService,
    private route: ActivatedRoute,
    private auth: AuthService,
    private router: Router) {
    this.route.params.subscribe((params: Params) => {
      this.username = params['username'];
    });
  }

  ngOnInit() {
    this.getUser();
    this.me();
  }

  getUser() {
    return this.usersService
    .getOne(this.username)
    .subscribe(data => {
      this.usuario = data;
      this.letra = this.usuario.name.firstName[0];
      //grab user items
      this.getUserArticles(this.usuario._id);
      this.getUserDiscussions(this.usuario._id);
      this.getUserProjects(this.usuario._id);
      this.getUserInterests(this.usuario._id);
    });
  }

  getUserArticles(user) {
    return this.usersService
    .getItem(user, 'articles')
    .subscribe(data => {
      this.articles = data;
    });
  }

  getUserProjects(user) {
    return this.usersService
    .getItem(user, 'projects')
    .subscribe(data => {
      this.projects = data;
    });
  }

  getUserDiscussions(user) {
    return this.usersService
    .getItem(user, 'discussions')
    .subscribe(data => {
      this.discussions = data;
    });
  }

  getUserInterests(user) {
    return this.usersService
    .getItem(user, 'interests')
    .subscribe(data => {
      this.interests = data;
    });
  }

  //AUTH OPS

  logout() {
    return this.auth.logout();
  }

  me() {
    return this.usersService.me()
    .subscribe(data => {
      this.loggedUser = data;
      console.log(data);
    }, err => {
      //something failed
    })
  }

  isLoggedIn() {
    return this.loggedUser.username === this.usuario.username;
  }
}
