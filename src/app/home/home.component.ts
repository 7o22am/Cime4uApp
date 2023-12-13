import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MoviessService } from '../moviess.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  page: any = 1;
  type:any='all';
  movieTrending: any[] = [];
  img: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _MoviessService: MoviessService) { }
  ngOnInit(): void {
    this._MoviessService.GetMovies(this.page , this.type).subscribe((movies) => {
      this.movieTrending = movies.results;
    })
  }

  pageview(pageback: Number) {

    this.page = pageback;
    this._MoviessService.GetMovies(this.page , this.type).subscribe((movies) => {
      this.movieTrending = movies.results;
    })
  }

  addPageview() {
    this.page++;
    this._MoviessService.GetMovies(this.page , this.type).subscribe((movies) => {
      this.movieTrending = movies.results;
    })
  }
  bkPageview() {
    if(this.page>1){
       this.page--;
      this._MoviessService.GetMovies(this.page , this.type).subscribe((movies) => {
      this.movieTrending = movies.results;
    })
    }
   
  }

  call(type:string){
     
    this.type=type;
    this.pageview(1);
  }
}
