import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service'; 
import { RadiusAgentReturnData } from '../../models/radiusAgentReturnData'
import { from, AsyncSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gitUrl:string;
  resultData: Promise<RadiusAgentReturnData>;
  errorMsg:string

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
  }
  search() {
    this.resultData = this.searchService.getDataFromApi(this.gitUrl).toPromise();
  }
}
