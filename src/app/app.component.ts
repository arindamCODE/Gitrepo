import { Component, Input } from '@angular/core';
import { GithubService } from './github/github.service';
import{NavComponent } from './nav.component';
@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css','./bootstrap/css/bootstrap.min.css','./includes/css/bootstrap-glyphicons.css']
})
export class AppComponent {

  constructor(private githubService: GithubService){}
  title = 'app';
  @Input() username:string;
  userdata: any;
  userdata1:any;
  
  load_userdata():void{
    this.githubService.get_data(this.username)
    .subscribe(res => {this.userdata1 = res.json(); console.log('1'); console.log(res.json());});
    ;
    console.log('load: ')
    console.log(this.userdata);
  }
  load_userdata_repos():void{
    this.githubService.get_repo(this.username)
    .subscribe(res => {this.userdata = res.json(); console.log('1'); console.log(res.json());});
    ;
    console.log('load: ')
    console.log(this.userdata); 
  }
}
