import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavComponent} from './nav.component';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import {RouterModule}  from '@angular/router';
import { GithubService } from './github/github.service';
import { integrationList} from './integrationList/integration-list.component';
import { businessList} from './businessList/business-list.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    businessList,
    integrationList, 
    TeamComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'integration', component: integrationList},
      {path:'business', component: businessList},
      {path:'team', component: TeamComponent},
    ])
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
