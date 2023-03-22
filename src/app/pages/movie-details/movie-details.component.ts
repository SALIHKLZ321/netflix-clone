import { AnimateTimings } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private service:MovieApiServiceService,private router:ActivatedRoute) { }
  getMovieDetailResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;
  ngOnInit(): void {
    let getParamId=this.router.snapshot.paramMap.get('id')
    console.log(getParamId,'id in params');
    
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getCast(getParamId);
  }
  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe((res)=>{
      console.log(res,'moviedetails');
      this.getMovieDetailResult=res
      
    })
  }
  getVideo(id:any){
    this.service.getMovieVideo(id).subscribe((res)=>{
      console.log(res,'mvideo');
      res.results.forEach((e:any) => {
        if(e.type=='Trailer'){
          this.getMovieVideoResult=e.key;

        }
      });
      
      
      
    })
  }
  getCast(id:any){
    this.service.getMovieCast(id).subscribe((res)=>{
      console.log(res,'movie cast');
      this.getMovieCastResult=res.cast
    })
  }
  modalUp(){
    
  }
}
