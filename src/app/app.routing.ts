import { Routes, RouterModule } from '@angular/router';
// local
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MainComponent } from './main/main.component';
import { EntrarComponent } from './usuario/entrar/entrar.component';
import { RegistroComponent } from './usuario/registro/registro.component';
import { ArticleComponent } from './article/article.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { ProjectComponent } from './project/project.component';
// import { AuthGuard } from '../auth/auth.guard';

const appRoutes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/inicio'
}, {
  path: 'inicio',
  component: MainComponent
}, {
  path: 'u/:username',
  pathMatch: 'full',
  redirectTo: 'usuario/:username'
}, {
  path: 'usuario/:username',
  component: UsuarioComponent
}, {
  path: 'about',
  component: AboutComponent
}, {
  path: 'entrar',
  component: EntrarComponent
}, {
  path: 'registro',
  component: RegistroComponent
}, {
  path: 'article/:id',
  component: ArticleComponent
}, {
  path: 'project/:id',
  component: ProjectComponent
}, {
  path: 'discussion/:id',
  component: DiscussionComponent
}, {
  path: '**',
  component: PagenotfoundComponent
}];

export const routing = RouterModule.forRoot(appRoutes);
