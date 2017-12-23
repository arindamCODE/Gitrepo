import { Injectable } from '@angular/core';
import { Http }    from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GithubService {

  constructor(private http: Http) { }
  private giturl = "https://api.github.com/users";
  private repos = 'repos';
  private data: any;
  private data_string: any;
  get_data(username: string):any{
    const url = `${this.giturl}/${username}`;
    // this.data = this.http.get(url).map(res =>{ res.json(); console.log('1'); console.log(res);} ).subscribe(res => {this.data_string = res.json()});
    this.data = this.http.get(url)
    // console.log(this.data);
    // console.log(this.data_string);
    return this.data;
  }
  get_repo(username: string):any{
    const url = `${this.giturl}/${username}/${this.repos}`;
    this.data = this.http.get(url)
    // console.log(this.data);
    // console.log(this.data_string);
    return this.data; 
  }
}
