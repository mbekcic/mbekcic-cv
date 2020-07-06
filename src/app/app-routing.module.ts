import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { IntroComponent } from './intro/intro.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: '', component: IntroComponent },
  { path: 'competitions', component: CompetitionsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
