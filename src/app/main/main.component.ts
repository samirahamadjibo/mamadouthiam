import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToProjects(){
    this.router.navigate(['/home'], { fragment: "projects" });
  }
  navigateToExperiences(){
    this.router.navigate(['/home'], { fragment: "experiences" });
  }
  navigateToContact(){
    this.router.navigate(['/home'], { fragment: "contact" });
  }

}
