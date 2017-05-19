import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  images = [
    {
      'sType': 'img',
      'imgSrc': 'http://lh3.googleusercontent.com/jN9tX6dCJ6_XL9E4K1KCO2Tuwe9_rYUbwv723eu6XGI0PWGLcPs0259VscOu249PPKKcU5AOXrq6JnleEaoK6K_JvZ2PY9lw3pMApzOpTQ=s660'
    },
    {'sType': 'video', 'url': 'https://www.youtube.com/watch?v=PRoet4XwmUY'},
    {'sType': 'map', q: 'Apple+Union+Square'},
    ];

  constructor() {
  }
}
