import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../model/classes';

@Component({
  selector: 'app-play-movie',
  templateUrl: './play-movie.component.html',
  styleUrls: ['./play-movie.component.css']
})

export class PlayMovieComponent implements OnInit {

  constructor(private movieService: MovieService, private appRoute: ActivatedRoute) { }

  public movie:Movie = undefined;

  ngOnInit(): void { 
    window.scrollTo(0, 0); 
    try {
      this.appRoute.params.subscribe(params => {
        const paramMovieId = params['movieId'];
        if (paramMovieId) {
          this.movieService.findMovie(paramMovieId).subscribe((data) => {
            this.movie = data;
          });
        }
        else { alert("param movie not found"); }
        });
    } catch (error) { alert(error); }
  }

}
