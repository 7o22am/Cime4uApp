import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observeOn } from 'rxjs';
 
 
@Injectable({
  providedIn: 'root'
})
export class MoviessService {

  constructor(private _HttpClient:HttpClient) { }


  GetMovies(page:Number , type:string):Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=108a9f5af213b0f18c1369bf7a3d6186&page=${page}`)

  }
  GetdefMovies(type:string):Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=108a9f5af213b0f18c1369bf7a3d6186`)

  }

  GetMoviesDet(id:string ,type:string):Observable<any> {
    if(type=='all')
    {type='movie'}
    return this._HttpClient.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=108a9f5af213b0f18c1369bf7a3d6186`)

  }
}
