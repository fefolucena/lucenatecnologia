import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { routing } from './app-routing.module'
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { AuthorComponent } from './curriculum/author/author.component';
import { AboutComponent } from './curriculum/about/about.component';
import { ExperiencesComponent } from './curriculum/experiences/experiences.component';
import { EducationComponent } from './curriculum/education/education.component';
import { SkillsComponent } from './curriculum/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CurriculumComponent,
    AuthorComponent,
    AboutComponent,
    ExperiencesComponent,
    EducationComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
