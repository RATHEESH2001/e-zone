
import * as $ from 'jquery';
import { AfterViewInit, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  ngOnInit() {
      $('#aa').click(function(s) {
          alert('GeeksForGeeks');
      });
    }
} 
