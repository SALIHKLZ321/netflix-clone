import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private service:MovieApiServiceService) { }
  bannerResult:any=[];
  trendingMovies:any=[];
  actionMoviesResult:any=[];
  adventureMoviesResult:any=[];
  comedyMoviesResult:any=[];
  animationMoviesResult:any=[];
  documentaryMoviesResult:any=[];
  sciencefictionMoviesResult:any=[];
  thrillerMoviesResult:any=[];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();

  }
  // bannerdata
  bannerData(){
    this.service.bannerApiData().subscribe((res)=>{
      console.log(res,'bannerresult');
      this.bannerResult=res.results;
      
    });
  }
  //trnding movies
  trendingData(){
    this.service.trendingMoviesApiData().subscribe((res)=>{
      console.log(res,'trending');
    
      this.trendingMovies=res.results;
    })
  }
  actionMovie(){
    this.service.fetchActionMovies().subscribe((res)=>{
      console.log(res);
      this.actionMoviesResult=res.results;
    })
  }
  adventureMovie(){
    this.service.fetchAdventureMovies().subscribe((res)=>{
      console.log(res);
      this.adventureMoviesResult=res.results;
    })
  }
  comedyMovie(){
    this.service.fetchAnimationMovies().subscribe((res)=>{
      console.log(res);
      this.animationMoviesResult=res.results;
    })
  }
  animationMovie(){
    this.service.fetchComedyMovies().subscribe((res)=>{
      console.log(res);
      this.comedyMoviesResult=res.results;
    })
  }
  documentaryMovie(){
    this.service.fetchDocumentaryMovies().subscribe((res)=>{
      console.log(res);
      this.documentaryMoviesResult=res.results;
    })
  }
  sciencefictionMovie(){
    this.service.fetchScienceFictionMovies().subscribe((res)=>{
      console.log(res);
      this.sciencefictionMoviesResult=res.results;
    })
  }
  thrillerMovie(){
    this.service.fetchThrillerMovies().subscribe((res)=>{
      console.log(res);
      this.thrillerMoviesResult=res.results;
    })
  }
}
