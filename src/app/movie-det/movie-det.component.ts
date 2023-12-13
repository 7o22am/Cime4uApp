import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviessService } from '../moviess.service';

@Component({
  selector: 'app-movie-det',
  templateUrl: './movie-det.component.html',
  styleUrls: ['./movie-det.component.scss']
})
export class MovieDetComponent implements OnInit {
  id = "346698";
  type='all';
  moveDet:any='';
  img: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _ActivatedRoute: ActivatedRoute, private _MoviessService: MoviessService) {
    this.id = _ActivatedRoute.snapshot.params['id'];
    this.type = _ActivatedRoute.snapshot.params['type'];
  }

  ngOnInit(): void {
    this._MoviessService.GetMoviesDet(this.id , this.type).subscribe((movies) => {
      this.moveDet = movies;
      console.log(movies);
    })
  }


}
