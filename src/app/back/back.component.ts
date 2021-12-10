import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {
  particlesOptions = {
    particles: {
      color: {
        value: [ '#408ec6', '#1e2761' ]
      },
      lineLinked: {
        enable: true,
        color: 'random'
      },
      move: {
        enable: true,
        speed: 2,
      }
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

}
