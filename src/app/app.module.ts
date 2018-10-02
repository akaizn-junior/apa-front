import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule, enableProdMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// local
import { environment } from '../environments/environment.prod';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { EntrarComponent } from './usuario/entrar/entrar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LogoComponent } from './logo/logo.component';
import { RegistroComponent } from './usuario/registro/registro.component';
import { ProjectComponent } from './project/project.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { ArticleComponent } from './article/article.component';
import { CommentComponent } from './article/comment/comment.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AnswerComponent } from './discussion/answer/answer.component';
// this is a production app
if (environment.production) {
  enableProdMode();
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    EntrarComponent,
    PagenotfoundComponent,
    LogoComponent,
    RegistroComponent,
    ProjectComponent,
    DiscussionComponent,
    ArticleComponent,
    CommentComponent,
    UsuarioComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
